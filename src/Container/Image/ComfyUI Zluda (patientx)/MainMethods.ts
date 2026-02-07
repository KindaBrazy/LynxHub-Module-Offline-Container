import path from 'node:path';

import fs from 'graceful-fs';

import {CardMainMethodsInitial, ChosenArgument} from '../../../../../src/common/types/plugins/modules';
import {COMFYUI_ZLUDA_ID} from '../../../Constants';
import {initBatchFile, utilRunCommands} from '../../../Utils/MainUtils';
import {getArgumentType, isValidArg} from '../../../Utils/RendererUtils';
import comfyZludaArguments from './Arguments';

const BAT_FILE_NAME = 'comfyui-user.bat';
const DEFAULT_BATCH_DATA: string =
  '@echo off\n' +
  '\n' +
  'set "MIOPEN_FIND_MODE=2"\n' +
  'set "MIOPEN_LOG_LEVEL=3"\n' +
  '\n' +
  'set "PYTHON=%~dp0venv\\Scripts\\python.exe"\n' +
  'set "GIT="\n' +
  'set "VENV_DIR=.\\venv"\n' +
  '\n' +
  'set "COMMANDLINE_ARGS="\n' +
  '\n' +
  'set "ZLUDA_COMGR_LOG_LEVEL=1"\n' +
  '\n' +
  '.\\zluda\\zluda.exe -- %PYTHON% main.py %COMMANDLINE_ARGS%' +
  '\npause';

export async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

async function saveArgs(args: ChosenArgument[], dir?: string) {
  if (!dir) return;

  const filePath = path.join(dir, BAT_FILE_NAME);
  await initBatchFile(filePath, DEFAULT_BATCH_DATA);

  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  const lines = fileContent.split('\n');

  // Build command line arguments string
  let commandLineArgs = '';
  const envVars: Record<string, string> = {};

  args.forEach(arg => {
    // Handle environment variables
    if (
      arg.name === 'PYTHON' ||
      arg.name === 'GIT' ||
      arg.name === 'VENV_DIR' ||
      arg.name === 'MIOPEN_FIND_MODE' ||
      arg.name === 'MIOPEN_LOG_LEVEL' ||
      arg.name === 'ZLUDA_COMGR_LOG_LEVEL' ||
      arg.name === 'TRITON_OVERRIDE_ARCH'
    ) {
      envVars[arg.name] = arg.value;
      return;
    }

    // Handle command line arguments
    const argType = getArgumentType(arg.name, comfyZludaArguments);
    if (argType === 'CheckBox') {
      commandLineArgs += `${arg.name} `;
    } else if (argType === 'File' || argType === 'Directory') {
      commandLineArgs += `${arg.name} "${arg.value}" `;
    } else {
      commandLineArgs += `${arg.name} ${arg.value} `;
    }
  });

  // Update lines
  const updatedLines = lines.map(line => {
    const trimmedLine = line.trim();

    // Update environment variables
    for (const [envName, envValue] of Object.entries(envVars)) {
      if (trimmedLine.startsWith(`set "${envName}=`) || trimmedLine.startsWith(`set ${envName}=`)) {
        return `set "${envName}=${envValue}"`;
      }
    }

    // Update COMMANDLINE_ARGS
    if (trimmedLine.startsWith('set "COMMANDLINE_ARGS=')) {
      return `set "COMMANDLINE_ARGS=${commandLineArgs.trim()}"`;
    }

    return line;
  });

  await fs.promises.writeFile(filePath, updatedLines.join('\n'), 'utf-8');
}

export async function readArgs(dir?: string) {
  if (!dir) return [];

  const filePath = path.join(dir, BAT_FILE_NAME);
  await initBatchFile(filePath, DEFAULT_BATCH_DATA);

  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  const lines = fileContent.split('\n');

  const argResult: ChosenArgument[] = [];

  lines.forEach(line => {
    const trimmedLine = line.trim();

    // Parse environment variables
    if (trimmedLine.startsWith('set "') || trimmedLine.startsWith('set ')) {
      const match = trimmedLine.match(/set\s+"?([^=]+)="?([^"]*)"?/);
      if (match) {
        const [, envName, envValue] = match;
        const cleanEnvName = envName.trim();
        const cleanEnvValue = envValue.trim();

        if (
          cleanEnvName === 'PYTHON' ||
          cleanEnvName === 'GIT' ||
          cleanEnvName === 'VENV_DIR' ||
          cleanEnvName === 'MIOPEN_FIND_MODE' ||
          cleanEnvName === 'MIOPEN_LOG_LEVEL' ||
          cleanEnvName === 'ZLUDA_COMGR_LOG_LEVEL' ||
          cleanEnvName === 'TRITON_OVERRIDE_ARCH'
        ) {
          argResult.push({name: cleanEnvName, value: cleanEnvValue});
        } else if (cleanEnvName === 'COMMANDLINE_ARGS') {
          // Parse command line arguments
          const argsString = cleanEnvValue;
          if (!argsString) return;

          const args = argsString.split('--').filter(Boolean);

          args.forEach(arg => {
            const [id, ...valueParts] = arg.trim().split(' ');
            const argName = `--${id}`;
            const argValue = valueParts.join(' ').replace(/"/g, '');

            // Check if the argument is valid
            if (isValidArg(argName, comfyZludaArguments)) {
              const argType = getArgumentType(argName, comfyZludaArguments);
              if (argType === 'CheckBox') {
                argResult.push({name: argName, value: ''});
              } else {
                argResult.push({name: argName, value: argValue});
              }
            }
          });
        }
      }
    }
  });

  return argResult;
}

const ComfyZluda_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(COMFYUI_ZLUDA_ID);

  return {
    getRunCommands: () => getRunCommands(installDir),
    readArgs: () => readArgs(installDir),
    saveArgs: args => saveArgs(args, installDir),
  };
};

export default ComfyZluda_MM;
