import { afterEach, describe, expect, it } from 'vitest';
import '../src/loyalty-flip-card-editor';
import { TEMPLATES } from '../src/templates';
import type { LovelaceCardConfig } from '../src/types';

// ha-form is not available outside Home Assistant, so drive the editor by
// dispatching the events ha-form would emit.
async function createEditor(config: LovelaceCardConfig) {
  const editor = document.createElement('loyalty-flip-card-editor') as HTMLElement & {
    setConfig(config: LovelaceCardConfig): void;
    updateComplete: Promise<boolean>;
  };
  editor.setConfig(config);
  document.body.append(editor);
  await editor.updateComplete;

  const form = editor.shadowRoot?.querySelector('ha-form') as HTMLElement & {
    data: Record<string, unknown>;
  };
  const emitted: LovelaceCardConfig[] = [];
  editor.addEventListener('config-changed', (event) => {
    emitted.push((event as CustomEvent<{ config: LovelaceCardConfig }>).detail.config);
  });
  const change = async (value: Record<string, unknown>) => {
    form.dispatchEvent(new CustomEvent('value-changed', { detail: { value } }));
    await editor.updateComplete;
  };
  return { editor, form, emitted, change };
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('loyalty-flip-card-editor templates', () => {
  const base = { type: 'custom:loyalty-flip-card', code: '1234567890' };
  const [template] = TEMPLATES;

  it('shows "custom" when the config does not come from a template', async () => {
    const { form } = await createEditor(base);
    expect(form.data.template).toBe('custom');
  });

  it('copies the picked template into the config without saving the template key', async () => {
    const { form, emitted, change } = await createEditor(base);
    await change({ ...form.data, template: template.id });

    const config = emitted.at(-1);
    expect(config).not.toHaveProperty('template');
    expect(config).toMatchObject({
      code: '1234567890',
      title: template.title,
      code_pattern: template.code_pattern,
    });
    expect(form.data.template).toBe(template.id);
  });

  it('keeps later edits instead of re-applying the template', async () => {
    const { form, emitted, change } = await createEditor(base);
    await change({ ...form.data, template: template.id });
    await change({ ...form.data, title: 'My card' });

    expect(emitted.at(-1)?.title).toBe('My card');
    expect(form.data.template).toBe('custom');
  });
});
