import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import {
  BARCODE_FORMAT_LABELS,
  BARCODE_FORMATS,
  DEFAULT_CONFIG,
  type LoyaltyFlipCardConfig,
} from './config';
import { applyTemplate, findTemplate, matchTemplate, TEMPLATES, templateLabel } from './templates';
import type { HaFormSchema, HomeAssistant, LovelaceCardConfig } from './types';

// ha-form selects need a non-empty value for the "no template" option.
const CUSTOM = 'custom';

const TEMPLATE_OPTIONS = [
  { value: CUSTOM, label: 'Custom' },
  ...TEMPLATES.map((template) => ({ value: template.id, label: templateLabel(template) })).sort(
    (a, b) => a.label.localeCompare(b.label),
  ),
];

const LABELS: Record<string, string> = {
  template: 'Shop template',
  code: 'Code',
  format: 'Symbol type',
  barcode_format: 'Barcode format',
  code_pattern: 'Code pattern',
  title: 'Title',
  subtitle: 'Subtitle',
  show_icon: 'Show icon or logo',
  icon: 'Icon',
  logo: 'Logo URL',
  color: 'Accent color',
  show_code_text: 'Show code as text',
  popup_title: 'Popup title',
  qr_size: 'QR size (px)',
  barcode_height: 'Barcode height (px)',
  barcode_width: 'Barcode bar width (px)',
  fallback_to_qr: 'Fall back to a QR code',
};

const HELPERS: Record<string, string> = {
  template:
    "Fills in the shop's title, color, logo and barcode settings. You can still change them below.",
  code_pattern: 'Optional. <CODE> is replaced with your code before encoding, e.g. 1,<CODE>,',
  code: 'The value encoded in the symbol. Quote numeric codes in YAML so leading zeros are preserved.',
  format:
    'Auto-detect uses EAN/UPC for 8, 12, 13 or 14 digit codes with a valid check digit, and a QR code otherwise.',
  fallback_to_qr: 'Show a QR code when the value cannot be encoded as the selected barcode format.',
  barcode_height: 'Ignored for PDF417, whose height follows the number of rows.',
  barcode_width: 'For PDF417 this sets the size of one module.',
  title: 'Leave empty to show only the logo or icon, centered on the card.',
  logo: 'Use a URL that Home Assistant can reach, for example /local/my-logo.png.',
};

// ha-form renders a missing boolean as off, so show the effective defaults.
const BOOLEAN_DEFAULTS = {
  show_icon: DEFAULT_CONFIG.show_icon,
  show_code_text: DEFAULT_CONFIG.show_code_text,
  fallback_to_qr: DEFAULT_CONFIG.fallback_to_qr,
};

export class LoyaltyFlipCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: LoyaltyFlipCardConfig;

  public setConfig(config: LovelaceCardConfig): void {
    this._config = { ...config } as LoyaltyFlipCardConfig;
  }

  protected render() {
    const config = this._config;
    if (!config) return nothing;

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${{ ...BOOLEAN_DEFAULTS, ...config, template: matchTemplate(config) ?? CUSTOM }}
        .schema=${this._buildSchema(config)}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _buildSchema(config: LoyaltyFlipCardConfig): HaFormSchema[] {
    const format = config.format ?? 'qr';

    return [
      {
        name: 'template',
        selector: { select: { mode: 'dropdown', options: TEMPLATE_OPTIONS } },
      },
      {
        name: 'code',
        required: true,
        selector: { text: {} },
      },
      {
        name: 'format',
        selector: {
          select: {
            mode: 'dropdown',
            options: [
              { value: 'qr', label: 'QR code' },
              { value: 'barcode', label: 'Barcode' },
              { value: 'auto', label: 'Auto-detect' },
            ],
          },
        },
      },
      ...(format === 'barcode'
        ? [
            {
              name: 'barcode_format',
              selector: {
                select: {
                  mode: 'dropdown',
                  options: BARCODE_FORMATS.map((value) => ({
                    value,
                    label: BARCODE_FORMAT_LABELS[value],
                  })),
                },
              },
            },
          ]
        : []),
      { name: 'code_pattern', selector: { text: {} } },
      { name: 'title', selector: { text: {} } },
      { name: 'subtitle', selector: { text: {} } },
      { name: 'show_icon', selector: { boolean: {} } },
      ...(config.show_icon !== false
        ? [
            { name: 'icon', selector: { icon: {} } },
            { name: 'logo', selector: { text: {} } },
          ]
        : []),
      { name: 'color', selector: { text: {} } },
      { name: 'show_code_text', selector: { boolean: {} } },
      { name: 'popup_title', selector: { text: {} } },
      ...(format !== 'barcode'
        ? [
            {
              name: 'qr_size',
              selector: { number: { min: 160, max: 640, step: 20, mode: 'box' } },
            },
          ]
        : []),
      ...(format !== 'qr'
        ? [
            {
              name: 'barcode_height',
              selector: { number: { min: 48, max: 240, step: 8, mode: 'box' } },
            },
            {
              name: 'barcode_width',
              selector: { number: { min: 1, max: 4, step: 1, mode: 'box' } },
            },
            { name: 'fallback_to_qr', selector: { boolean: {} } },
          ]
        : []),
    ];
  }

  private _computeLabel = (schema: HaFormSchema): string => LABELS[schema.name] ?? schema.name;

  private _computeHelper = (schema: HaFormSchema): string => HELPERS[schema.name] ?? '';

  private _valueChanged(event: CustomEvent<{ value: LovelaceCardConfig }>): void {
    // `template` is an editor-only field: picking one copies its values into
    // the config, and the key itself is never saved.
    const { template: picked, ...value } = event.detail.value;
    const previous = this._config ? matchTemplate(this._config) : undefined;
    const template =
      typeof picked === 'string' && picked !== (previous ?? CUSTOM)
        ? findTemplate(picked)
        : undefined;
    const config = template ? applyTemplate(value as LovelaceCardConfig, template) : value;

    this._config = config as LoyaltyFlipCardConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

if (!customElements.get('loyalty-flip-card-editor')) {
  customElements.define('loyalty-flip-card-editor', LoyaltyFlipCardEditor);
}
