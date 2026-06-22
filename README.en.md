# @russian-flags/leningrad-oblast

[Русская версия](./README.md)

A native ESM collection of SVG flags for cities and settlements in Leningrad Oblast. The package can be used as an npm dependency in JavaScript/TypeScript projects or as a connectable set of ready-made SVG files and lazy loaders.

## Preview

| Settlement | Flag | slug |
| --- | --- | --- |
| Vyborg | <img src="./dist/flags/vyborg.svg" width="120" alt="Flag of Vyborg"> | `vyborg` |
| Gatchina | <img src="./dist/flags/gatchina.svg" width="120" alt="Flag of Gatchina"> | `gatchina` |
| Tikhvin | <img src="./dist/flags/tihvin.svg" width="120" alt="Flag of Tikhvin"> | `tihvin` |
| Priozersk | <img src="./dist/flags/priozersk.svg" width="120" alt="Flag of Priozersk"> | `priozersk` |
| Sosnovy Bor | <img src="./dist/flags/sosnovyy-bor.svg" width="120" alt="Flag of Sosnovy Bor"> | `sosnovyy-bor` |

## Features

- 72 local SVG flags bundled with the package.
- ESM build with TypeScript declarations.
- Per-flag lazy loaders.
- Lookup by slug, code, or Russian settlement name.
- Direct SVG imports via `flags/<slug>` or `svg/<slug>`.
- Works with plain JavaScript, TypeScript, and modern bundlers.

## Installation

```bash
npm install @russian-flags/leningrad-oblast
```

For local testing from this project directory:

```bash
npm install .
```

## Quick Start

```js
import { loadFlag, settlements } from "@russian-flags/leningrad-oblast";

console.log(settlements[0]);
// { slug: "boksitogorsk", code: "BOKSITOGORSK", name: "Бокситогорск" }

const image = await loadFlag("vyborg", {
  alt: "Flag of Vyborg",
  className: "flag",
});

document.body.append(image);
```

`loadFlag` is an alias for `loadFlagImage`. It lazily imports the required flag module, creates an `<img>`, and uses `loading="lazy"` plus `decoding="async"` by default.

## Direct SVG Usage

If you only need the flag file, import the SVG directly:

```js
import vyborgFlag from "@russian-flags/leningrad-oblast/flags/vyborg";
import vyborgSvg from "@russian-flags/leningrad-oblast/svg/vyborg";

console.log(vyborgFlag);
console.log(vyborgSvg);
```

Imports with the `.svg` extension are supported as well:

```js
import vyborgFlag from "@russian-flags/leningrad-oblast/flags/vyborg.svg";
import vyborgSvg from "@russian-flags/leningrad-oblast/svg/vyborg.svg";
```

`flags/<slug>` and `svg/<slug>` point to the same file inside the package:

```text
dist/flags/<slug>.svg
```

After publishing, the package can also be used as an SVG source through an npm CDN:

```html
<img
  src="https://unpkg.com/@russian-flags/leningrad-oblast/dist/flags/vyborg.svg"
  alt="Flag of Vyborg"
/>
```

## Settlement Lookup

Most functions accept:

- slug: `"vyborg"`;
- code: `"VYBORG"`;
- Russian name: `"Выборг"`.

```js
import {
  resolveSettlementSlug,
  settlementSlugs,
  settlements,
} from "@russian-flags/leningrad-oblast";

console.log(settlements.length); // 72
console.log(settlementSlugs.includes("vyborg")); // true

console.log(resolveSettlementSlug("VYBORG")); // "vyborg"
console.log(resolveSettlementSlug("Выборг")); // "vyborg"
console.log(resolveSettlementSlug("yanino_1")); // "yanino-1"
console.log(resolveSettlementSlug("unknown")); // undefined
```

Input is normalized before lookup: surrounding whitespace is trimmed, matching is case-insensitive, `ё` is treated as `е`, and spaces or `_` are converted to `-`.

## Lazy List Rendering

