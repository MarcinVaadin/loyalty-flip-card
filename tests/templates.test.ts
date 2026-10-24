import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { normalizeConfig } from '../src/config';
import {
  applyTemplate,
  matchTemplate,
  TEMPLATE_KEYS,
  TEMPLATES,
  type ShopTemplate,
} from '../src/templates';

// Validates templates.json. Contributors: see CONTRIBUTING.md.
const LOGO_PREFIX = 'https://github.com/MarcinVaadin/loyalty-flip-card/blob/main/logo/';
const LOGO_MAX_BYTES = 50 * 1024;
const ALLOWED_KEYS = new Set<string>(['id', 'country', ...TEMPLATE_KEYS]);

describe('templates.json', () => {
  it('has unique ids sorted alphabetically', () => {
    const ids = TEMPLATES.map((template) => template.id);
    expect(new Set(ids).size, 'ids must be unique').toBe(ids.length);
    expect(ids, 'templates must be sorted by id').toEqual([...ids].sort());
  });

  describe.each(TEMPLATES.map((template) => [template.id, template] as const))(
    '%s',
    (_id, template: ShopTemplate) => {
      it('uses a lowercase slug id', () => {
        expect(template.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      });

      it('only sets allowed keys', () => {
        const unknown = Object.keys(template).filter((key) => !ALLOWED_KEYS.has(key));
        expect(unknown, `unknown keys (allowed: ${[...ALLOWED_KEYS].join(', ')})`).toEqual([]);
      });

      it('has a title and an optional ISO country code', () => {
        expect(typeof template.title === 'string' && template.title.trim()).toBeTruthy();
        if (template.country !== undefined) expect(template.country).toMatch(/^[A-Z]{2}$/);
      });

      it('only contains values the card accepts unchanged', () => {
        const config = normalizeConfig({ type: 'custom:loyalty-flip-card', ...template });
        for (const key of TEMPLATE_KEYS) {
          if (template[key] === undefined) continue;
          expect(config[key], `"${key}" is invalid`).toEqual(template[key]);
        }
      });

      it('references a logo stored in this repository', () => {
        if (template.logo === undefined) return;
        expect(template.logo).toMatch(
          new RegExp(
            `^${LOGO_PREFIX.replace(/[.]/g, '\\.')}${template.id}\\.(png|svg)\\?raw=true$`,
          ),
        );

        // Vitest runs from the repository root.
        const name = template.logo.slice(LOGO_PREFIX.length).replace('?raw=true', '');
        const file = join(process.cwd(), 'logo', name);
        expect(existsSync(file), `missing logo file logo/${name}`).toBe(true);
        expect(statSync(file).size, 'logo must be 50 KB or smaller').toBeLessThanOrEqual(
          LOGO_MAX_BYTES,
        );
      });
    },
  );
});

describe('applyTemplate', () => {
  const template: ShopTemplate = {
    id: 'shop',
    title: 'Shop',
    color: '#ff0000',
    format: 'barcode',
    barcode_format: 'PDF417',
    code_pattern: '1,<CODE>,',
  };

  it('copies template values and keeps the code and unrelated options', () => {
    const config = applyTemplate(
      { type: 'custom:loyalty-flip-card', code: '42', title: 'Old', show_code_text: false },
      template,
    );
    expect(config).toEqual({
      type: 'custom:loyalty-flip-card',
      code: '42',
      show_code_text: false,
      title: 'Shop',
      color: '#ff0000',
      format: 'barcode',
      barcode_format: 'PDF417',
      code_pattern: '1,<CODE>,',
    });
  });

  it("clears the previous shop's logo and encoding", () => {
    const config = applyTemplate(
      {
        type: 'custom:loyalty-flip-card',
        code: '42',
        logo: '/local/other.png',
        code_pattern: 'X<CODE>',
      },
      { id: 'plain', title: 'Plain' },
    );
    expect(config.logo).toBeUndefined();
    expect(config.code_pattern).toBeUndefined();
    expect(config.title).toBe('Plain');
  });
});

describe('matchTemplate', () => {
  it('recognizes a config created from a template', () => {
    const [first] = TEMPLATES;
    const config = applyTemplate({ type: 'custom:loyalty-flip-card', code: '1' }, first);
    expect(matchTemplate(config)).toBe(first.id);
    expect(matchTemplate({ ...config, color: '#000000' })).toBe(first.id);
    expect(matchTemplate({ ...config, title: 'Renamed' })).toBeUndefined();
  });
});
