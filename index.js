import path from 'node:path';
import {fileURLToPath} from 'node:url';

import fs from 'graceful-fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compiledPath = path.join(__dirname, '..', 'Compiled');

async function copyDirectory(src, dest) {
  await fs.promises.mkdir(dest, {recursive: true});
  const entries = await fs.promises.readdir(src, {withFileTypes: true});

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  try {
    // Remove existing "scripts" folder and "lynxModule.json" file in compiledPath
    await fs.promises.rm(path.join(compiledPath, 'scripts'), {recursive: true, force: true});
    await fs.promises.unlink(path.join(compiledPath, 'lynxModule.json')).catch(() => {});

    // Copy "scripts" folder from current directory to compiledPath
    await copyDirectory(path.join(__dirname, 'scripts'), path.join(compiledPath, 'scripts'));

    // Copy "lynxModule.json" file from current directory to compiledPath
    await fs.promises.copyFile(path.join(__dirname, 'lynxModule.json'), path.join(compiledPath, 'lynxModule.json'));

    console.log('Files and folders copied successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

await main();
