async function isWinOS(): Promise<boolean> {
  let isWin: boolean = true;

  if (typeof window !== 'undefined' && window.osPlatform) {
    isWin = window.osPlatform === 'win32';
  } else if (typeof process !== 'undefined') {
    const result = await import('os');
    isWin = result.platform() === 'win32';
  }

  return isWin;
}

export const isWin = await isWinOS();
