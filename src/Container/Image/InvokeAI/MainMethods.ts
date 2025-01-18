import {compare} from 'semver';

import {CardMainMethods, ChosenArgument, LynxApiUpdate, MainIpcTypes} from '../../../types';
import {extractGitUrl, isWin} from '../../../Utils/CrossUtils';
import {utilReadArgs, utilRunCommands, utilSaveArgs} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';
import {INSTALLED_VERSION_KEY} from './Utils/CrossConstants';
import {ReleaseInfo} from './Utils/CrossTypes';
import {getLatestNonRCReleaseAndAsset} from './Utils/InvokeUtils';

const BAT_FILE_NAME = isWin ? 'lynx-user.bat' : 'lynx-user.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\ncall invoke.bat' : '#!/bin/bash\n\nbash ./invoke.sh';

async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

export async function saveArgs(cardDir: string, args: ChosenArgument[]) {
  return await utilSaveArgs(cardDir, args, BAT_FILE_NAME, parseArgsToString);
}

export async function readArgs(cardDir: string) {
  return await utilReadArgs(cardDir, BAT_FILE_NAME, DEFAULT_BATCH_DATA, parseStringToArgs);
}

async function getLatest(): Promise<ReleaseInfo | null> {
  const {owner, repo} = extractGitUrl('https://github.com/invoke-ai/InvokeAI');
  return await getLatestNonRCReleaseAndAsset(owner, repo);
}

async function updateAvailable(lynxApi: LynxApiUpdate) {
  const installedVersion: string | undefined = lynxApi.storage.get(INSTALLED_VERSION_KEY);
  if (!installedVersion) return false;

  const latestVersion = await getLatest();

  if (!latestVersion) return false;

  return compare(installedVersion, latestVersion.version) === -1;
}

function mainIpc(ipc: MainIpcTypes) {
  ipc.handle('get-latest', getLatest);
}

const invokeMainMethods: CardMainMethods = {getRunCommands, updateAvailable, mainIpc};

export default invokeMainMethods;
