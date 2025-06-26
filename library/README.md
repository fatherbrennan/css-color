# `css-color`

A TypeScript tree-shakable library for using CSS colors.

## Install

### NPM

```sh
npm install @fatherbrennan/css-color
```

**or**

### Bun

```sh
bun install @fatherbrennan/css-color
```

### Directory Structure

```sh
├── @fatherbrennan
│   └── css-color
│       ├── global
│       │   └── index # global CSS values.
│       ├── named
│       │   ├── hex   # 6-bit hex format (named CSS colors).
│       │   ├── hexa  # 8-bit hex format (named CSS colors).
│       │   ├── index # named CSS colors.
│       │   └── rgb   # RGB format (named CSS colors).
│       │   └── rgba  # RGBA format (named CSS colors).
│       ├── special
│       │   ├── hexa  # 8-bit hex format (special CSS colors).
│       │   ├── index # special CSS colors.
│       │   └── rgba  # RGBA format (special CSS colors).
│       │── system
│       │   └── index # system CSS colors.
│       └── index     # color objects, maps and types.
```

## Usage

### Color Objects

If you want all colors to be available, you should import objects.

```ts
import { CssColor } from '@fatherbrennan/css-color';

const theme = {
  buttonBackground: CssColor.Transparent,
  buttonBorder: CssColor.Grey,
  buttonText: CssColor.Grey,
  buttonHoverBackground: CssColor.Grey,
  buttonHoverBorder: CssColor.Transparent,
  buttonHoverText: CssColor.White,
  // ...
};
```

### Types

#### Color Objects

```ts
import type { CssColor } from '@fatherbrennan/css-color';

type CssColorValue = (typeof CssColor)[keyof typeof CssColor];

type Theme = {
  buttonBackground: CssColorValue;
  buttonBorder: CssColorValue;
  buttonText: CssColorValue;
  buttonHoverBackground: CssColorValue;
  buttonHoverBorder: CssColorValue;
  buttonHoverText: CssColorValue;
  // ...
};
```

#### Specific Colors

```ts
import type { Hex, Hexa, Rgb, Rgba, Var } from '@fatherbrennan/css-color';

type Theme = {
  buttonBackground: Hex;
  buttonBorder: Rgb;
  buttonText: Rgba;
  buttonHoverBackground: Hex;
  buttonHoverBorder: Hexa;
  buttonHoverText: Var;
  // ...
};
```

### Individual Colors

If you are only wanting to use a couple of colors, you should import them individually.

#### Text format

```ts
import { grey, white } from '@fatherbrennan/css-color/named';
import { transparent } from '@fatherbrennan/css-color/special';

const theme = {
  buttonBackground: transparent,
  buttonBorder: grey,
  buttonText: grey,
  buttonHoverBackground: grey,
  buttonHoverBorder: transparent,
  buttonHoverText: white,
  // ...
};
```

#### Hex format

> _Note: it is not possible for transparent to be represented in hex format since it requires an alpha value._

```ts
import { grey, white } from '@fatherbrennan/css-color/named/hex';
import { transparent } from '@fatherbrennan/css-color/special/hexa';

const theme = {
  buttonBackground: transparent,
  buttonBorder: grey,
  buttonText: grey,
  buttonHoverBackground: grey,
  buttonHoverBorder: transparent,
  buttonHoverText: white,
  // ...
};
```

#### Hex format

> _Note: it is not possible for transparent to be represented in RGB format since it requires an alpha value._

```ts
import { grey, white } from '@fatherbrennan/css-color/named/rgb';
import { transparent } from '@fatherbrennan/css-color/special/rgba';

const theme = {
  buttonBackground: transparent,
  buttonBorder: grey,
  buttonText: grey,
  buttonHoverBackground: grey,
  buttonHoverBorder: transparent,
  buttonHoverText: white,
  // ...
};
```

## API

```ts
import {
  CssColor,
  CssColorWithSystem,
  CssGlobal,
  CssNamedColor,
  CssSpecialColor,
  CssSystemColor,
  namedColorToHexMap,
  namedColorToHexaMap,
  namedColorToRgbMap,
  namedColorToRgbaMap,
  namedColorToTitleMap,
} from '@fatherbrennan/css-color';

CssColor.Transparent;                // 'transparent'
CssColorWithSystem.AccentColorText;  // 'accentcolortext'
CssGlobal.RevertLayer;               // 'revert-layer'
CssNamedColor.BlanchedAlmond;        // 'blanchedalmond'
CssSpecialColor.CurrentColor;        // 'currentcolor'
CssSystemColor.CanvasText;           // 'canvastext'
namedColorToHexMap.blanchedalmond;   // '#ffebcd'
namedColorToRgbMap.blanchedalmond;   // 'rgb(255,235,205)'
namedColorToHexaMap.blanchedalmond;  // '#ffebcdff'
namedColorToRgbaMap.blanchedalmond;  // 'rgba(255,235,205,1)'
namedColorToTitleMap.blanchedalmond; // 'Blanched Almond'
```

## Resources

- [MDN Named Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)
- [MDN System Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color)
- [W3C Color Keywords](https://www.w3.org/wiki/CSS/Properties/color/keywords)
- [W3C Color Names](https://www.w3.org/TR/css-color-4/#named-colors)
- [W3C CSS Custom Properties](https://www.w3.org/TR/css-variables-1/)
- [W3C CSS System Colors](https://drafts.csswg.org/css-color/#css-system-colors)
