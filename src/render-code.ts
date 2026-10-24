import JsBarcode from 'jsbarcode';
import QRCode from 'qrcode';
import type { BarcodeFormat, LoyaltyFlipCardConfig } from './config';

export interface ResolvedCode {
  kind: 'empty' | 'qr' | 'barcode';
  value: string;
  barcodeFormat?: BarcodeFormat;
  note?: string;
}

// Only these symbologies tolerate whitespace/hyphens in printed loyalty numbers.
const SEPARATOR_FORMATS: ReadonlySet<BarcodeFormat> = new Set([
  'EAN13',
  'EAN8',
  'UPC',
  'ITF14',
  'MSI',
]);

/** Validates the GTIN (EAN-8/12/13/14) mod-10 check digit. */
export function isValidGtin(value: string): boolean {
  if (!/^(?:\d{8}|\d{12,14})$/.test(value)) return false;

  const digits = value.split('').map(Number);
  const check = digits.pop();
  if (check === undefined) return false;

  let sum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    sum += digits[digits.length - 1 - i] * (i % 2 === 0 ? 3 : 1);
  }
  return (10 - (sum % 10)) % 10 === check;
}

/** Detects a barcode symbology for digit-only codes with a valid check digit. */
export function detectBarcodeFormat(value: string): BarcodeFormat | undefined {
  const digits = value.replace(/[\s-]/g, '');
  if (!/^\d+$/.test(digits) || !isValidGtin(digits)) return undefined;

  switch (digits.length) {
    case 8:
      return 'EAN8';
    case 12:
      return 'UPC';
    case 13:
      return 'EAN13';
    case 14:
      return 'ITF14';
    default:
      return undefined;
  }
}

export function normalizeBarcodeValue(format: BarcodeFormat, value: string): string {
  const trimmed = value.trim();
  return SEPARATOR_FORMATS.has(format) ? trimmed.replace(/[\s-]/g, '') : trimmed;
}

export function resolveCode(config: LoyaltyFlipCardConfig): ResolvedCode {
  const { code } = config;
  if (!code) return { kind: 'empty', value: '' };

  if (config.format === 'qr') {
    return { kind: 'qr', value: code };
  }

  if (config.format === 'barcode') {
    return {
      kind: 'barcode',
      value: normalizeBarcodeValue(config.barcode_format, code),
      barcodeFormat: config.barcode_format,
    };
  }

  const detected = detectBarcodeFormat(code);
  if (detected) {
    return {
      kind: 'barcode',
      value: normalizeBarcodeValue(detected, code),
      barcodeFormat: detected,
      note: `Detected ${detected} from the code format.`,
    };
  }

  return {
    kind: 'qr',
    value: code,
    note: 'No supported barcode format detected, showing a QR code instead.',
  };
}

function validateGtin(value: string, baseLength: number, label: string): string | undefined {
  if (!/^\d+$/.test(value)) return `${label} needs digits only.`;
  if (value.length === baseLength) return undefined;
  if (value.length !== baseLength + 1) {
    return `${label} needs ${baseLength} or ${baseLength + 1} digits, but the code has ${value.length}.`;
  }
  return isValidGtin(value) ? undefined : `${label} check digit is invalid.`;
}

/** Returns a user-facing error message, or undefined when the value can be encoded. */
export function validateBarcodeValue(format: BarcodeFormat, value: string): string | undefined {
  if (!value) return 'The code is empty.';

  switch (format) {
    case 'EAN13':
      return validateGtin(value, 12, 'EAN-13');
    case 'EAN8':
      return validateGtin(value, 7, 'EAN-8');
    case 'UPC':
      return validateGtin(value, 11, 'UPC-A');
    case 'ITF14':
      if (!/^\d+$/.test(value)) return 'ITF-14 needs digits only.';
      if (value.length === 13) return undefined;
      if (value.length !== 14) return 'ITF-14 needs 13 or 14 digits.';
      return isValidGtin(value) ? undefined : 'ITF-14 check digit is invalid.';
    case 'MSI':
      return /^\d+$/.test(value) ? undefined : 'MSI needs digits only.';
    case 'CODE39':
      return /^[0-9A-Z\-. $/+%]+$/i.test(value)
        ? undefined
        : 'Code 39 supports digits, letters and - . space $ / + %.';
    case 'CODE128':
      return /^[\x20-\x7e]+$/.test(value)
        ? undefined
        : 'Code 128 supports printable ASCII characters only.';
    case 'CODABAR':
      return /^[A-D]?[0-9\-.$:/+]+[A-D]?$/i.test(value)
        ? undefined
        : 'Codabar supports digits and - . $ : / + (optionally wrapped in A-D).';
    default:
      return 'Unsupported barcode format.';
  }
}

export async function renderQrSvg(value: string): Promise<string> {
  return QRCode.toString(value, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  });
}

export interface BarcodeRenderOptions {
  height: number;
  width: number;
}

/** Draws a barcode into a live SVG element. Throws when the value is invalid. */
export function renderBarcodeSvg(
  element: SVGSVGElement,
  value: string,
  format: BarcodeFormat,
  options: BarcodeRenderOptions,
): void {
  JsBarcode(element, value, {
    format,
    width: options.width,
    height: options.height,
    margin: 8,
    background: '#ffffff',
    lineColor: '#000000',
    displayValue: false,
  });

  // JsBarcode sets fixed pixel dimensions; strip them so CSS can scale the
  // symbol down to the popup width without blurring. Keep the natural width as
  // a preferred size so compact symbols are not stretched to full width.
  const naturalWidth = Number.parseFloat(element.getAttribute('width') ?? '');
  element.removeAttribute('width');
  element.removeAttribute('height');
  if (Number.isFinite(naturalWidth) && naturalWidth > 0) {
    element.style.width = `${naturalWidth}px`;
  }
  element.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  element.setAttribute('role', 'img');
}
