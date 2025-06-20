import type { ColorsConfigItem, Rgb, Rgba } from '../types';

/**
 * Transform text to  pascal case.
 * - We expect text to be in capitalization case.
 * - `'Over The Hedge'` becomes `'OverTheHedge'`.
 * @param s text to convert to pascal case.
 * @returns text in pascal case.
 */
export const pascalCase = (s: ColorsConfigItem['name']) => s.replace(/\s/g, '');

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
 * @param rgbAlphaValue Config item's RGBA value.
 * @returns CSS RGBA value or null if `rgbAlphaValue` is null.
 */
export const rgbAlphaOrNull = (
  rgbAlphaValue: ColorsConfigItem['rgbAlpha'],
): Rgba | null =>
  rgbAlphaValue === null
    ? null
    : `rgba(${rgbAlphaValue[0]},${rgbAlphaValue[1]},${rgbAlphaValue[2]},${rgbAlphaValue[3]})`;
