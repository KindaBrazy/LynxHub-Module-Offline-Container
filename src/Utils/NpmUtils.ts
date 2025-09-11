import treeKill from 'tree-kill';

import {MainModuleUtils} from '../../../src/cross/plugin/ModuleTypes';
import {removeAnsi} from './CrossUtils';
import {determineShell, LINE_ENDING} from './MainUtils';

export async function isNpmPackageInstalled(id: string, packageName: string, utils: MainModuleUtils): Promise<boolean> {
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

      const cleanOutput = removeAnsi(output).trim().replace(`npm list -g ${packageName}`, '');

      const isInstalled = new RegExp(`${packageName}@.+`).test(cleanOutput);

      resolve(isInstalled);
    });

    utils.getExtensions_TerminalPreCommands(id).forEach(command => ptyProcess.write(command));

    ptyProcess.write(`npm list -g ${packageName}${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

export async function getNpmPackageVersion(id: string, packageName: string, utils: MainModuleUtils): Promise<string> {
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

      const match = output.match(new RegExp(`${packageName}@([\\d.]+)`, 'i'));
      if (match && match[1]) {
        resolve(match[1]);
      } else {
        resolve('');
      }
    });

    utils.getExtensions_TerminalPreCommands(id).forEach(command => ptyProcess.write(command));

    ptyProcess.write(`npm list -g ${packageName}${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

export async function checkNpmPackageUpdate(
  id: string,
  packageName: string,
  utils: MainModuleUtils,
): Promise<string | null> {
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
        const match = line.match(new RegExp(`${packageName}\\s+[\\d.]+\\s+[\\d.]+\\s+([\\d.]+)`, 'i'));
        if (match) {
          resolve(match[1]);
        }
      }

      resolve(null);
    });

    utils.getExtensions_TerminalPreCommands(id).forEach(command => ptyProcess.write(command));

    ptyProcess.write(`npm -g outdated ${packageName}${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

export async function uninstallNpmPackage(id: string, packageName: string, utils: MainModuleUtils): Promise<void> {
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
        reject(new Error(`Error uninstalling ${packageName}. Exit Code: ${exitCode}\nOutput:\n${output}`));
      }
    });

    utils.getExtensions_TerminalPreCommands(id).forEach(command => ptyProcess.write(command));

    ptyProcess.write(`npm -g rm ${packageName}${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}
