import { defineConfig } from 'tsdown';

import { outDirName } from './scripts/common';

const entry = [
  `./src/${outDirName}/*`,
  `./src/${outDirName}/global/*`,
  `./src/${outDirName}/named/*`,
  `./src/${outDirName}/special/*`,
  `./src/${outDirName}/system/*`,
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
