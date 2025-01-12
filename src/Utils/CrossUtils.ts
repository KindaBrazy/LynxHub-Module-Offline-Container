import {CardInfoCallback, CardInfoDescriptions} from '../types';

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

export function formatSize(size: number | undefined): string {
  if (!size) return '0KB';
  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)} KB`;
  } else if (size < 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  } else {
    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }
}

export class DescriptionManager {
  description: CardInfoDescriptions;
  callback: CardInfoCallback;

  constructor(description: CardInfoDescriptions, callback: CardInfoCallback) {
    this.description = description;
    this.callback = callback;
    this.callback.setDescription(description);
  }

  public updateItem(sectionIndex: number, itemIndex: number, value: string | 'loading' | undefined | null) {
    if (this.description) {
      this.description[sectionIndex].items[itemIndex].result = value;
      this.callback.setDescription([...this.description]);
    }
  }
}

export const isWin = await isWinOS();
