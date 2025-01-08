import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import {createRequire} from 'module';

const moduleEntry = createRequire(import.meta.url)('./package.json');

export default {
  input: [moduleEntry.mainEntryFile, moduleEntry.rendererEntryFile],
  output: {
    dir: 'scripts',
    format: 'es',
    entryFileNames: '[name].mjs',
    chunkFileNames: '[name]_[hash:6].mjs',
  },
  plugins: [json(), typescript(), nodeResolve(), commonjs()],
};
