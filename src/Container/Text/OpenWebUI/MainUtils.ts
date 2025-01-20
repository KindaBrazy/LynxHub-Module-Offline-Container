import axios from 'axios';

import {LINE_ENDING} from '../../../Utils/MainUtils';

export async function getPipPackageVersion(packageName: string, pty: any): Promise<string | null> {
  return new Promise(resolve => {
    const shell = process.platform === 'win32' ? 'powershell.exe' : 'bash';
    const ptyProcess = pty.spawn(shell, [], {});

    let output = '';

    ptyProcess.onData((data: any) => {
      output += data;
    });

    ptyProcess.onExit(() => {
      const lines = output.split(/\r?\n/);
      const versionLine = lines.find(line => line.toLowerCase().includes('version:'));
      if (versionLine) {
        const version = versionLine.split(': ')[1].trim();
        resolve(version);
      } else {
        resolve(null);
      }
    });

    ptyProcess.write(`pip show ${packageName}${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

export async function getLatestPipPackageVersion(packageName: string): Promise<string | null> {
  const url = `https://pypi.org/pypi/${packageName}/json`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    if (data && data.info && data.info.version) {
      return data.info.version;
    } else {
      console.error(`Could not find version information for ${packageName} in the response.`);
      return null;
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        console.error(`Package ${packageName} not found on PyPI.`);
      } else {
        console.error(`Error fetching package information for ${packageName}:`, error.message);
      }
    } else {
      console.error(`An unexpected error occurred while fetching package information:`, error);
    }
    return null;
  }
}
