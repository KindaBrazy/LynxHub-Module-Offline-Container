import {execSync} from 'node:child_process';

import axios, {AxiosResponse} from 'axios';

import {getVenvPythonPath} from '../../../Utils/MainUtils';
import {GitHubRelease} from '../InvokeAI/Utils/CrossTypes';

export async function invokeGetLatestReleases(owner: string, repo: string): Promise<string[]> {
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

    return releases.map(release => {
      const tagName = release.tag_name;
      return tagName.startsWith('v') ? tagName.slice(1) : tagName;
    });
  } catch (error) {
    console.error('Error fetching releases from GitHub:', error);
    return [];
  }
}

export function invokeValidateInstallation(dir: string): boolean {
  const pythonPath = getVenvPythonPath(dir);

  if (!pythonPath) {
    console.error(`Could not find Python executable for directory: ${dir}`);
    return false;
  }

  try {
    const command = `"${pythonPath}" -c "import invokeai"`;

    execSync(command, {stdio: 'pipe'});

    console.log(`Validation successful: 'invokeai' package found using ${pythonPath}`);
    return true;
  } catch (err: any) {
    console.warn(`Validation failed: 'invokeai' package not found or error executing Python at ${pythonPath}.`, err);
    return false;
  }
}
