/**
 * This script will remove the `outDirName` directory.
 */

import { rmSync } from 'node:fs';

import { outDir } from './generate';

rmSync(outDir, { force: true, recursive: true });
