import path from 'node:path';

import {compare} from 'semver';

import {CardMainMethods, ChosenArgument, LynxApiUpdate, MainIpcTypes} from '../../../types';
import {extractGitUrl} from '../../../Utils/CrossUtils';
import {
  checkWhich,
  getLatestPipPackageVersion,
  isVenvDirectory,
  LINE_ENDING,
  utilReadArgs,
  utilSaveArgs,
} from '../../../Utils/MainUtils';
import {invokeGetCurrentVersion, invokeGetLatestReleases, invokeValidateInstallation} from './MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';
import {Invoke_Command_ActivateVenv, INVOKEAI_UPDATE_AVAILABLE_KEY} from './Utils_Constants';

const CONFIG_FILE = 'invokeai.yaml';
const DEFAULT_CONFIG_DATA = 'schema_version: 4.0.2\n\n';

async function getRunCommands(dir?: string): Promise<string | string[]> {
  return [`${Invoke_Command_ActivateVenv}${LINE_ENDING}`, `invokeai-web --root ${dir}${LINE_ENDING}`];
}

export async function saveArgs(args: ChosenArgument[], dir?: string) {
  return await utilSaveArgs(args, CONFIG_FILE, parseArgsToString, dir);
}

export async function readArgs(dir?: string) {
  return await utilReadArgs(CONFIG_FILE, DEFAULT_CONFIG_DATA, parseStringToArgs, dir);
}

async function mainIpc(ipc: MainIpcTypes) {
  ipc.handle('is_uv_installed', () => {
    return checkWhich('uv');
  });

  ipc.handle('invoke_latest_versions', () => {
    const {owner, repo} = extractGitUrl('https://github.com/invoke-ai/InvokeAI');
    return invokeGetLatestReleases(owner, repo);
  });

  ipc.handle('invoke_current_version', () => invokeGetCurrentVersion(ipc));

  ipc.handle('validate_install_dir', (_, dir: string) => {
    const venvDir = path.join(dir, '.venv');

    const isDir = isVenvDirectory(dir);
    const isVenvDir = isVenvDirectory(venvDir);

    if (isDir) {
      return invokeValidateInstallation(dir);
    } else if (isVenvDir) {
      return invokeValidateInstallation(venvDir);
    }

    return false;
  });
}

async function updateAvailable(lynxApi: LynxApiUpdate): Promise<boolean> {
  const currentVersion = await invokeGetCurrentVersion(lynxApi);

  if (!currentVersion) return false;

  const latestVersion = await getLatestPipPackageVersion('invokeai');

  if (currentVersion && latestVersion && compare(currentVersion, latestVersion) === -1) {
    lynxApi.storage.set(INVOKEAI_UPDATE_AVAILABLE_KEY, latestVersion);
    return true;
  }

  lynxApi.storage.set(INVOKEAI_UPDATE_AVAILABLE_KEY, undefined);
  return false;
}

const Invoke_MM: CardMainMethods = {getRunCommands, readArgs, saveArgs, updateAvailable, mainIpc};

export default Invoke_MM;
