export type HexDigit =
  | `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f';
/** Parameter separator. */
export type S = ',' | ' ';
/**
 * Hex RGB value.
 *
 * I would love to be able to use hex digits for all combinations,
 * but TypeScript cannot yet handle it.
 *
 * `string` type can be empty so we need (desiredLength + 1) instances
 * of string to enforce at least desiredLength characters.
 */
export type Hex =
  | `#${HexDigit}${HexDigit}${HexDigit}`
  | `#${string}${string}${string}${string}${string}${string}${string}`;
/**
 * Hex RGBA value.
 *
 * I would love to be able to use hex digits for all combinations,
 * but TypeScript cannot yet handle it.
 *
 * `string` type can be empty so we need (desiredLength + 1) instances
 * of string to enforce at least desiredLength characters.
 */
export type Hexa =
  | `#${string}${string}${string}${string}${string}`
  | `#${string}${string}${string}${string}${string}${string}${string}${string}${string}`;
export type Hsl = `hsl(${string}${S}${string}${S}${string})`;
export type Hsla = `hsla(${string}${S}${string}${S}${string}${S}${string})`;
export type HslaDestructured = [number, number, number, number];
export type HslDestructured = [number, number, number];
export type Hwb =
  | `hwb(${string}${S}${string}${S}${string})`
  | `hwb(${string}${S}${string}${S}${string}${S}${string})`;
export type HwbDestructured = [number, number, number];
export type Ictcp = `ictcp(${string}${S}${string}${S}${string}${S}${string})`;
export type Jzazbz = `jzazbz(${string}${S}${string}${S}${string}${S}${string})`;
export type Jzczhz = `jzczhz(${string}${S}${string}${S}${string}${S}${string})`;
export type Lab = `lab(${string}${S}${string}${S}${string})`;
export type Lch = `lch(${string}${S}${string}${S}${string})`;
export type Oklab = `oklab(${string}${S}${string}${S}${string})`;
export type Oklch = `oklch(${string}${S}${string}${S}${string})`;
export type Rgb = `rgb(${string}${S}${string}${S}${string})`;
export type Rgba = `rgba(${string}${S}${string}${S}${string}${S}${string})`;
export type RgbaDestructured = [number, number, number, number];
export type RgbDestructured = [number, number, number];
export type Var = `var(--${string}${string})`;

export type ColorsConfigItem = {
  /** Name of the color in capitalization case. E.g. `Over The Hedge`. */
  name: string;
  /** CSS valid property value. */
  value: string;
  /** CSS valid 3 or 6-digit hex value. */
  hex: Hex | null;
  /** CSS valid RGB value. */
  rgb: RgbDestructured | null;
  /** CSS valid 4 or 8-digit hex value. */
  hexAlpha: Hexa | null;
  /** CSS valid RGBA value. */
  rgbAlpha: RgbaDestructured | null;
};

export type ColorsConfig = ColorsConfigItem[];
