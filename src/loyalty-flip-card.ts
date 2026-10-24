import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { normalizeConfig, readableInk, type LoyaltyFlipCardConfig } from './config';
import {
  renderBarcodeSvg,
  renderQrSvg,
  resolveCode,
  validateBarcodeValue,
  type ResolvedCode,
} from './render-code';
import { cardStyles } from './styles';
import type { HomeAssistant, LovelaceCardConfig } from './types';
import './loyalty-flip-card-editor';

type ContentState = 'none' | 'empty' | 'qr' | 'barcode' | 'error';

export class LoyaltyFlipCard extends LitElement {
  public static styles = cardStyles;

  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: LoyaltyFlipCardConfig;
  @state() private _open = false;
  @state() private _copied = false;
  @state() private _logoFailed = false;
  @state() private _content: ContentState = 'none';
  @state() private _qrSvg?: string;
  @state() private _error?: string;
  @state() private _note?: string;

  private readonly _dialog = createRef<HTMLDialogElement>();
  private readonly _trigger = createRef<HTMLButtonElement>();
  private readonly _barcode = createRef<SVGSVGElement>();
  private _renderToken = 0;
  private _renderKey = '';
  private _copyTimer?: number;

  public static getStubConfig(): Record<string, unknown> {
    return {
      code: '5901234123457',
      format: 'auto',
      title: 'My Loyalty Card',
      subtitle: 'Tap to show your code',
    };
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement('loyalty-flip-card-editor');
  }

  public setConfig(config: LovelaceCardConfig): void {
    this._config = normalizeConfig(config);
    this._invalidate();
    if (this._open) void this._prepareCode();
  }

  public getCardSize(): number {
    return 2;
  }

  public getGridOptions(): Record<string, unknown> {
    return {
      columns: 6,
      rows: 3,
      min_columns: 3,
      min_rows: 2,
    };
  }

  protected render() {
    const config = this._config;
    if (!config) return nothing;

    const accent = config.color
      ? `--loyalty-accent: ${config.color}; --loyalty-ink: ${readableInk(config.color)};`
      : '';

    return html`
      <ha-card style=${accent}>${this._renderFace(config)}</ha-card>
      ${this._renderDialog(config)}
    `;
  }

  private _renderFace(config: LoyaltyFlipCardConfig) {
    return html`
      <button
        class="face"
        type="button"
        ${ref(this._trigger)}
        aria-haspopup="dialog"
        aria-expanded=${this._open ? 'true' : 'false'}
        aria-label=${`Show ${config.title} code`}
        @click=${this._openPopup}
      >
        <div class="face__head">
          <div class="badge">
            ${
              config.logo && !this._logoFailed
                ? html`<img src=${config.logo} alt="" @error=${this._onLogoError} />`
                : config.icon
                  ? html`<ha-icon icon=${config.icon}></ha-icon>`
                  : nothing
            }
          </div>
          <div class="face__copy">
            <div class="face__title">${config.title}</div>
            ${
              config.subtitle ? html`<div class="face__subtitle">${config.subtitle}</div>` : nothing
            }
          </div>
        </div>
        <div class="face__hint">
          <ha-icon icon=${config.format === 'barcode' ? 'mdi:barcode' : 'mdi:qrcode'}></ha-icon>
          <span>Tap to show code</span>
          <ha-icon class="face__chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
      </button>
    `;
  }

  private _renderDialog(config: LoyaltyFlipCardConfig) {
    return html`
      <dialog
        ${ref(this._dialog)}
        aria-labelledby="loyalty-code-title"
        @click=${this._onDialogClick}
        @close=${this._onDialogClose}
      >
        <div class="panel">
          <header class="panel__head">
            <h2 class="panel__title" id="loyalty-code-title">${config.popup_title}</h2>
            <button class="icon-btn" type="button" aria-label="Close" @click=${this._closePopup}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </header>
          <div class="code" style=${`--qr-size: ${config.qr_size}px`}>${this._renderContent()}</div>
          ${this._note ? html`<p class="note">${this._note}</p>` : nothing}
          ${
            config.code
              ? html`
                  <footer class="footer">
                    ${
                      config.show_code_text
                        ? html`<code class="value">${config.code}</code>`
                        : nothing
                    }
                    <button
                      class=${classMap({ copy: true, copied: this._copied })}
                      type="button"
                      @click=${this._copyCode}
                    >
                      <ha-icon icon=${this._copied ? 'mdi:check' : 'mdi:content-copy'}></ha-icon>
                      <span>${this._copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </footer>
                `
              : nothing
          }
        </div>
      </dialog>
    `;
  }

  private _renderContent() {
    switch (this._content) {
      case 'empty':
        return html`
          <p class="message">
            No code configured.<br />
            Add a <code>code</code> in the card settings.
          </p>
        `;
      case 'error':
        return html`<p class="message">${this._error ?? 'Unable to render this code.'}</p>`;
      case 'barcode':
        return html`<svg class="barcode" ${ref(this._barcode)} aria-label="Barcode"></svg>`;
      case 'qr':
        if (this._error) return html`<p class="message">${this._error}</p>`;
        if (!this._qrSvg) {
          return html`<div class="loading" role="status">Preparing code…</div>`;
        }
        return html`
          <div class="qr" role="img" aria-label="QR code">${unsafeSVG(this._qrSvg)}</div>
        `;
      default:
        return nothing;
    }
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    window.clearTimeout(this._copyTimer);
    this._renderToken += 1;
    const dialog = this._dialog.value;
    if (dialog?.open) dialog.close();
  }

  private _onLogoError(): void {
    this._logoFailed = true;
  }

  private _openPopup(): void {
    const dialog = this._dialog.value;
    if (!dialog) return;
    if (!dialog.open) {
      try {
        dialog.showModal();
      } catch {
        return;
      }
    }
    this._open = true;
    void this._prepareCode();
  }

  private _closePopup(): void {
    this._dialog.value?.close();
  }

  private _onDialogClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this._closePopup();
  }

