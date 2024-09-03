import {isEmpty} from 'lodash';

import {ArgType, CardRendererMethods, Category, ChosenArgument, DataSection} from '../../types';
import {catchAddress, getArgumentType, isValidArg, removeEscapes} from '../../Utils/RendererUtils';
import lshqqytigerArguments from './LshqqytigerArguments';
import {isWin} from '../../Utils/CrossUtils';

function getTypeByCategoryName(category: string): Category {
  switch (category) {
    case 'Command Line Arguments':
      return 'cl';
    case 'Environment':
    case 'Environment Variables':
      return 'env';
    default:
      return undefined;
  }
}

function getCategoryType(name: string): Category {
  if (!name) return undefined;

  for (const argument of lshqqytigerArguments) {
    if ('sections' in argument) {
      for (const section of argument.sections) {
        if (section.items.some(item => item.name === name)) {
          if (section.section === 'Variables') return 'envVar';
          return getTypeByCategoryName(argument.category);
        }
      }
    } else {
      if (argument.items.some(item => item.name === name)) {
        return getTypeByCategoryName(argument.category);
      }
    }
  }

  return undefined;
}

export function parseArgsToString(args: ChosenArgument[]): string {
  let result: string = isWin ? '@echo off\n\n' : '#!/bin/bash\n\n';
  let clResult: string = '';

  args.forEach(arg => {
    const cat = getCategoryType(arg.name);
    if (cat !== 'cl') {
      const eWinResult: string = `set ${arg.name}=${arg.value}\n`;
      const eResult: string = cat === 'env' ? `export ${arg.name}="${arg.value}"\n` : `${arg.name}="${arg.value}"\n`;
      if (arg.name !== 'COMMANDLINE_ARGS') result += isWin ? eWinResult : eResult;
    } else if (cat === 'cl') {
      const argType = getArgumentType(arg.name, lshqqytigerArguments);
      if (argType === 'CheckBox') {
        clResult += `${arg.name} `;
      } else if (argType === 'File' || argType === 'Directory') {
        clResult += isWin ? `${arg.name} "${arg.value}" ` : `${arg.name} ${arg.value} `;
      } else {
        clResult += `${arg.name} ${arg.value} `;
      }
    }
  });

  if (!isEmpty(clResult))
    result += isWin ? `set COMMANDLINE_ARGS=${clResult}\n` : `export COMMANDLINE_ARGS=${clResult}\n`;

  result += isWin ? `\ncall webui.bat` : ``;

  return result;
}

function checkLinuxArgLine(line: string): 'set' | 'export' | 'var' | undefined {
  if (isWin && line.startsWith('set ')) return 'set';

  if (line.startsWith('export ')) return 'export';

  for (let arg of lshqqytigerArguments) {
    if (arg.category === 'Environment') {
      if ((arg as DataSection).sections[0].items.find(item => item.name === line.split('=')[0])) {
        return 'var';
      } else {
        return undefined;
      }
    }
  }

  return undefined;
}

export function parseStringToArgs(args: string): ChosenArgument[] {
  const argResult: ChosenArgument[] = [];
  const lines: string[] = args.split('\n');

  lines.forEach((line: string): void => {
    if (line.startsWith('#')) {
      return;
    } else if (line.startsWith(`${isWin ? 'set' : 'export'} COMMANDLINE_ARGS=`)) {
      argResult.push({name: 'COMMANDLINE_ARGS', value: ''});
      // Extract the command line arguments and clear falsy values
      const clArgs: string = line.split('=')[1];

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
        if (isValidArg(value.name, lshqqytigerArguments)) {
          if (getArgumentType(value.name, lshqqytigerArguments) === 'CheckBox') {
            argResult.push({name: value.name, value: ''});
          } else {
            argResult.push({name: value.name, value: value.value});
          }
        }
      });
    } else {
      const lineType = checkLinuxArgLine(line);
      if (lineType === 'export' || lineType === 'set') {
        // If line starts with 'set ' or 'export ', extract the environment variable id and value
        let [name, value] = line.replace(`${lineType} `, '').split('=');
        name = removeEscapes(name.trim());
        value = removeEscapes(value.trim());
        if (isValidArg(name, lshqqytigerArguments)) {
          argResult.push({name, value});
        }
      } else if (checkLinuxArgLine(line) === 'var') {
        let [name, value] = line.split('=');
        name = removeEscapes(name.trim());
        value = removeEscapes(value.trim());
        if (isValidArg(name, lshqqytigerArguments)) {
          argResult.push({name, value});
        }
      }
    }
  });

  return argResult;
}

const a1RendererMethods: CardRendererMethods = {catchAddress, parseArgsToString, parseStringToArgs};

export default a1RendererMethods;
