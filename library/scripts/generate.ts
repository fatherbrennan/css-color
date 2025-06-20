import { write } from 'bun';
import { resolve } from 'node:path';

import globals from '../src/globals';
import namedColors from '../src/named-colors';
import specialNamedColors from '../src/special-named-colors';
import { pascalCase, rgbAlphaOrNull, rgbOrNull } from '../src/utils/config';

const globalMap = {};
const globalToHexMap = {};
const globalToRgbMap = {};
const globalToHexAlphaMap = {};
const globalToRgbAlphaMap = {};
const globalToNameMap = {};

const namedColorMap = {};
const namedColorToHexMap = {};
const namedColorToRgbMap = {};
const namedColorToHexAlphaMap = {};
const namedColorToRgbAlphaMap = {};
const namedColorToNameMap = {};

const specialNamedColorMap = {};
const specialNamedColorToHexMap = {};
const specialNamedColorToRgbMap = {};
const specialNamedColorToHexAlphaMap = {};
const specialNamedColorToRgbAlphaMap = {};
const specialNamedColorToNameMap = {};

for (let i = 0; i < globals.length; i++) {
  const { hex, hexAlpha, name, rgb, rgbAlpha, value } = globals[i];
  const pascalCaseName = pascalCase(name);

  globalMap[pascalCaseName] = value;
  globalToHexMap[value] = hex;
  globalToRgbMap[value] = rgbOrNull(rgb);
  globalToHexAlphaMap[value] = hexAlpha;
  globalToRgbAlphaMap[value] = rgbAlphaOrNull(rgbAlpha);
  globalToNameMap[value] = name;
}

for (let i = 0; i < namedColors.length; i++) {
  const { hex, hexAlpha, name, rgb, rgbAlpha, value } = namedColors[i];
  const pascalCaseName = pascalCase(name);

  namedColorMap[pascalCaseName] = value;
  namedColorToHexMap[value] = hex;
  namedColorToRgbMap[value] = rgbOrNull(rgb);
  namedColorToHexAlphaMap[value] = hexAlpha;
  namedColorToRgbAlphaMap[value] = rgbAlphaOrNull(rgbAlpha);
  namedColorToNameMap[value] = name;
}

for (let i = 0; i < specialNamedColors.length; i++) {
  const { hex, hexAlpha, name, rgb, rgbAlpha, value } = specialNamedColors[i];
  const pascalCaseName = pascalCase(name);

  specialNamedColorMap[pascalCaseName] = value;
  specialNamedColorToHexMap[value] = hex;
  specialNamedColorToRgbMap[value] = rgbOrNull(rgb);
  specialNamedColorToHexAlphaMap[value] = hexAlpha;
  specialNamedColorToRgbAlphaMap[value] = rgbAlphaOrNull(rgbAlpha);
  specialNamedColorToNameMap[value] = name;
}

const CssColorMap = {
  ...namedColorMap,
  ...specialNamedColorMap,
  ...globalMap,
};

const CssColorToNameMap = {
  ...namedColorToNameMap,
  ...specialNamedColorToNameMap,
  ...globalToNameMap,
};

const fileContent = `
export const CssColorMap = ${JSON.stringify(CssColorMap)} as const;
export const CssColorToNameMap = ${JSON.stringify(CssColorToNameMap)} as const;
export const globalMap = ${JSON.stringify(globalMap)} as const;
export const globalToHexMap = ${JSON.stringify(globalToHexMap)} as const;
export const globalToRgbMap = ${JSON.stringify(globalToRgbMap)} as const;
export const globalToHexAlphaMap = ${JSON.stringify(globalToHexAlphaMap)} as const;
export const globalToRgbAlphaMap = ${JSON.stringify(globalToRgbAlphaMap)} as const;
export const globalToNameMap = ${JSON.stringify(globalToNameMap)} as const;
export const namedColorMap = ${JSON.stringify(namedColorMap)} as const;
export const namedColorToHexMap = ${JSON.stringify(namedColorToHexMap)} as const;
export const namedColorToRgbMap = ${JSON.stringify(namedColorToRgbMap)} as const;
export const namedColorToHexAlphaMap = ${JSON.stringify(namedColorToHexAlphaMap)} as const;
export const namedColorToRgbAlphaMap = ${JSON.stringify(namedColorToRgbAlphaMap)} as const;
export const namedColorToNameMap = ${JSON.stringify(namedColorToNameMap)} as const;
export const specialNamedColorMap = ${JSON.stringify(specialNamedColorMap)} as const;
export const specialNamedColorToHexMap = ${JSON.stringify(specialNamedColorToHexMap)} as const;
export const specialNamedColorToRgbMap = ${JSON.stringify(specialNamedColorToRgbMap)} as const;
export const specialNamedColorToHexAlphaMap = ${JSON.stringify(specialNamedColorToHexAlphaMap)} as const;
export const specialNamedColorToRgbAlphaMap = ${JSON.stringify(specialNamedColorToRgbAlphaMap)} as const;
export const specialNamedColorToNameMap = ${JSON.stringify(specialNamedColorToNameMap)} as const;

export type CssColor = typeof CssColorMap[keyof typeof CssColorMap];
export type CssColorToName = typeof CssColorToNameMap[keyof typeof CssColorToNameMap];
export type CssGlobal = typeof globalMap[keyof typeof globalMap];
export type CssGlobalToName = typeof globalToNameMap[keyof typeof globalToNameMap];
export type CssNamedColor = typeof namedColorMap[keyof typeof namedColorMap];
export type CssNamedColorToName = typeof namedColorToNameMap[keyof typeof namedColorToNameMap];
export type CssSpecialNamedColor = typeof specialNamedColorMap[keyof typeof specialNamedColorMap];
export type CssSpecialNamedColorToName = typeof specialNamedColorToNameMap[keyof typeof specialNamedColorToNameMap];
`;

write(resolve(__dirname, '../src/index.ts'), fileContent).catch(console.error);
