import 'vite/client';

declare global {
  interface Window {
    osPlatform: NodeJS.Platform;
  }
}
