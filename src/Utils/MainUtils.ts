import {execSync} from 'node:child_process';
import {platform} from 'node:os';
import path from 'node:path';

import axios, {AxiosResponse} from 'axios';
import fs from 'graceful-fs';

import {GitHubRelease, ReleaseInfo} from '../Container/Image/InvokeAI/Utils/CrossTypes';
import {ChosenArgument} from '../types';
import {isWin} from './CrossUtils';

export const LINE_ENDING = isWin ? '\r' : '\n';

export async function initBatchFile(path: string, data: string) {
  try {
    await fs.promises.access(path);
  } catch (error) {
    console.log(error);
    await fs.promises.writeFile(path, data, {encoding: 'utf-8'});
  }
}

export async function utilRunCommands(
  batFileName: string,
  dir?: string,
  defaultData?: string,
): Promise<string | string[]> {
  if (dir && defaultData) await initBatchFile(path.join(dir, batFileName), defaultData);

  return `${isWin ? './' : 'bash ./'}${batFileName}${LINE_ENDING}`;
}

export async function utilSaveArgs(
  args: ChosenArgument[],
  batFileName: string,
  parser: (args: ChosenArgument[]) => string,
  cardDir?: string,
) {
  if (!cardDir) return;
  const result = parser(args);
  const finalDir = path.join(cardDir, batFileName);

  await fs.promises.writeFile(finalDir, result);
}

export async function utilReadArgs(
  batFileName: string,
  defaultData: string,
  parser: (args: string) => ChosenArgument[],
  cardDir?: string,
) {
  if (!cardDir) return [];
  const finalDir = path.join(cardDir, batFileName);

  await initBatchFile(finalDir, defaultData);

  const data = await fs.promises.readFile(finalDir, 'utf-8');

  if (!data) return [];

  return parser(data);
}

export async function getLatestNonRCReleaseAndAsset(
  owner: string,
  repo: string,
  assetNameInclude: string,
): Promise<ReleaseInfo | null> {
  try {
    const response: AxiosResponse<GitHubRelease[]> = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/releases`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      },
    );

    const releases = response.data;

    for (const release of releases) {
      const tagName = release.tag_name;
      const isRC = tagName.includes('rc');
      const isPrerelease = release.prerelease;

      if (!isRC && !isPrerelease) {
        const version = tagName.startsWith('v') ? tagName.slice(1) : tagName;

        const asset = release.assets.find(a => a.name.toLowerCase().includes(assetNameInclude.toLowerCase()));

        if (asset) {
          return {version, downloadUrl: asset.browser_download_url};
        }
      }
    }

    return null; // No non-RC, non-prerelease release with a matching asset found
  } catch (error) {
    console.error('Error fetching releases from GitHub:', error);
    return null;
  }
}

/**
 * Gets the highest available PowerShell version on the system.
 * @returns The major version number of PowerShell, or 0 if PowerShell is not found.
 */
export function getPowerShellVersion(): number {
  const command = '$PSVersionTable.PSVersion.Major';

  try {
    // Try PowerShell Core (pwsh.exe) first
    const pwshVersion = parseInt(
      execSync(`pwsh.exe -NoProfile -Command "${command}"`, {
        encoding: 'utf8' as const,
        stdio: ['pipe', 'pipe', 'ignore'],
      }).trim(),
      10,
    );
    if (pwshVersion >= 7) return pwshVersion;

    // Fall back to Windows PowerShell (powershell.exe)
    const psVersion = parseInt(
      execSync(`powershell.exe -NoProfile -Command "${command}"`, {
        encoding: 'utf8' as const,
        stdio: ['pipe', 'pipe', 'ignore'],
      }).trim(),
      10,
    );
    return psVersion >= 5 ? psVersion : 0;
  } catch (err) {
    console.error('Error determining PowerShell version:', err);
    return 0;
  }
}

/**
 * Determines the appropriate shell based on the operating system and PowerShell version.
 * @returns The shell command to use.
 */
export function determineShell(): string {
  switch (platform()) {
    case 'darwin':
      return 'zsh';
    case 'linux':
      return 'bash';
    case 'win32':
    default:
      return getPowerShellVersion() >= 5 ? 'pwsh.exe' : 'powershell.exe';
  }
}
