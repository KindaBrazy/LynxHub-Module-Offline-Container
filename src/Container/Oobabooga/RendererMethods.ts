import {isEmpty} from 'lodash';

import {ArgType, CardRendererMethods, ChosenArgument} from '../../types';
import {catchAddress, getArgumentType, isValidArg} from '../../Utils/RendererUtils';
import oobaboogaArguments from './Arguments';

export function parseArgsToString(args: ChosenArgument[]): string {
  let result: string = '@echo off\n\n';
  let argResult: string = '';

  args.forEach(arg => {
    const argType = getArgumentType(arg.name, oobaboogaArguments);
    if (argType === 'CheckBox') {
      argResult += `${arg.name} `;
    } else if (argType === 'File' || argType === 'Directory') {
      argResult += `${arg.name} "${arg.value}" `;
    } else {
      argResult += `${arg.name} ${arg.value} `;
    }
  });

  result += isEmpty(argResult) ? 'call start_windows.bat' : `call start_windows.bat ${argResult}`;

  return result;
}

export function parseStringToArgs(args: string): ChosenArgument[] {
  const argResult: ChosenArgument[] = [];
  const lines: string[] = args.split('\n');

  lines.forEach((line: string): void => {
    if (!line.startsWith('call start_windows.bat')) return;

    // Extract the command line arguments and clear falsy values
    const clArgs: string = line.split('call start_windows.bat ')[1];

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
      if (isValidArg(value.name, oobaboogaArguments)) {
        if (getArgumentType(value.name, oobaboogaArguments) === 'CheckBox') {
          argResult.push({name: value.name, value: ''});
        } else {
          argResult.push({name: value.name, value: value.value});
        }
      }
    });
  });

  return argResult;
}

const oobaRendererMethods: CardRendererMethods = {catchAddress, parseArgsToString, parseStringToArgs};

export default oobaRendererMethods;
