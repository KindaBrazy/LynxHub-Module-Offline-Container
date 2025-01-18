export type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
};

export type GitHubRelease = {
  tag_name: string;
  prerelease: boolean;
  assets: GitHubReleaseAsset[];
};

export type ReleaseInfo = {
  version: string;
  downloadUrl: string;
};
