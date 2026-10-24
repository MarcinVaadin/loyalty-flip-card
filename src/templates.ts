import type { LoyaltyFlipCardConfig } from './config';
import type { LovelaceCardConfig } from './types';
import templates from '../templates.json';

/** Config keys a template may set. `code` is never part of a template. */
export const TEMPLATE_KEYS = [
  'title',
  'subtitle',
  'color',
  'icon',
  'logo',
  'format',
  'barcode_format',
  'code_pattern',
  'barcode_width',
  'barcode_height',
  'qr_size',
  'fallback_to_qr',
] as const;
export type TemplateKey = (typeof TEMPLATE_KEYS)[number];

// Shop-specific keys are cleared before applying a template so that switching
// shops never keeps the previous shop's logo or encoding.
const CLEARED_KEYS: readonly TemplateKey[] = [
  'title',
  'icon',
  'logo',
  'color',
  'format',
  'barcode_format',
  'code_pattern',
];

// Keys that identify which template a config was created from.
const MATCH_KEYS: readonly TemplateKey[] = ['title', 'format', 'barcode_format', 'code_pattern'];

export type ShopTemplate = {
  /** Stable slug; also the logo file name in `logo/`. */
  id: string;
  /** Shop name, shown in the picker and copied as the card title. */
  title: string;
  /** ISO 3166-1 alpha-2 country code. */
  country?: string;
} & Partial<Pick<LoyaltyFlipCardConfig, TemplateKey>>;

// Validated by tests/templates.test.ts.
export const TEMPLATES = templates as ShopTemplate[];

export function templateLabel(template: ShopTemplate): string {
  return template.country ? `${template.title} (${template.country})` : template.title;
}

export function findTemplate(id: string): ShopTemplate | undefined {
  return TEMPLATES.find((template) => template.id === id);
}

/** Returns the id of the template the config appears to be created from. */
export function matchTemplate(config: LovelaceCardConfig): string | undefined {
  return TEMPLATES.find((template) => MATCH_KEYS.every((key) => template[key] === config[key]))?.id;
}

/** Copies a template's values into a card config, keeping `code` and unrelated options. */
export function applyTemplate(
  config: LovelaceCardConfig,
  template: ShopTemplate,
): LovelaceCardConfig {
  const next: LovelaceCardConfig = { ...config };
  for (const key of CLEARED_KEYS) delete next[key];
  for (const key of TEMPLATE_KEYS) {
    if (template[key] !== undefined) next[key] = template[key];
  }
  return next;
}
