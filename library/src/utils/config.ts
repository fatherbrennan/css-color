import type { ColorsConfigItem, Rgb, Rgba } from '../types';

/**
 * Transform text to  pascal case.
 * - We expect text to be in capitalization case.
 * - `'Over The Hedge'` becomes `'OverTheHedge'`.
 * @param s text to convert to pascal case.
 * @returns text in pascal case.
 */
export const pascalCase = (s: ColorsConfigItem['title']) =>
  s.replace(/\s/g, '');

/**
 * A CSS RGB value if any, or null.
 * @param rgbValue Config item's RGB value.
 * @returns CSS RGB value or null if `rgbValue` is null.
 */
export const rgbOrNull = (rgbValue: ColorsConfigItem['rgb']): Rgb | null =>
  rgbValue === null
    ? null
    : `rgb(${rgbValue[0]},${rgbValue[1]},${rgbValue[2]})`;

/**
 * A CSS RGBA value if any, or null.
 * @param rgbaValue Config item's RGBA value.
 * @returns CSS RGBA value or null if `rgbaValue` is null.
 */
export const rgbaOrNull = (rgbaValue: ColorsConfigItem['rgba']): Rgba | null =>
  rgbaValue === null
    ? null
    : `rgba(${rgbaValue[0]},${rgbaValue[1]},${rgbaValue[2]},${rgbaValue[3]})`;
