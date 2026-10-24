# Loyalty Flip Card

A Home Assistant Lovelace card that keeps a loyalty QR code or barcode out of sight until you tap
it. Tapping the card opens a large, high-contrast popup that is easy to scan at the checkout and
closes with a tap on the backdrop, the close button, or <kbd>Esc</kbd>.

- QR codes, PDF417, and 1D barcodes: Code 128, EAN-13, EAN-8, UPC-A, Code 39, ITF-14, Codabar, MSI.
- Shop templates: pick your shop in the visual editor and type only your card number.
- Auto-detection of EAN/UPC barcodes from numeric loyalty numbers.
- Optional branding: title, subtitle, icon or logo, accent color.
- Optional fallback to a QR code when a barcode cannot encode the value.
- Tap-to-copy the raw code.
- Everything is rendered locally in the browser. The code is never sent anywhere and never logged.
  (Logos from shop templates are loaded from GitHub; the code is not part of that request.)
- Visual editor, light/dark theme support, keyboard accessible, respects reduced motion.

## Installation

### HACS (custom repository)

1. Open **HACS → Frontend**.
2. Open the menu (⋮) → **Custom repositories**.
3. Add this repository's URL with the category **Lovelace**.
4. Install **Loyalty Flip Card** and reload Home Assistant.

HACS installs the `loyalty-flip-card.js` asset attached to the latest GitHub release. If no release
is available yet, use the manual installation below.

### Manual

1. Copy [`dist/loyalty-flip-card.js`](dist/loyalty-flip-card.js) to `/config/www/`.
2. Go to **Settings → Dashboards → ⋮ → Resources → Add resource**.
3. Enter URL `/local/loyalty-flip-card.js?v=1`, type **JavaScript module**, and create it.
4. Reload the browser.

The `?v=1` query string is a cache buster. Increase it whenever you update the card.

## Usage

Add a card and give it the code you want to display:

```yaml
type: custom:loyalty-flip-card
code: '0123456789012'
```

> **Quote your code.** YAML treats unquoted numeric values as numbers, which drops leading zeros.
> Always wrap codes in quotes.

Leading and trailing whitespace is trimmed from `code`; inner spaces are preserved (relevant for
Code 128 and QR values).

The value is static by design: it is stored in the dashboard configuration, not read from an
entity. Use a dashboard-only card if you do not want the code in a shared dashboard.

## Shop templates

In the visual editor, pick your shop under **Shop template** and enter your card number. The
template fills in the title, color, logo and barcode settings, including any extra characters the
shop's scanners expect around the number (`code_pattern`). You can change any value afterwards;
the template is only a starting point and is not linked to the card.

Using YAML? Copy the values of your shop from [`templates.json`](templates.json) (everything except
`id` and `country`) and add your `code`:

```yaml
type: custom:loyalty-flip-card
code: '1234567890'
title: Biedronka
color: '#FFED00'
format: barcode
barcode_format: PDF417
code_pattern: '1,<CODE>,'
logo: https://github.com/MarcinVaadin/loyalty-flip-card/blob/main/logo/biedronka.png?raw=true
```