  private _onDialogClose(): void {
    this._open = false;
    this._copied = false;
    this._trigger.value?.focus();
  }

  private async _copyCode(): Promise<void> {
    const code = this._config?.code;
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      this._copied = true;
      window.clearTimeout(this._copyTimer);
      this._copyTimer = window.setTimeout(() => {
        this._copied = false;
      }, 1600);
    } catch {
      this._note = 'Clipboard access was blocked. Select the code and copy it manually.';
    }
  }

  private _invalidate(): void {
    this._renderToken += 1;
    this._renderKey = '';
    this._content = 'none';
    this._qrSvg = undefined;
    this._error = undefined;
    this._note = undefined;
    this._logoFailed = false;
  }

  private async _prepareCode(): Promise<void> {
    const config = this._config;
    if (!config) return;

    const key = JSON.stringify([
      config.code,
      config.format,
      config.barcode_format,
      config.qr_size,
      config.barcode_height,
      config.barcode_width,
      config.fallback_to_qr,
    ]);
    if (key === this._renderKey && this._content !== 'none') return;

    this._renderKey = key;
    this._renderToken += 1;
    const token = this._renderToken;
    this._qrSvg = undefined;
    this._error = undefined;
    this._note = undefined;

    const resolved = resolveCode(config);
    if (resolved.kind === 'empty') {
      this._content = 'empty';
      return;
    }
    if (resolved.kind === 'qr') {
      await this._showQr(resolved.value, token, resolved.note);
      return;
    }
    await this._showBarcode(resolved, token, config);
  }

  private async _showQr(value: string, token: number, note?: string): Promise<void> {
    this._content = 'qr';
    this._qrSvg = undefined;
    if (note) this._note = note;

    try {
      const svg = await renderQrSvg(value);
      if (token !== this._renderToken) return;
      this._qrSvg = svg;
    } catch {
      if (token !== this._renderToken) return;
      this._content = 'error';
      this._error = 'This value is too long to render as a QR code.';
      this._note = undefined;
    }
  }

  private async _showBarcode(
    resolved: ResolvedCode,
    token: number,
    config: LoyaltyFlipCardConfig,
  ): Promise<void> {
    const format = resolved.barcodeFormat;
    if (!format) {
      await this._showQr(resolved.value, token);
      return;
    }

    const problem = validateBarcodeValue(format, resolved.value);
    if (problem) {
      await this._handleBarcodeProblem(problem, resolved.value, config, token);
      return;
    }

    this._content = 'barcode';
    this._qrSvg = undefined;
    await this.updateComplete;
    if (token !== this._renderToken) return;

    const svg = this._barcode.value;
    if (!svg) {
      await this._handleBarcodeProblem(
        'The barcode could not be drawn.',
        resolved.value,
        config,
        token,
      );
      return;
    }

    try {
      renderBarcodeSvg(svg, resolved.value, format, {
        height: config.barcode_height,
        width: config.barcode_width,
      });
      if (token !== this._renderToken) return;
      this._note = resolved.note;
    } catch (error) {
      const detail = error instanceof Error && error.message ? ` ${error.message}` : '';
      const message = `This value cannot be encoded as ${format}.${detail}`;
      await this._handleBarcodeProblem(message, resolved.value, config, token);
    }
  }

  private async _handleBarcodeProblem(
    message: string,
    value: string,
    config: LoyaltyFlipCardConfig,
    token: number,
  ): Promise<void> {
    if (config.fallback_to_qr) {
      await this._showQr(value, token, `${message} Showing a QR code instead.`);
      return;
    }
    this._content = 'error';
    this._error = message;
  }
}

if (!customElements.get('loyalty-flip-card')) {
  customElements.define('loyalty-flip-card', LoyaltyFlipCard);
}

window.customCards = window.customCards ?? [];
if (!window.customCards.some((card) => card.type === 'loyalty-flip-card')) {
  window.customCards.push({
    type: 'loyalty-flip-card',
    name: 'Loyalty Flip Card',
    description: 'Displays a loyalty QR code or barcode in a tappable popup.',
    preview: true,
  });
}

console.info(
  `%c LOYALTY-FLIP-CARD %c v${__VERSION__} `,
  'color: #fff; background: #1a73e8; font-weight: 600; border-radius: 3px 0 0 3px;',
  'color: #1a73e8; background: #e8f0fe; border-radius: 0 3px 3px 0;',
);
