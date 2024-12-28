import {isEmpty} from 'lodash';

import {ArgType, CardRendererMethods, ChosenArgument} from '../../types';
import {isWin} from '../../Utils/CrossUtils';
import {catchAddress, getArgumentType, isValidArg} from '../../Utils/RendererUtils';
import invokeArguments from './Arguments';
import {startInstall, startUpdate, updateAvailable} from './Install_Update';

const shellCommand = isWin ? 'call invoke.bat' : 'bash ./invoke.sh';

export function parseArgsToString(args: ChosenArgument[]): string {
  let result: string = isWin ? '@echo off\n\n' : '#!/bin/bash\n\n';
  let argResult: string = '';

  args.forEach(arg => {
    const argType = getArgumentType(arg.name, invokeArguments);
    if (argType === 'CheckBox') {
      argResult += `${arg.name} `;
    } else if (argType === 'File' || argType === 'Directory') {
      argResult += `${arg.name} "${arg.value}" `;
    } else {
      argResult += `${arg.name} ${arg.value} `;
    }
  });

  result += isEmpty(argResult) ? shellCommand : `${shellCommand} ${argResult}`;

  return result;
}

export function parseStringToArgs(args: string): ChosenArgument[] {
  const argResult: ChosenArgument[] = [];
  const lines: string[] = args.split('\n');

  lines.forEach((line: string): void => {
    if (!line.startsWith(shellCommand)) return;

    // Extract the command line arguments and clear falsy values
    const clArgs: string = line.split(`${shellCommand} `)[1];

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
      if (isValidArg(value.name, invokeArguments)) {
        if (getArgumentType(value.name, invokeArguments) === 'CheckBox') {
          argResult.push({name: value.name, value: ''});
        } else {
          argResult.push({name: value.name, value: value.value});
        }
      }
    });
  });

  return argResult;
}

const invokeRendererMethods: CardRendererMethods = {
  catchAddress,
  parseArgsToString,
  parseStringToArgs,
  manager: {
    startInstall,
    // @ts-ignore
    updater: {updateType: 'stepper', startUpdate, updateAvailable},
  },
};

export default invokeRendererMethods;
