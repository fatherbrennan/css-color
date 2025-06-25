/**
 * This script will remove the `outDirName` directory.
 */

import { rmSync } from 'node:fs';

import { outDir } from './common';

rmSync(outDir, { force: true, recursive: true });
