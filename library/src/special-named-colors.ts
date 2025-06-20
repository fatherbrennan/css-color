import type { ColorsConfig } from './types';

export default [
  {
    name: 'Current Color',
    value: 'currentcolor',
    hex: null,
    rgb: null,
    hexAlpha: null,
    rgbAlpha: null,
  },
  {
    name: 'Transparent',
    value: 'transparent',
    hex: null,
    rgb: null,
    hexAlpha: '#00000000',
    rgbAlpha: [0, 0, 0, 0],
  },
] satisfies ColorsConfig;
