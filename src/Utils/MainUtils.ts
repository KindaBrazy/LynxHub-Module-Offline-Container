import path from 'node:path';

import {promises} from 'graceful-fs';

import {ChosenArgument} from '../types';
import {isWin} from './CrossUtils';

export const LINE_ENDING = isWin ? '\r' : '\n';

export async function initBatchFile(path: string, data: string) {
  try {
    await promises.access(path);
  } catch (error) {
    console.log(error);
    await promises.writeFile(path, data, {encoding: 'utf-8'});
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
  cardDir: string,
  args: ChosenArgument[],
  batFileName: string,
  parser: (args: ChosenArgument[]) => string,
) {
  const result = parser(args);
  const finalDir = path.join(cardDir, batFileName);

  await promises.writeFile(finalDir, result);
}

export async function utilReadArgs(
  cardDir: string,
  batFileName: string,
  defaultData: string,
  parser: (args: string) => ChosenArgument[],
) {
  const finalDir = path.join(cardDir, batFileName);

  await initBatchFile(finalDir, defaultData);

  const data = await promises.readFile(finalDir, 'utf-8');

  if (!data) return [];

  return parser(data);
}
