/**
 * This script will generate files in the `outDirName` directory.
 */

import { write } from 'bun';
import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

import globalColors from '../src/colors/global';
import namedColors from '../src/colors/named';
import specialColors from '../src/colors/special';
import systemColors from '../src/colors/system';
// @ts-ignore
import typesFileText from '../src/types/index.ts' with { type: 'text' };
import { pascalCase, rgbOrNull, rgbaOrNull } from '../src/utils/config';
import { outDir } from './common';

const globalDir = join(outDir, 'global');
const namedDir = join(outDir, 'named');
const specialDir = join(outDir, 'special');
const systemDir = join(outDir, 'system');

// Create the `outDirName` directory if it doesn't exist.
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

// Remove everything in the `outDirName` directory for clean slate.
const files = readdirSync(outDir);
for (let i = 0; i < files.length; i++) {
  const filePath = join(outDir, files[i]);
  rmSync(filePath, { recursive: true });
}

const namedColor = {};
const namedColorToHexMap = {};
const namedColorToRgbMap = {};
const namedColorToHexaMap = {};
const namedColorToRgbaMap = {};
const namedColorToTitleMap = {};
let namedFile = '';
let namedHexFile = '';
let namedRgbFile = '';
let namedHexaFile = '';
let namedRgbaFile = '';

const specialColor = {};
const specialColorToHexaMap = {};
const specialColorToRgbaMap = {};
const specialColorToTitleMap = {};
let specialFile = '';
let specialHexaFile = '';
let specialRgbaFile = '';

const globalValue = {};
const globalValueToTitleMap = {};
let globalFile = '';

const systemColor = {};
const systemColorToTitleMap = {};
let systemFile = '';

const addConstant = (name: string, value: string) => {
  const variableName = name.replace(/[^\w]([\w])/g, '$1');
  return `export const ${variableName} = '${value}';\n`;
};

for (let i = 0; i < namedColors.length; i++) {
  const { hex, hexa, title, rgb: _rgb, rgba: _rgba, value } = namedColors[i];
  const pascalCaseName = pascalCase(title);
  const rgb = rgbOrNull(_rgb);
  const rgba = rgbaOrNull(_rgba);

  if (rgb === null || rgba === null) {
    throw new Error(`${value} has no rgb or rgba value.`);
  }

  namedFile += addConstant(value, value);
  namedHexFile += addConstant(value, hex);
  namedHexaFile += addConstant(value, hexa);
  namedRgbFile += addConstant(value, rgb);
  namedRgbaFile += addConstant(value, rgba);

  namedColor[pascalCaseName] = value;
  namedColorToHexMap[value] = hex;
  namedColorToRgbMap[value] = rgb;
  namedColorToHexaMap[value] = hexa;
  namedColorToRgbaMap[value] = rgba;
  namedColorToTitleMap[value] = title;
}

write(join(namedDir, 'index.ts'), namedFile).catch(console.error);
write(join(namedDir, 'hex.ts'), namedHexFile).catch(console.error);
write(join(namedDir, 'hexa.ts'), namedHexaFile).catch(console.error);
write(join(namedDir, 'rgb.ts'), namedRgbFile).catch(console.error);
write(join(namedDir, 'rgba.ts'), namedRgbaFile).catch(console.error);

for (let i = 0; i < specialColors.length; i++) {
  const { hexa, title, rgba: _rgba, value } = specialColors[i];
  const pascalCaseName = pascalCase(title);
  const rgba = rgbaOrNull(_rgba);

  specialFile += addConstant(value, value);

  if (hexa !== null) {
    specialHexaFile += addConstant(value, hexa);
    specialColorToHexaMap[value] = hexa;
  }

  if (rgba !== null) {
    specialRgbaFile += addConstant(value, rgba);
    specialColorToRgbaMap[value] = rgba;
  }

  specialColor[pascalCaseName] = value;
  specialColorToTitleMap[value] = title;
}

write(join(specialDir, 'index.ts'), specialFile).catch(console.error);
write(join(specialDir, 'hexa.ts'), specialHexaFile).catch(console.error);
write(join(specialDir, 'rgba.ts'), specialRgbaFile).catch(console.error);

for (let i = 0; i < globalColors.length; i++) {
  const { title, value } = globalColors[i];
  const pascalCaseName = pascalCase(title);

  globalFile += addConstant(value, value);

  globalValue[pascalCaseName] = value;
  globalValueToTitleMap[value] = title;
}

write(join(globalDir, 'index.ts'), globalFile).catch(console.error);

for (let i = 0; i < systemColors.length; i++) {
  const { title, value } = systemColors[i];
  const pascalCaseName = pascalCase(title);

  systemFile += addConstant(value, value);

  systemColor[pascalCaseName] = value;
  systemColorToTitleMap[value] = title;
}

write(join(systemDir, 'index.ts'), systemFile).catch(console.error);

/**
 * generate index.ts
 */

const indexFile = `
/** CSS named colors. */
export const CssNamedColor = ${JSON.stringify(namedColor)} as const;

/** CSS special colors. */
export const CssSpecialColor = ${JSON.stringify(specialColor)} as const;

/** CSS global values. Can be used on any property. */
export const CssGlobal = ${JSON.stringify(globalValue)} as const;

/** CSS system colors. *Not commonly used.* */
export const CssSystemColor = ${JSON.stringify(systemColor)} as const;

/**
 * CSS colors.
 * - Named colors.
 * - Special colors.
 * - Global values.
 */
export const CssColor = {
  ...CssNamedColor,
  ...CssSpecialColor,
  ...CssGlobal,
} as const;

/**
 * CSS colors.
 * - Named colors.
 * - Special colors.
 * - Global values.
 * - System colors.
 */
export const CssColorWithSystem = {
  ...CssNamedColor,
  ...CssSpecialColor,
  ...CssGlobal,
  ...CssSystemColor,
} as const;

/** Named color to 6-digit hex map. @example export { blanchedalmond: '#ffebcd' } */
export const namedColorToHexMap = ${JSON.stringify(namedColorToHexMap)} as const;
/** Named color to RGB map. @example export { blanchedalmond: 'rgb(255,235,205)' } */
export const namedColorToRgbMap = ${JSON.stringify(namedColorToRgbMap)} as const;
/** Named color to 8-digit hex (with alpha) map. @example export { blanchedalmond: '#ffebcdff' } */
export const namedColorToHexaMap = ${JSON.stringify(namedColorToHexaMap)} as const;
/** Named color to RGBA map. @example export { blanchedalmond: '#ffebcd' } */
export const namedColorToRgbaMap = ${JSON.stringify(namedColorToRgbaMap)} as const;
/** Named color to title map. @example export { blanchedalmond: 'Blanched Almond' } */
export const namedColorToTitleMap = ${JSON.stringify(namedColorToTitleMap)} as const;
/** Special color to title map. @example export { currentcolor: 'Current Color' } */
export const specialColorToTitleMap = ${JSON.stringify(specialColorToTitleMap)} as const;
/** Global value to title map. @example export { unset: 'Unset' } */
export const globalToTitleMap = ${JSON.stringify(globalValueToTitleMap)} as const;
/** System color to title map. @example export { blanchedalmond: 'Blanched Almond' } */
export const systemColorToTitleMap = ${JSON.stringify(systemColorToTitleMap)} as const;

${typesFileText}
`;

write(join(outDir, 'index.ts'), indexFile).catch(console.error);
