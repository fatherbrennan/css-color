import { defineConfig } from 'tsdown';

import { outDirName } from './scripts/common';

const entry = [
  `./src/${outDirName}/index.ts`,
  `./src/${outDirName}/global/index.ts`,
  `./src/${outDirName}/named/index.ts`,
  `./src/${outDirName}/special/index.ts`,
  `./src/${outDirName}/system/index.ts`,
];

export default defineConfig([
  {
    entry,
    clean: true,
    format: ['esm', 'cjs'],
    minify: false,
    dts: true,
    outDir: './dist',
  },
  {
    entry,
    clean: true,
    format: ['esm', 'cjs'],
    minify: true,
    dts: false,
    outDir: './dist',
    outExtensions: ({ format }) => ({
      js: format === 'cjs' ? '.min.cjs' : '.min.js',
    }),
  },
]);
