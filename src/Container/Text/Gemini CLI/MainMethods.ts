import path from 'node:path';

import fs from 'graceful-fs';
import treeKill from 'tree-kill';

import {CardMainMethodsInitial, ChosenArgument, MainModuleUtils} from '../../../../../src/cross/plugin/ModuleTypes';
import {GeminiCli_ID} from '../../../Constants';
import {getCdCommand, isWin, removeAnsi} from '../../../Utils/CrossUtils';
import {determineShell, initBatchFile, LINE_ENDING} from '../../../Utils/MainUtils';
import {parseArgsToFiles, parseFilesToArgs} from './RendererMethods';

const CONFIG_FILE = isWin ? 'geminiCli_config.bat' : 'geminiCli_config.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\ngemini' : '#!/bin/bash\n\ngemini';

async function getRunCommands(configDir?: string): Promise<string | string[]> {
  if (!configDir) return '';

  const filePath = path.resolve(path.join(configDir, CONFIG_FILE));
  await initBatchFile(filePath, DEFAULT_BATCH_DATA);

  return [getCdCommand(configDir) + LINE_ENDING, `${isWin ? `& "${filePath}"` : `bash ${filePath}`}${LINE_ENDING}`];
}

async function saveArgs(args: ChosenArgument[], configDir?: string) {
  if (!configDir) return;

  const {scriptData, settingsData} = parseArgsToFiles(args);

  const scriptPath = path.join(configDir, CONFIG_FILE);
  const settingsPath = args.find(arg => arg.name === 'Settings File Location')?.value;

  await fs.promises.writeFile(scriptPath, scriptData);

  if (settingsPath) {
    try {
      await fs.promises.writeFile(settingsPath, settingsData);
    } catch (e) {
      console.error('Error saving settings.json file for gemini-cli', e);
    }
  }
}

async function readArgs(configDir?: string) {
  if (!configDir) return [];

  const scriptPath = path.join(configDir, CONFIG_FILE);

  await initBatchFile(scriptPath, DEFAULT_BATCH_DATA);

  const scriptData = await fs.promises.readFile(scriptPath, 'utf-8');

  return parseFilesToArgs(scriptData, '');
}

async function checkInstalled(utils: MainModuleUtils): Promise<boolean> {
  return new Promise(resolve => {
    const ptyProcess = utils.pty.spawn(determineShell(), [], {env: process.env});

    let output = '';

    ptyProcess.onData((data: any) => {
      output += data;
    });

    ptyProcess.onExit(() => {
      if (ptyProcess.pid) {
        treeKill(ptyProcess.pid);
        ptyProcess.kill();
      }

      const cleanOutput = removeAnsi(output).trim().replace('npm list -g @google/gemini-cli', '');

      const isInstalled = new RegExp(`@google/gemini-cli@.+`).test(cleanOutput);

      resolve(isInstalled);
    });

    utils.getExtensions_TerminalPreCommands(GeminiCli_ID).forEach(command => ptyProcess.write(command));

    ptyProcess.write(`npm list -g @google/gemini-cli${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

async function isInstalled(utils: MainModuleUtils): Promise<boolean> {
  return checkInstalled(utils);
}

async function getVersion(utils: MainModuleUtils): Promise<string> {
  return new Promise(resolve => {
    const ptyProcess = utils.pty.spawn(determineShell(), [], {});

    let output = '';

    ptyProcess.onData((data: any) => {
      output += data;
    });

    ptyProcess.onExit(() => {
      if (ptyProcess.pid) {
        treeKill(ptyProcess.pid);
        ptyProcess.kill();
      }

      const match = output.match(new RegExp(`@google/gemini-cli@([\\d.]+)`, 'i'));
      if (match && match[1]) {
        resolve(match[1]);
      } else {
        resolve('');
      }
    });

    utils.getExtensions_TerminalPreCommands(GeminiCli_ID).forEach(command => ptyProcess.write(command));

    ptyProcess.write(`npm list -g @google/gemini-cli${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

async function checkUpdate(utils: MainModuleUtils): Promise<string | null> {
  return new Promise(resolve => {
    const ptyProcess = utils.pty.spawn(determineShell(), [], {});
    let output = '';

    ptyProcess.onData((data: any) => {
      output += data.toString();
    });

    ptyProcess.onExit(() => {
      if (ptyProcess.pid) {
        treeKill(ptyProcess.pid);
        ptyProcess.kill();
      }

      const lines = removeAnsi(output).split(LINE_ENDING);
      for (const line of lines) {
        const match = line.match(new RegExp(`@google/gemini-cli\\s+[\\d.]+\\s+[\\d.]+\\s+([\\d.]+)`, 'i'));
        if (match) {
          resolve(match[2]);
        }
      }

      resolve(null);
    });

    utils.getExtensions_TerminalPreCommands(GeminiCli_ID).forEach(command => ptyProcess.write(command));

    ptyProcess.write(`npm -g outdated @google/gemini-cli${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

async function updateAvailable(utils: MainModuleUtils): Promise<boolean> {
  const available = await checkUpdate(utils);
  if (available) {
    utils.storage.set('update-available-version-geminiCli', available);
    return true;
  }

  utils.storage.set('update-available-version-geminiCli', undefined);
  return false;
}

function mainIpc(utils: MainModuleUtils) {
  utils.ipc.handle('is_geminiCli_installed', () => checkInstalled(utils));
  utils.ipc.handle('current_geminiCli_version', () => getVersion(utils));
}

async function uninstall(utils: MainModuleUtils): Promise<void> {
  return new Promise((resolve, reject) => {
    const ptyProcess = utils.pty.spawn(determineShell(), [], {});
    let output = '';

    ptyProcess.onData((data: any) => {
      output += data;
    });

    ptyProcess.onExit(({exitCode}: {exitCode: number}) => {
      if (exitCode === 0) {
        resolve();
      } else {
        reject(new Error(`Error uninstalling Gemini Cli. Exit Code: ${exitCode}\nOutput:\n${output}`));
      }
    });

    utils.getExtensions_TerminalPreCommands(GeminiCli_ID).forEach(command => ptyProcess.write(command));

    ptyProcess.write(`npm -g rm @google/gemini-cli${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

const GeminiCli_MM: CardMainMethodsInitial = utils => {
  const configDir = utils.getConfigDir();

  return {
    mainIpc: () => mainIpc(utils),
    getRunCommands: () => getRunCommands(configDir),
    isInstalled: () => isInstalled(utils),
    saveArgs: args => saveArgs(args, configDir),
    readArgs: () => readArgs(configDir),
    updateAvailable: () => updateAvailable(utils),
    uninstall: () => uninstall(utils),
  };
};

export default GeminiCli_MM;
