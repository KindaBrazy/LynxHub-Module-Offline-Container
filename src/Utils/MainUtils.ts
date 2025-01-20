import path from 'node:path';

import fs from 'graceful-fs';

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
