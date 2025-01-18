import axios, {AxiosResponse} from 'axios';

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  tag_name: string;
  prerelease: boolean;
  assets: GitHubReleaseAsset[];
};

type ReleaseInfo = {
  version: string;
  downloadUrl: string;
};

export async function getLatestNonRCReleaseAndAsset(owner: string, repo: string): Promise<ReleaseInfo | null> {
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

        const asset = release.assets.find(a => a.name.toLowerCase().startsWith('InvokeAI-installer'.toLowerCase()));

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