Your shop is missing? Templates are contributed by the community: see
[CONTRIBUTING.md](CONTRIBUTING.md#adding-a-shop-template).

## Options

| Option           | Type    | Default                    | Description                                                                                                                             |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `code`           | string  | **required**               | Value encoded in the QR code or barcode. Quote it in YAML.                                                                              |
| `format`         | string  | `qr`                       | `qr`, `barcode`, or `auto`.                                                                                                             |
| `barcode_format` | string  | `CODE128`                  | Symbology used when `format: barcode`.                                                                                                  |
| `code_pattern`   | string  | –                          | Text encoded around the code. `<CODE>` is replaced with `code`, e.g. `'1,<CODE>,'`. The popup still shows and copies the plain `code`.  |
| `title`          | string  | –                          | Card face title. Without it, only the logo or icon is shown, centered.                                                                  |
| `subtitle`       | string  | –                          | Optional card face subtitle.                                                                                                            |
| `show_icon`      | boolean | `true`                     | Show the icon or logo on the card face.                                                                                                 |
| `icon`           | string  | `mdi:card-account-details` | Icon shown on the card face when no logo is set.                                                                                        |
| `logo`           | string  | –                          | Image URL for the card face, for example `/local/my-logo.png`.                                                                          |
| `color`          | string  | HA theme                   | Accent color of the card face. Text color is adjusted automatically.                                                                    |
| `popup_title`    | string  | `title`                    | Heading shown above the code in the popup. Hidden when empty.                                                                           |
| `show_code_text` | boolean | `true`                     | Show the raw code below the symbol so it can be entered manually.                                                                       |
| `qr_size`        | number  | `320`                      | Maximum QR size in pixels (160–640). Never wider than the viewport.                                                                     |
| `barcode_height` | number  | `96`                       | Barcode bar height in pixels (48–240). Ignored for PDF417.                                                                              |
| `barcode_width`  | number  | `2`                        | Width of one barcode module in pixels (1–4). Larger values make compact barcodes wider; long barcodes are scaled down to fit the popup. |
| `fallback_to_qr` | boolean | `true`                     | Draw a QR code when the value cannot be encoded in the chosen barcode format.                                                           |

### Formats

`format: auto` uses an EAN/UPC symbology when the code is 8, 12, 13, or 14 digits **and** has a
valid check digit. Anything else becomes a QR code. The popup tells you which format was chosen.

When `format: barcode` is set explicitly, the value is validated against the chosen symbology:

| Symbology | Accepted values                                                            |
| --------- | -------------------------------------------------------------------------- |
| `CODE128` | Printable ASCII. Best general-purpose choice for alphanumeric codes.       |
| `EAN13`   | 12 or 13 digits. A missing check digit is calculated automatically.        |
| `EAN8`    | 7 or 8 digits. A missing check digit is calculated automatically.          |
| `UPC`     | 11 or 12 digits. A missing check digit is calculated automatically.        |
| `CODE39`  | Digits, letters, `- . space $ / + %`. Letters are encoded as uppercase.    |
| `ITF14`   | 13 or 14 digits. A missing check digit is calculated automatically.        |
| `CODABAR` | Digits and `- . $ : / +`, optionally wrapped in start/stop characters A–D. |
| `MSI`     | Digits only.                                                               |
| `PDF417`  | Latin-1 (ISO-8859-1) text, up to roughly 1,000 characters.                 |

If a value cannot be encoded and `fallback_to_qr` is enabled, the popup shows a QR code with a short
explanation. Set `fallback_to_qr: false` to show the validation error instead.

## Examples

### QR code with branding

```yaml
type: custom:loyalty-flip-card
code: 'https://example.com/members/4821-9930'
title: Corner Coffee Club
subtitle: Member 4821 9930
color: '#0b6e4f'
icon: mdi:coffee
```

### EAN-13 barcode, detected automatically

```yaml
type: custom:loyalty-flip-card
code: '5901234123457'
format: auto
title: Fresh Market
subtitle: Loyalty card
```

### Code 128 with a logo

```yaml
type: custom:loyalty-flip-card
code: 'LOYALTY-8842-9931'
format: barcode
barcode_format: CODE128
barcode_width: 2
barcode_height: 96
title: City Fitness
subtitle: Scan at the front desk
logo: /local/city-fitness.png
color: '#111827'
```

## Troubleshooting

**The store scanner cannot read the barcode.** 1D barcodes are harder to scan from a screen than
QR codes. Try `format: qr`, turn the screen brightness up, and increase `barcode_width` to `3` or
`4`. Make sure the symbology matches what the store accepts; many loyalty programs accept Code 128
but not EAN/UPC, or vice versa.

**My code lost its leading zeros.** YAML parsed the unquoted value as a number. Use `code: '0123'`.

**The popup shows a QR code instead of my barcode.** The value is not valid for the selected
symbology (for example letters with EAN-13). The note under the code explains why. Use `CODE128`
for alphanumeric values, or set `fallback_to_qr: false` to see the raw validation error.

**The card does not appear in the dashboard.** Check that the resource was added as a
**JavaScript module**, that the URL points at the uploaded file, and that the `?v=` cache buster was
increased. Look for errors in the browser console.

**The visual editor is missing.** Make sure the resource is loaded and Home Assistant is version
2024.8 or newer, then refresh the browser.

**My QR code is too large.** A QR code can hold about 1,200 bytes at the error-correction level used
by this card. Longer values show a friendly error instead of a broken image.

## How it works

| File                              | Purpose                                                    |
| --------------------------------- | ---------------------------------------------------------- |
| `src/loyalty-flip-card.ts`        | Card element, popup lifecycle, clipboard and fallbacks     |
| `src/loyalty-flip-card-editor.ts` | Visual editor built on `ha-form`                           |
| `src/config.ts`                   | Configuration normalization, defaults, contrast helper     |
| `src/render-code.ts`              | Format detection, validation, QR and barcode SVG rendering |
| `src/templates.ts`                | Shop templates from `templates.json` used by the editor    |
| `src/styles.ts`                   | Card, popup and dark-mode styling                          |
| `tests/`                          | Unit tests and DOM smoke tests (Vitest + jsdom)            |
| `dev/`                            | Standalone demo harness with mocked Home Assistant pieces  |

The card bundles Lit, [`qrcode`](https://github.com/soldair/node-qrcode),
[`JsBarcode`](https://github.com/lindell/JsBarcode) and
[`bwip-js`](https://github.com/metafloor/bwip-js) (PDF417 only) into a single ES module. There are
no runtime network requests other than loading the configured logo image.

## Development

```bash
npm install
npm run dev     # demo harness at http://localhost:5173
npm test        # unit and DOM tests
npm run build   # typecheck + bundle to dist/loyalty-flip-card.js
npm run format  # Prettier
```

The demo page stubs `ha-card` and `ha-icon` so the card can be developed without a Home Assistant
instance. The visual editor only runs inside Home Assistant because it depends on `ha-form`.

## Release checklist

1. Update the version in `package.json` (the version is shown in the browser console).
2. Run `npm test && npm run build`.
3. Commit the updated `dist/loyalty-flip-card.js`.
4. Create a GitHub release with the tag matching the version and attach
   `dist/loyalty-flip-card.js` as a release asset.
5. HACS picks up the release automatically.

## License

Apache-2.0. See [LICENSE](LICENSE).
