import {exec} from 'node:child_process';

import axios from 'axios';

export async function getPipPackageVersion(packageName: string): Promise<string | null> {
  return new Promise(resolve => {
    exec(`pip show ${packageName}`, (error, stdout, stderr) => {
      if (error || stderr || !stdout) {
        resolve(null);
      } else {
        const versionLine = stdout.split('\n').find(line => line.startsWith('Version:'));
        if (versionLine) {
          const version = versionLine.split(': ')[1].trim();
          resolve(version);
        } else {
          resolve(null);
        }
      }
    });
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
