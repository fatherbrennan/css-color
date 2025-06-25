import type { ColorsConfig } from '../types';

export default [
  {
    title: 'Current Color',
    value: 'currentcolor',
    hex: null,
    rgb: null,
    hexa: null,
    rgba: null,
  },
  {
    title: 'Transparent',
    value: 'transparent',
    hex: null,
    rgb: null,
    hexa: '#00000000',
    rgba: [0, 0, 0, 0],
  },
] satisfies ColorsConfig;
