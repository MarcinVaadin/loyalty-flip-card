# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Home Assistant Lovelace custom card (`custom:loyalty-flip-card`) built with Lit + TypeScript. It
shows a card face; tapping opens a modal `<dialog>` that renders a QR code (`qrcode`), 1D barcode
(`JsBarcode`) or PDF417 (`@bwip-js/browser`) entirely client-side. Vite bundles everything into a
single ES module at `dist/loyalty-flip-card.js`, which is **committed** (it's the HACS / manual
install artifact).

## Commands

```bash
npm run dev          # Vite demo harness (root is dev/), http://localhost:5173
npm test             # vitest run (jsdom)
npx vitest run tests/config.test.ts        # single file
npx vitest run -t "opens the popup"        # single test by name
npm run typecheck    # tsc --noEmit
npm run build        # typecheck + bundle to dist/loyalty-flip-card.js
npm run format       # Prettier (single quotes, width 100, trailing commas)
```

After changing anything in `src/`, run `npm run build` so the committed `dist/` stays in sync.

## Architecture

- **Entry point** is `src/loyalty-flip-card.ts`: defines the element, registers it in
  `window.customCards`, imports the editor (so it's bundled in the same file), and logs the version.
  `__VERSION__` is injected from `package.json` via `define` in both `vite.config.ts` and
  `vitest.config.ts` (declared in `src/globals.d.ts`).
- **Config flow**: `setConfig()` → `normalizeConfig()` (`src/config.ts`) coerces/validates raw YAML
  into `LoyaltyFlipCardConfig` with defaults (`DEFAULT_CONFIG`). Invalid values fall back to
  defaults (numbers are clamped) rather than throwing; a missing `code` is allowed so the editor can
  render a placeholder. `readableInk()` picks text color for the accent `color`.
- **Rendering pipeline** (`src/render-code.ts`): `resolveCode(config)` decides `empty | qr | barcode`
  (incl. `auto` detection of EAN/UPC/ITF via GTIN check digit), `validateBarcodeValue()` returns a
  user-facing error string, then `renderQrSvg()` (returns an SVG string, inserted via `unsafeSVG`)
  or `renderBarcodeSvg()` (draws into a live `<svg>` element, then strips fixed width/height so CSS
  can scale it). PDF417 is a `barcode_format` but JsBarcode can't draw it, so `renderPdf417Svg()`
  returns an SVG string (like QR) and the card shows it via the `pdf417` content state. bwip-js
  roughly triples the bundle size; import only named encoders from it, never the full package.
- **Card state machine** (`_prepareCode` in the card): code is only rendered when the popup opens.
  A `_renderKey` caches the last rendered inputs, and a monotonically increasing `_renderToken`
  guards async work — every `await` is followed by a token check so stale renders (config change,
  disconnect) are dropped. Barcode rendering must `await this.updateComplete` so the `<svg>` ref
  exists. Invalid barcodes fall back to QR with an explanatory `_note` when `fallback_to_qr` is true.
- **Editor** (`src/loyalty-flip-card-editor.ts`) is a thin `ha-form` schema; fields are shown/hidden
  based on `format`. It only works inside Home Assistant (needs `ha-form`). When adding a config
  option, update `LoyaltyFlipCardConfig`/`DEFAULT_CONFIG`/`normalizeConfig`, the editor schema +
  `LABELS`/`HELPERS`, the `_renderKey` inputs if it affects rendering, and the README options table.
- **HA types** are minimal local stubs in `src/types.ts` (no HA frontend dependency).

## Testing / dev harness notes

- Tests use jsdom; `tests/setup.ts` shims `HTMLDialogElement.showModal/close`, which jsdom lacks.
- `dev/main.ts` stubs `ha-card` and `ha-icon` (with a small inline MDI path map — add paths there if
  the card starts using new icons) and offers config presets.

## Constraints

- No runtime network requests and never log the code value (privacy is a stated feature).
- The `code` is a static config string, not an entity; leading/trailing whitespace is trimmed.

## Release

Bump `version` in `package.json`, `npm test && npm run build`, commit `dist/loyalty-flip-card.js`,
then create a GitHub release tagged with the version and attach the dist file (HACS uses the release
asset, see `hacs.json`).
