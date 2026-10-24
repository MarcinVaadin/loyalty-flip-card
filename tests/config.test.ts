import { describe, expect, it } from 'vitest';
import { normalizeConfig, readableInk } from '../src/config';

const base = { type: 'custom:loyalty-flip-card' };

describe('normalizeConfig', () => {
  it('applies defaults', () => {
    const config = normalizeConfig({ ...base, code: '123' });

    expect(config).toMatchObject({
      code: '123',
      format: 'qr',
      barcode_format: 'CODE128',
      title: 'Loyalty Card',
      show_code_text: true,
      popup_title: 'Loyalty Card',
      qr_size: 320,
      barcode_height: 96,
      barcode_width: 2,
      fallback_to_qr: true,
      icon: 'mdi:card-account-details',
    });
  });

  it('trims the code and converts finite numbers to strings', () => {
    expect(normalizeConfig({ ...base, code: '  ABC  ' }).code).toBe('ABC');
    expect(normalizeConfig({ ...base, code: 5901234123457 }).code).toBe('5901234123457');
  });

  it('keeps an empty code so the editor can show a placeholder', () => {
    expect(normalizeConfig(base).code).toBe('');
    expect(normalizeConfig({ ...base, code: null }).code).toBe('');
  });

  it('falls back for unknown formats and clamps numbers', () => {
    expect(normalizeConfig({ ...base, format: 'pdf417' }).format).toBe('qr');
    expect(normalizeConfig({ ...base, barcode_format: 'nope' }).barcode_format).toBe('CODE128');
    expect(normalizeConfig({ ...base, qr_size: 5 }).qr_size).toBe(160);
    expect(normalizeConfig({ ...base, qr_size: 5000 }).qr_size).toBe(640);
    expect(normalizeConfig({ ...base, barcode_width: 0 }).barcode_width).toBe(1);
    expect(normalizeConfig({ ...base, barcode_height: '120' }).barcode_height).toBe(120);
  });

  it('accepts safe colors and ignores unsafe ones', () => {
    expect(normalizeConfig({ ...base, color: 'red' }).color).toBe('red');
    expect(normalizeConfig({ ...base, color: '#0b6e4f' }).color).toBe('#0b6e4f');
    expect(normalizeConfig({ ...base, color: 'var(--brand-color)' }).color).toBe(
      'var(--brand-color)',
    );
    expect(normalizeConfig({ ...base, color: 'url(javascript:alert(1))' }).color).toBeUndefined();
  });

  it('uses the title as popup title and keeps explicit popup titles', () => {
    expect(normalizeConfig({ ...base, title: 'Club' }).popup_title).toBe('Club');
    expect(normalizeConfig({ ...base, title: 'Club', popup_title: 'Scan me' }).popup_title).toBe(
      'Scan me',
    );
  });

  it('honors explicit false booleans', () => {
    const config = normalizeConfig({
      ...base,
      show_code_text: false,
      fallback_to_qr: false,
    });
    expect(config.show_code_text).toBe(false);
    expect(config.fallback_to_qr).toBe(false);
  });

  it('throws for invalid configuration objects', () => {
    expect(() => normalizeConfig(null as never)).toThrow();
    expect(() => normalizeConfig([] as never)).toThrow();
  });
});

describe('readableInk', () => {
  it('picks dark ink for light accents and light ink for dark accents', () => {
    expect(readableInk('#ffffff')).toBe('#111111');
    expect(readableInk('#000000')).toBe('#ffffff');
    expect(readableInk('#ffd400')).toBe('#111111');
    expect(readableInk('#0b6e4f')).toBe('#ffffff');
  });

  it('defaults to white for named or unparsable colors', () => {
    expect(readableInk('rebeccapurple')).toBe('#ffffff');
  });
});
