import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

import fs from 'graceful-fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compiledPath = join(__dirname, '..', 'Compiled');

async function copyDirectory(src, dest) {
  await fs.promises.mkdir(dest, {recursive: true});
  const entries = await fs.promises.readdir(src, {withFileTypes: true});

  for (let entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  try {
    await fs.promises.rm(join(compiledPath, 'scripts'), {recursive: true, force: true});
    await fs.promises.unlink(join(compiledPath, 'lynxModule.json')).catch(() => {});

    await copyDirectory(join(__dirname, 'scripts'), join(compiledPath, 'scripts'));

    await fs.promises.copyFile(join(__dirname, 'lynxModule.json'), join(compiledPath, 'lynxModule.json'));

    console.log('Files and folders copied successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

await main();
