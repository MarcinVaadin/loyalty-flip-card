import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import '../src/loyalty-flip-card';

const ICONS: Record<string, string> = {
  'mdi:card-account-details':
    'M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H12V11H6V9M6,13H18V15H6V13Z',
  'mdi:qrcode':
    'M3,11H5V13H3V11M11,5H13V9H11V5M9,11H13V15H11V13H9V11M15,11H17V13H19V11H21V13H19V15H21V19H19V21H17V19H13V21H11V17H15V15H17V13H15V11M19,19V15H17V19H19M15,3H21V9H15V3M17,5V7H19V5H17M3,3H9V9H3V3M5,5V7H7V5H5M3,15H9V21H3V15M5,17V19H7V17H5Z',
  'mdi:barcode':
    'M2,6H4V18H2V6M5,6H6V18H5V6M7,6H10V18H7V6M11,6H12V18H11V6M14,6H16V18H14V6M17,6H20V18H17V6M21,6H22V18H21V6Z',
  'mdi:chevron-right': 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
  'mdi:close':
    'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  'mdi:content-copy':
    'M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z',
  'mdi:check': 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
};

class DemoHaCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
      border-radius: var(--ha-card-border-radius, 16px);
      background: var(--ha-card-background, #fff);
      box-shadow: var(--ha-card-box-shadow, none);
      color: var(--primary-text-color, #1c1c1e);
    }
  `;

  protected render() {
    return html`<slot></slot>`;
  }
}

class DemoHaIcon extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
      line-height: 1;
      vertical-align: middle;
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: currentColor;
    }

    .missing {
      display: block;
      width: 100%;
      height: 100%;
      border: 1.5px dashed currentColor;
      border-radius: 4px;
      opacity: 0.5;
    }
  `;

  @property({ type: String }) public icon?: string;

  protected render() {
    const path = this.icon ? ICONS[this.icon] : undefined;
    return path
      ? html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${path}></path></svg>`
      : html`<span class="missing"></span>`;
  }
}

if (!customElements.get('ha-card')) customElements.define('ha-card', DemoHaCard);
if (!customElements.get('ha-icon')) customElements.define('ha-icon', DemoHaIcon);

interface DemoConfig extends Record<string, unknown> {
  code?: string;
  format?: string;
  barcode_format?: string;
  title?: string;
  subtitle?: string;
  color?: string;
  qr_size?: number;
  show_code_text?: boolean;
  fallback_to_qr?: boolean;
}

interface DemoCardElement extends HTMLElement {
  setConfig(config: Record<string, unknown>): void;
}

const PRESETS: Array<{ label: string; config: DemoConfig }> = [
  {
    label: 'QR code',
    config: {
      code: 'https://example.com/members/4821-9930',
      format: 'qr',
      title: 'Corner Coffee Club',
      subtitle: 'Member 4821 9930',
      color: '#0b6e4f',
    },
  },
  {
    label: 'EAN-13 (auto)',
    config: {
      code: '5901234123457',
      format: 'auto',
      title: 'Fresh Market',
      subtitle: 'Loyalty card',
      color: '#1d4ed8',
    },
  },
  {
    label: 'Code 128',
    config: {
      code: 'LOYALTY-8842-9931',
      format: 'barcode',
      barcode_format: 'CODE128',
      title: 'City Fitness',
      subtitle: 'Scan at the front desk',
      color: '#111827',
      barcode_height: 88,
      barcode_width: 2,
    },
  },
  {
    label: 'Invalid barcode (fallback)',
    config: {
      code: 'MEMBER-42',
      format: 'barcode',
      barcode_format: 'EAN13',
      title: 'Fallback demo',
      subtitle: 'EAN-13 cannot encode letters',
      color: '#9a3412',
    },
  },
];

const card = document.querySelector('#card') as DemoCardElement;
const textarea = document.querySelector('#config') as HTMLTextAreaElement;
const error = document.querySelector('#error') as HTMLParagraphElement;
const modeLabel = document.querySelector('#mode-label') as HTMLSpanElement;
const presetsElement = document.querySelector('#presets') as HTMLDivElement;

function stringify(config: DemoConfig): string {
  return JSON.stringify({ type: 'custom:loyalty-flip-card', ...config }, null, 2);
}

function apply(config: DemoConfig): void {
  try {
    card.setConfig({ type: 'custom:loyalty-flip-card', ...config });
    error.textContent = '';
    modeLabel.textContent =
      config.format === 'barcode' ? 'Barcode' : config.format === 'auto' ? 'Auto-detect' : 'QR';
  } catch (cause) {
    error.textContent = cause instanceof Error ? cause.message : String(cause);
  }
}

function applyFromTextarea(): void {
  try {
    const parsed = JSON.parse(textarea.value) as DemoConfig;
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      throw new Error('Configuration must be a JSON object.');
    }
    const config = { ...parsed };
    delete config.type;
    apply(config);
    textarea.value = stringify(config);
  } catch (cause) {
    error.textContent = cause instanceof Error ? cause.message : String(cause);
  }
}

for (const preset of PRESETS) {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = preset.label;
  button.addEventListener('click', () => {
    textarea.value = stringify(preset.config);
    apply(preset.config);
  });
  presetsElement.append(button);
}

document.querySelector('#apply')?.addEventListener('click', applyFromTextarea);
document.querySelector('#theme-toggle')?.addEventListener('click', () => {
  const root = document.documentElement;
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
});

textarea.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
    event.preventDefault();
    applyFromTextarea();
  }
});

textarea.value = stringify(PRESETS[0].config);
apply(PRESETS[0].config);
