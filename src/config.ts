import type { LovelaceCardConfig } from './types';

export const CODE_FORMATS = ['qr', 'barcode', 'auto'] as const;
export type CodeFormat = (typeof CODE_FORMATS)[number];

export const BARCODE_FORMATS = [
  'CODE128',
  'EAN13',
  'EAN8',
  'UPC',
  'CODE39',
  'ITF14',
  'CODABAR',
  'MSI',
  'PDF417',
] as const;
export type BarcodeFormat = (typeof BARCODE_FORMATS)[number];

export const BARCODE_FORMAT_LABELS: Record<BarcodeFormat, string> = {
  CODE128: 'Code 128 (general purpose)',
  EAN13: 'EAN-13',
  EAN8: 'EAN-8',
  UPC: 'UPC-A',
  CODE39: 'Code 39',
  ITF14: 'ITF-14',
  CODABAR: 'Codabar',
  MSI: 'MSI',
  PDF417: 'PDF417 (2D stacked)',
};

export interface LoyaltyFlipCardConfig extends LovelaceCardConfig {
  /** Value encoded in the QR code or barcode. */
  code: string;
  /** Which symbol to draw. `auto` guesses EAN/UPC for numeric codes, QR otherwise. */
  format: CodeFormat;
  /** Symbology used when `format` is `barcode`. */
  barcode_format: BarcodeFormat;
  /** Wraps the code before encoding; `<CODE>` is replaced with `code`. */
  code_pattern?: string;
  /** Card face title. Without it the face shows only the centered logo or icon. */
  title?: string;
  subtitle?: string;
  /** Show the icon or logo on the card face. */
  show_icon: boolean;
  icon?: string;
  logo?: string;
  color?: string;
  show_code_text: boolean;
  popup_title?: string;
  qr_size: number;
  barcode_height: number;
  barcode_width: number;
  fallback_to_qr: boolean;
}

export const DEFAULT_CONFIG = {
  code: '',
  format: 'qr',
  barcode_format: 'CODE128',
  show_icon: true,
  show_code_text: true,
  qr_size: 320,
  barcode_height: 96,
  barcode_width: 2,
  fallback_to_qr: true,
} as const;

export const CODE_PLACEHOLDER = '<CODE>';

const COLOR_PATTERN =
  /^(#[0-9a-f]{3,8}|(?:rgb|hsl)a?\([0-9.,%\s/]+\)|[a-z]+|var\(--[a-z0-9-]+\))$/i;

function text(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function codeText(value: unknown): string {
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  return '';
}

function oneOf<T extends readonly string[]>(values: T, value: unknown): T[number] | undefined {
  return typeof value === 'string' && (values as readonly string[]).includes(value)
    ? (value as T[number])
    : undefined;
}

function integer(value: unknown, fallback: number, min: number, max: number): number {
  const parsed = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, Math.round(parsed)));
}

function codePattern(value: unknown): string | undefined {
  // Not trimmed: leading/trailing characters may be part of the encoded value.
  return typeof value === 'string' && value.includes(CODE_PLACEHOLDER) ? value : undefined;
}

function color(value: unknown): string | undefined {
  const candidate = text(value);
  return candidate && COLOR_PATTERN.test(candidate) ? candidate : undefined;
}

/**
 * Normalizes user configuration into a fully-populated config. Invalid optional
 * values fall back to defaults; a missing `code` is allowed so the visual
 * editor can render a helpful placeholder card.
 */
export function normalizeConfig(input: LovelaceCardConfig): LoyaltyFlipCardConfig {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) {
    throw new Error('loyalty-flip-card: configuration must be an object');
  }

  const title = text(input.title);
  const logo = text(input.logo);

  return {
    type: typeof input.type === 'string' ? input.type : 'custom:loyalty-flip-card',
    code: codeText(input.code),
    format: oneOf(CODE_FORMATS, input.format) ?? DEFAULT_CONFIG.format,
    barcode_format: oneOf(BARCODE_FORMATS, input.barcode_format) ?? DEFAULT_CONFIG.barcode_format,
    code_pattern: codePattern(input.code_pattern),
    title,
    subtitle: text(input.subtitle),
    show_icon: input.show_icon !== false,
    icon: text(input.icon) ?? 'mdi:card-account-details',
    logo,
    color: color(input.color),
    show_code_text: input.show_code_text !== false,
    popup_title: text(input.popup_title) ?? title,
    qr_size: integer(input.qr_size, DEFAULT_CONFIG.qr_size, 160, 640),
    barcode_height: integer(input.barcode_height, DEFAULT_CONFIG.barcode_height, 48, 240),
    barcode_width: integer(input.barcode_width, DEFAULT_CONFIG.barcode_width, 1, 4),
    fallback_to_qr: input.fallback_to_qr !== false,
  };
}

function parseColor(color: string): [number, number, number] | undefined {
  const hex = /^#([0-9a-f]{3,8})$/i.exec(color)?.[1];
  if (hex) {
    if (hex.length === 3 || hex.length === 4) {
      return [
        Number.parseInt(hex[0] + hex[0], 16),
        Number.parseInt(hex[1] + hex[1], 16),
        Number.parseInt(hex[2] + hex[2], 16),
      ];
    }
    if (hex.length === 6 || hex.length === 8) {
      return [
        Number.parseInt(hex.slice(0, 2), 16),
        Number.parseInt(hex.slice(2, 4), 16),
        Number.parseInt(hex.slice(4, 6), 16),
      ];
    }
    return undefined;
  }

  const rgb = /^rgba?\(\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})/i.exec(color);
  if (rgb) return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  return undefined;
}

/** Picks a readable foreground color for a user-supplied card accent. */
export function readableInk(color: string): string {
  const rgb = parseColor(color);
  if (!rgb) return '#ffffff';

  const [r, g, b] = rgb.map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.45 ? '#111111' : '#ffffff';
}
