import { resolve } from 'node:path';

export const outDirName = 'dist';
export const outDir = resolve(__dirname, `../src/${outDirName}`);
