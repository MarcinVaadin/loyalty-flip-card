import { afterEach, describe, expect, it, vi } from 'vitest';
import { LoyaltyFlipCard } from '../src/loyalty-flip-card';

function createCard(config: Record<string, unknown>): LoyaltyFlipCard {
  const card = document.createElement('loyalty-flip-card') as LoyaltyFlipCard;
  card.setConfig({ type: 'custom:loyalty-flip-card', ...config });
  document.body.append(card);
  return card;
}

function shadow(card: LoyaltyFlipCard): ShadowRoot {
  return card.shadowRoot as ShadowRoot;
}

async function open(card: LoyaltyFlipCard): Promise<HTMLDialogElement> {
  await card.updateComplete;
  shadow(card).querySelector<HTMLButtonElement>('.face')?.click();
  await card.updateComplete;
  return shadow(card).querySelector('dialog') as HTMLDialogElement;
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('loyalty-flip-card', () => {
  it('renders the configured title and subtitle without hint text', async () => {
    const card = createCard({ code: 'ABC', title: 'Coffee Club', subtitle: 'Member 42' });
    await card.updateComplete;

    expect(shadow(card).querySelector('.face__title')?.textContent).toBe('Coffee Club');
    expect(shadow(card).querySelector('.face__subtitle')?.textContent).toBe('Member 42');
    expect(shadow(card).querySelector('.face__hint')?.textContent?.trim()).toBe('');
  });

  it('centers the icon and hides the title when no title is configured', async () => {
    const card = createCard({ code: 'ABC' });
    await card.updateComplete;

    const face = shadow(card).querySelector('.face');
    expect(face?.classList.contains('face--centered')).toBe(true);
    expect(face?.getAttribute('aria-label')).toBe('Show loyalty code');
    expect(shadow(card).querySelector('.face__copy')).toBeNull();
    expect(shadow(card).querySelector('.badge ha-icon')).not.toBeNull();
    expect(shadow(card).textContent).not.toContain('Loyalty Card');

    const dialog = await open(card);
    expect(dialog.querySelector('.panel__title')).toBeNull();
    expect(dialog.getAttribute('aria-label')).toBe('Loyalty code');
    expect(dialog.hasAttribute('aria-labelledby')).toBe(false);
  });

  it('hides the icon and logo when show_icon is false', async () => {
    const card = createCard({
      code: 'ABC',
      title: 'Coffee Club',
      logo: '/local/logo.png',
      show_icon: false,
    });
    await card.updateComplete;

    expect(shadow(card).querySelector('.badge')).toBeNull();
    expect(shadow(card).querySelector('.face__title')?.textContent).toBe('Coffee Club');
  });

  it('keeps the standard layout when a title is configured', async () => {
    const card = createCard({ code: 'ABC', title: 'Coffee Club' });
    const dialog = await open(card);

    expect(shadow(card).querySelector('.face--centered')).toBeNull();
    expect(dialog.querySelector('.panel__title')?.textContent).toBe('Coffee Club');
    expect(dialog.getAttribute('aria-labelledby')).toBe('loyalty-code-title');
  });

  it('opens the popup and draws a QR code', async () => {
    const card = createCard({ code: 'hello world', format: 'qr' });
    const dialog = await open(card);

    expect(dialog.open).toBe(true);
    await vi.waitFor(() => {
      expect(shadow(card).querySelector('.qr svg')).not.toBeNull();
    });
    expect(shadow(card).querySelector('.value')?.textContent).toBe('hello world');
  });

  it('falls back to a QR code when a barcode cannot be encoded', async () => {
    const card = createCard({
      code: 'MEMBER-42',
      format: 'barcode',
      barcode_format: 'EAN13',
    });
    await open(card);

    await vi.waitFor(() => {
      expect(shadow(card).querySelector('.qr svg')).not.toBeNull();
    });
    expect(shadow(card).querySelector('.note')?.textContent).toContain('Showing a QR code instead');
  });

  it('shows an error when fallback is disabled', async () => {
    const card = createCard({
      code: 'MEMBER-42',
      format: 'barcode',
      barcode_format: 'EAN13',
      fallback_to_qr: false,
    });
    await open(card);

    await vi.waitFor(() => {
      expect(shadow(card).querySelector('.message')?.textContent).toContain(
        'EAN-13 needs digits only',
      );
    });
  });

  it('explains when no code is configured', async () => {
    const card = createCard({});
    await open(card);

    await vi.waitFor(() => {
      expect(shadow(card).querySelector('.message')?.textContent).toContain('No code configured');
    });
  });

  it('draws a scalable SVG barcode', async () => {
    const card = createCard({
      code: 'LOYALTY-8842',
      format: 'barcode',
      barcode_format: 'CODE128',
    });
    await open(card);

    await vi.waitFor(() => {
      const svg = shadow(card).querySelector('svg.barcode');
      expect(svg?.getAttribute('viewBox')).toBeTruthy();
    });

    const svg = shadow(card).querySelector<SVGSVGElement>('svg.barcode');
    expect(svg?.getAttribute('width')).toBeNull();
    expect(svg?.style.width).toMatch(/px$/);
    expect(svg?.getAttribute('preserveAspectRatio')).toBe('xMidYMid meet');
  });

  it('draws a PDF417 barcode', async () => {
    const card = createCard({ code: 'LOYALTY-8842', format: 'barcode', barcode_format: 'PDF417' });
    await open(card);

    await vi.waitFor(() => {
      expect(shadow(card).querySelector('svg.barcode[aria-label="PDF417 barcode"]')).not.toBeNull();
    });
    expect(shadow(card).querySelector('.note')).toBeNull();
  });

  it('falls back to QR when a PDF417 value is too long', async () => {
    const card = createCard({
      code: 'aB3~'.repeat(275),
      format: 'barcode',
      barcode_format: 'PDF417',
    });
    await open(card);

    await vi.waitFor(() => {
      expect(shadow(card).querySelector('.qr svg')).not.toBeNull();
    });
    expect(shadow(card).querySelector('.note')?.textContent).toContain(
      'cannot be encoded as PDF417',
    );
  });

  it('closes via the backdrop and the close button', async () => {
    const card = createCard({ code: 'ABC' });

    let dialog = await open(card);
    dialog.dispatchEvent(new MouseEvent('click'));
    await card.updateComplete;
    expect(dialog.open).toBe(false);

    dialog = await open(card);
    shadow(card).querySelector<HTMLButtonElement>('.icon-btn')?.click();
    await card.updateComplete;
    expect(dialog.open).toBe(false);
  });

  it('copies the code to the clipboard', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    const card = createCard({ code: 'ABC-123' });
    await open(card);

    await vi.waitFor(() => {
      expect(shadow(card).querySelector('.qr svg')).not.toBeNull();
    });

    shadow(card).querySelector<HTMLButtonElement>('.copy')?.click();
    await vi.waitFor(() => {
      expect(writeText).toHaveBeenCalledWith('ABC-123');
    });
    await vi.waitFor(() => {
      expect(shadow(card).querySelector('.copy')?.textContent).toContain('Copied');
    });
  });

  it('reports the grid layout used by sections view', () => {
    const card = createCard({ code: 'ABC' });
    expect(card.getCardSize()).toBe(2);
    expect(card.getGridOptions()).toMatchObject({ columns: 6, min_columns: 3 });
  });
});
