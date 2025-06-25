import type { Hex, Hexa, RgbDestructured, RgbaDestructured } from '.';

export type ColorsConfigItem = {
  /** Name of the color in capitalization case. E.g. `Over The Hedge`. */
  title: string;
  /** CSS valid property value. */
  value: string;
  /** CSS valid 3 or 6-digit hex value. */
  hex: Hex | null;
  /** CSS valid RGB value. */
  rgb: RgbDestructured | null;
  /** CSS valid 4 or 8-digit hex value. */
  hexa: Hexa | null;
  /** CSS valid RGBA value. */
  rgba: RgbaDestructured | null;
};

export type ColorsConfig = ColorsConfigItem[];
