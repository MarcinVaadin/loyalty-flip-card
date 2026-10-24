# Contributing

Thanks for helping! The easiest way to contribute is a **shop template**, so others can set up a
loyalty card by picking their shop and typing only their card number.

## Adding a shop template

Templates live in [`templates.json`](templates.json). A template is copied into the card
configuration when a user picks it in the visual editor, so every value must be a valid card option.

```json
{
  "id": "biedronka",
  "title": "Biedronka",
  "country": "PL",
  "color": "#FFED00",
  "format": "barcode",
  "barcode_format": "PDF417",
  "code_pattern": "1,<CODE>,",
  "logo": "https://github.com/MarcinVaadin/loyalty-flip-card/blob/main/logo/biedronka.png?raw=true"
}
```

### Fields

| Field                                                                              | Required | Rules                                                                                                                                 |
| ---------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                               | yes      | Lowercase slug (`a-z`, `0-9`, `-`). Use `<shop>`, or `<shop>-<country>` when the same name exists in several countries. Never change. |
| `title`                                                                            | yes      | Shop name as customers know it. Shown in the template picker and used as the card title.                                              |
| `country`                                                                          | no       | ISO 3166-1 alpha-2 code in uppercase, e.g. `PL`, `DE`. Shown next to the name in the picker.                                          |
| `color`                                                                            | no       | Brand color as hex, e.g. `#FFED00`.                                                                                                   |
| `format`, `barcode_format`                                                         | no       | Same values as the card options. See the [README](README.md#formats).                                                                 |
| `code_pattern`                                                                     | no       | Text encoded around the card number. Must contain `<CODE>`, which is replaced with the user's number.                                 |
| `logo`                                                                             | no       | `https://github.com/MarcinVaadin/loyalty-flip-card/blob/main/logo/<id>.png?raw=true` (or `.svg`). See logo rules below.               |
| `icon`, `subtitle`, `barcode_width`, `barcode_height`, `qr_size`, `fallback_to_qr` | no       | Same as the card options. Only set them if the shop's scanners need it.                                                               |

`code` is never part of a template.

### Rules

- **Scan it for real.** Only submit a template you have scanned successfully at the shop's till or
  self-checkout using this card. Say so in the pull request.
- **No real card numbers.** Do not put your card number, screenshots of it, or photos of your card in
  the pull request.
- **Keep `templates.json` sorted by `id`.** This keeps merge conflicts small.
- **Never rename or remove** an `id` or a logo file. Released versions of the card reference them.
  To fix a template, edit its values instead.
- One shop per pull request is preferred, but several are fine.

### Logo rules

- Save the logo as `logo/<id>.png` or `logo/<id>.svg`.
- Square or landscape, at most 512 px on the longest side, 50 KB or smaller.
- Use the shop's official logo, unmodified, on a transparent or brand-colored background.
- Optimize PNGs before submitting, for example with [Squoosh](https://squoosh.app) or `oxipng`.

### Checking your template

```bash
npm install
npm test        # validates templates.json and the logo files
npm run format  # formats templates.json
```

The same checks run automatically on every pull request. You can preview the card with
`npm run dev`: apply your template's values (plus a test `code`) in the demo page's configuration
box.

## Code changes

See the [Development](README.md#development) section of the README. Before opening a pull request,
run `npm run format && npm test && npm run build` and commit the updated
`dist/loyalty-flip-card.js`.
