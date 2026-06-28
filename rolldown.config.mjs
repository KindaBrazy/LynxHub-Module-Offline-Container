import {defineConfig} from 'rolldown';

export default defineConfig({
  platform: 'node',
  input: ['module/src/main.ts', 'module/src/renderer.ts'],
  output: {
    dir: 'module_out/scripts',
    format: 'es',
    entryFileNames: '[name].mjs',
    chunkFileNames: '[name]_[hash:6].mjs',
  },
  external: ['electron'],
  tsconfig: 'module/tsconfig.json',
});
