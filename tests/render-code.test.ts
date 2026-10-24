import { describe, expect, it } from 'vitest';
import { normalizeConfig } from '../src/config';
import {
  detectBarcodeFormat,
  isValidGtin,
  normalizeBarcodeValue,
  renderQrSvg,
  resolveCode,
  validateBarcodeValue,
} from '../src/render-code';

const EAN8 = '96385074';
const UPC = '036000291452';
const EAN13 = '5901234123457';
const ITF14 = '12345678901231';

function makeConfig(overrides: Record<string, unknown> = {}) {
  return normalizeConfig({ type: 'custom:loyalty-flip-card', code: 'X', ...overrides });
}

describe('isValidGtin', () => {
  it('accepts valid check digits', () => {
    expect(isValidGtin(EAN8)).toBe(true);
    expect(isValidGtin(UPC)).toBe(true);
    expect(isValidGtin(EAN13)).toBe(true);
    expect(isValidGtin(ITF14)).toBe(true);
  });

  it('rejects invalid check digits and lengths', () => {
    expect(isValidGtin('5901234123458')).toBe(false);
    expect(isValidGtin('1234567')).toBe(false);
    expect(isValidGtin('123456789012345')).toBe(false);
  });
});

describe('detectBarcodeFormat', () => {
  it('maps valid numeric codes to their symbology', () => {
    expect(detectBarcodeFormat(EAN8)).toBe('EAN8');
    expect(detectBarcodeFormat(UPC)).toBe('UPC');
    expect(detectBarcodeFormat(EAN13)).toBe('EAN13');
    expect(detectBarcodeFormat(ITF14)).toBe('ITF14');
  });

  it('tolerates separators used on printed cards', () => {
    expect(detectBarcodeFormat('590 1234 123457')).toBe('EAN13');
    expect(detectBarcodeFormat('590-1234-123457')).toBe('EAN13');
  });

  it('ignores values without a valid check digit or non-numeric codes', () => {
    expect(detectBarcodeFormat('5901234123458')).toBeUndefined();
    expect(detectBarcodeFormat('MEMBER-42')).toBeUndefined();
    expect(detectBarcodeFormat('12345')).toBeUndefined();
  });
});

describe('normalizeBarcodeValue', () => {
  it('strips separators only for numeric symbologies', () => {
    expect(normalizeBarcodeValue('EAN13', ' 590 1234 123457 ')).toBe('5901234123457');
    expect(normalizeBarcodeValue('CODE128', ' LOYALTY 8842 ')).toBe('LOYALTY 8842');
  });
});

describe('resolveCode', () => {
  it('returns an empty plan for a missing code', () => {
    expect(resolveCode(makeConfig({ code: '' }))).toEqual({ kind: 'empty', value: '' });
  });

  it('always uses QR when requested', () => {
    expect(resolveCode(makeConfig({ code: EAN13, format: 'qr' }))).toEqual({
      kind: 'qr',
      value: EAN13,
    });
  });

  it('normalizes separators for an explicit barcode format', () => {
    const resolved = resolveCode(
      makeConfig({ code: '590 1234 123457', format: 'barcode', barcode_format: 'EAN13' }),
    );
    expect(resolved).toMatchObject({ kind: 'barcode', value: EAN13, barcodeFormat: 'EAN13' });
  });

  it('detects barcodes in auto mode', () => {
    const resolved = resolveCode(makeConfig({ code: EAN13, format: 'auto' }));
    expect(resolved).toMatchObject({ kind: 'barcode', value: EAN13, barcodeFormat: 'EAN13' });
    expect(resolved.note).toContain('EAN13');
  });

  it('falls back to QR in auto mode for unsupported values', () => {
    const resolved = resolveCode(makeConfig({ code: 'MEMBER-42', format: 'auto' }));
    expect(resolved.kind).toBe('qr');
    expect(resolved.note).toContain('QR code');
  });
});

describe('validateBarcodeValue', () => {
  it('accepts GTIN values with and without the check digit', () => {
    expect(validateBarcodeValue('EAN13', '590123412345')).toBeUndefined();
    expect(validateBarcodeValue('EAN13', EAN13)).toBeUndefined();
    expect(validateBarcodeValue('EAN8', EAN8)).toBeUndefined();
    expect(validateBarcodeValue('UPC', UPC)).toBeUndefined();
    expect(validateBarcodeValue('ITF14', '1234567890123')).toBeUndefined();
    expect(validateBarcodeValue('ITF14', ITF14)).toBeUndefined();
  });

  it('explains invalid GTIN values', () => {
    expect(validateBarcodeValue('EAN13', 'ABC')).toContain('digits only');
    expect(validateBarcodeValue('EAN13', '123')).toContain('12 or 13 digits');
    expect(validateBarcodeValue('EAN13', '5901234123458')).toContain('check digit');
    expect(validateBarcodeValue('ITF14', '12345678901234')).toContain('check digit');
    expect(validateBarcodeValue('ITF14', '123456789012345')).toContain('13 or 14 digits');
  });

  it('validates character sets for the remaining symbologies', () => {
    expect(validateBarcodeValue('MSI', '123456')).toBeUndefined();
    expect(validateBarcodeValue('MSI', '12A')).toContain('digits only');

    expect(validateBarcodeValue('CODE39', 'abc-123 $/+%')).toBeUndefined();
    expect(validateBarcodeValue('CODE39', 'abc_123')).toContain('Code 39');

    expect(validateBarcodeValue('CODE128', 'LOYALTY 8842')).toBeUndefined();
    expect(validateBarcodeValue('CODE128', 'ŁÓDŹ')).toContain('printable ASCII');

    expect(validateBarcodeValue('CODABAR', '12345')).toBeUndefined();
    expect(validateBarcodeValue('CODABAR', 'A12345B')).toBeUndefined();
    expect(validateBarcodeValue('CODABAR', '12E45')).toContain('Codabar');
  });

  it('rejects empty values', () => {
    expect(validateBarcodeValue('CODE128', '')).toContain('empty');
  });
});

describe('renderQrSvg', () => {
  it('produces a white-backed SVG', async () => {
    const svg = await renderQrSvg('hello world');
    expect(svg).toContain('<svg');
    expect(svg).toContain('viewBox');
    expect(svg).toContain('#ffffff');
  });

  it('rejects values that are too long for a QR code', async () => {
    await expect(renderQrSvg('x'.repeat(5000))).rejects.toThrow();
  });
});