```js
import { loadFlag, settlements } from "@russian-flags/leningrad-oblast";

for (const settlement of settlements) {
  const row = document.createElement("tr");
  row.dataset.slug = settlement.slug;
  row.textContent = settlement.name;
  document.querySelector("tbody").append(row);
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;

    observer.unobserve(entry.target);

    loadFlag(entry.target.dataset.slug).then((image) => {
      entry.target.append(image);
    });
  }
});

document
  .querySelectorAll("tr[data-slug]")
  .forEach((row) => observer.observe(row));
```

## Preload

`preloadFlag` starts loading a flag module without waiting for the result. It is useful on `hover`, `focus`, or shortly before a row enters the viewport.

```js
import { preloadFlag } from "@russian-flags/leningrad-oblast";

button.addEventListener("pointerenter", () => {
  preloadFlag("vyborg");
});
```

Unknown values are ignored and do not throw.

## API

| Export | Description |
| --- | --- |
| `settlements` | Metadata array with `{ slug, code, name }`. |
| `settlementSlugs` | Array of all available slugs. |
| `normalizeSettlementInput(input)` | Normalizes user input before lookup. |
| `resolveSettlementSlug(input)` | Resolves a slug from a slug, code, or name. |
| `getFlagModuleLoader(input)` | Returns a lazy flag module loader or `undefined`. |
| `loadFlagModule(input)` | Lazily imports a flag module. Throws for unknown input. |
| `loadFlagImage(input, options)` | Loads a flag and returns an `HTMLImageElement`. |
| `loadFlag(input, options)` | Alias for `loadFlagImage`. |
| `preloadFlag(input)` | Starts loading a module without waiting for the result. |
| `createFlagImage(src, defaultAlt, options)` | Creates and configures an `<img>` for an SVG flag. |

## Types

The package ships `.d.ts` files and exports the main types:

```ts
import type {
  FlagImageOptions,
  FlagModule,
  SettlementInput,
  SettlementMeta,
  SettlementSlug,
} from "@russian-flags/leningrad-oblast";
```

`FlagImageOptions` supports:

| Field | Purpose |
| --- | --- |
| `alt` | Image alternative text. |
| `decoding` | Value for `HTMLImageElement.decoding`. |
| `loading` | Value for `HTMLImageElement.loading`. |
| `className` | Image CSS class. |
| `title` | `title` attribute. |
| `id` | `id` attribute. |
| `width`, `height` | Image dimensions. |
| `style` | Inline styles. |
| `dataset` | Values for `data-*`. |
| `attributes` | Custom HTML attributes. |

## Compatibility

The package targets modern ESM projects and browser environments. `loadFlag`, `loadFlagImage`, and `createFlagImage` create an `HTMLImageElement`, so they require the DOM.

Metadata exports (`settlements`, `settlementSlugs`, `resolveSettlementSlug`) can be used separately, for example for search, autocomplete, or generating a list of available flags.

## Demo

```bash
npm run serve:demo
```

Open:

```text
http://127.0.0.1:5173/examples/
```

## Development

```bash
npm install
npm run build
npm test
npm run typecheck
npm run pack:dry
```

Build flow:

1. `scripts/build-source.js` reads `src/settlements.ts`, checks `assets/<slug>/index.svg`, and generates TypeScript sources.
2. `scripts/build.js` bundles JavaScript with `esbuild` and copies SVG files to `dist/flags/<slug>.svg`.
3. `tsc -p tsconfig.build.json` emits `.d.ts` files into `dist`.

To add a new settlement, add an entry to `src/settlements.ts`, put the SVG into `assets/<slug>/index.svg`, and run the build.

## Repository

- GitHub: <https://github.com/lKolabrodl/leningrad-oblast-flags>
- Issues: <https://github.com/lKolabrodl/leningrad-oblast-flags/issues>

## License

Package code is licensed under MIT. Bundled SVG flags are not covered by the MIT code license and keep their original licenses.
