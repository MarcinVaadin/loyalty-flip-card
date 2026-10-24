# Changelog

## 1.0.0

First public release of Loyalty Flip Card: a Home Assistant Lovelace card that keeps a loyalty QR
code or barcode out of sight until you tap it, then shows it in a large, high-contrast popup that is
easy to scan at the checkout.

### Highlights

- **QR codes and barcodes.** QR, PDF417, Code 128, EAN-13, EAN-8, UPC-A, Code 39, ITF-14, Codabar
  and MSI.
- **Auto-detection.** `format: auto` recognizes EAN-8, UPC-A, EAN-13 and ITF-14 from numeric loyalty
  numbers with a valid check digit, and shows a QR code otherwise. Spaces and hyphens in printed
  numbers are ignored for these formats.
- **Friendly validation.** Each symbology checks its value and explains what is wrong. Missing
  EAN/UPC/ITF check digits are calculated automatically. When a value cannot be encoded, the popup
  falls back to a QR code with a short note (`fallback_to_qr: false` shows the error instead).
- **Flexible card face.** Title, subtitle, icon or logo, and an accent color with automatically
  adjusted text color. Leave out `title` for a logo-only card with the logo or icon centered, or set
  `show_icon: false` to hide the icon or logo.
- **Popup built for scanning.** White background, adjustable QR size and barcode bar width/height,
  optional code text below the symbol, and tap-to-copy. Closes with the close button, a tap on the
  backdrop, or <kbd>Esc</kbd>.
- **Private by design.** Everything is rendered locally in the browser. The code is never sent
  anywhere and never logged.
- **Visual editor**, light and dark theme support, keyboard accessible, respects reduced motion,
  and works in the sections view grid.

### Installation

Install through HACS as a custom repository (category **Lovelace**), or copy
`loyalty-flip-card.js` from this release to `/config/www/` and add it as a **JavaScript module**
resource. See the [README](README.md) for step-by-step instructions and all options.

```yaml
type: custom:loyalty-flip-card
code: '5901234123457'
format: auto
title: Fresh Market
```

### Notes

- Quote your `code` in YAML (`code: '0123'`), otherwise leading zeros are lost.
- PDF417 accepts Latin-1 (ISO-8859-1) text. `barcode_height` does not apply to PDF417; its height
  follows the number of rows.
- The visual editor requires Home Assistant 2024.8 or newer.
- The card is a single ES module of about 366 kB (104 kB gzipped).
