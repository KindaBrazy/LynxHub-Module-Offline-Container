import {isEmpty} from 'lodash';

import {ArgType, CardMainMethods, CardRendererMethods, ChosenArgument} from '../../types';
import {catchAddress, getArgumentType, isValidArg} from '../../Utils/RendererUtils';
import vladmandicArguments from './Arguments';
import {getRunCommands, readArgs, saveArgs} from './MainMethods';

export function parseArgsToString(args: ChosenArgument[]): string {
  let result: string = '@echo off\n\n';
  let argResult: string = '';

  args.forEach(arg => {
    const argType = getArgumentType(arg.name, vladmandicArguments);
    if (argType === 'CheckBox') {
      argResult += `${arg.name} `;
    } else if (argType === 'File' || argType === 'Directory') {
      argResult += `${arg.name} "${arg.value}" `;
    } else {
      argResult += `${arg.name} ${arg.value} `;
    }
  });

  result += isEmpty(argResult) ? 'call webui.bat' : `call webui.bat ${argResult}`;

  return result;
}

export function parseStringToArgs(args: string): ChosenArgument[] {
  const argResult: ChosenArgument[] = [];
  const lines: string[] = args.split('\n');

  lines.forEach((line: string): void => {
    if (!line.startsWith('call webui.bat')) return;

    // Extract the command line arguments and clear falsy values
    const clArgs: string = line.split('call webui.bat ')[1];

    if (!clArgs) return;

    const args: string[] = clArgs.split('--').filter(Boolean);

    // Map each argument to an object with id and value
    const result: ArgType[] = args.map((arg: string): ArgType => {
      const [id, ...value] = arg.trim().split(' ');
      return {
        name: `--${id}`,
        value: value.join(' ').replace(/"/g, ''),
      };
    });

    // Process each argument
    result.forEach((value: ArgType): void => {
      // Check if the argument exists or valid
      if (isValidArg(value.name, vladmandicArguments)) {
        if (getArgumentType(value.name, vladmandicArguments) === 'CheckBox') {
          argResult.push({name: value.name, value: ''});
        } else {
          argResult.push({name: value.name, value: value.value});
        }
      }
    });
  });

  return argResult;
}

const vladRendererMethods: CardRendererMethods = {catchAddress, parseArgsToString, parseStringToArgs};

export default vladRendererMethods;
