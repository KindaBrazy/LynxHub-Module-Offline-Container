import _ from 'lodash';

import {ArgumentsData} from '../types';

export function isValidArg(name: string, Arguments: ArgumentsData): boolean {
  if (_.isEmpty(name)) return false;
  for (const argument of Arguments) {
    if ('sections' in argument) {
      for (const section of argument.sections) {
        if (section.items.some(item => item.name === name)) return true;
      }
    } else {
      if (argument.items.some(item => item.name === name)) return true;
    }
  }
  return false;
}

export function getArgumentByName(name: string, Arguments: ArgumentsData) {
  if (_.isEmpty(name)) return undefined;
  for (const argument of Arguments) {
    if ('sections' in argument) {
      for (const section of argument.sections) {
        const found = section.items.find(item => item.name === name);
        if (found) return found;
      }
    } else {
      const found = argument.items.find(item => item.name === name);
      if (found) return found;
    }
  }
  return undefined;
}

export function getArgumentType(name: string, Arguments: ArgumentsData) {
  return getArgumentByName(name, Arguments)?.type || undefined;
}

export function replaceAddress(input: string): string {
  return input.replace(/http:\/\/0\.0\.0\.0:(\d+)/g, 'http://localhost:$1');
}

export function catchAddress(input: string): string | undefined {
  const localhostPatterns = [
    /https?:\/\/localhost(?::\d+)?/i,
    /https?:\/\/127\.0\.0\.1(?::\d+)?/i,
    /https?:\/\/0\.0\.0\.0(?::\d+)?/i,
    /https?:\/\/\[::1](?::\d+)?/i,
    /https?:\/\/(?:[\w-]+\.)*localhost(?::\d+)?/i,
  ];

  for (const pattern of localhostPatterns) {
    const match = input.match(pattern);
    if (match) {
      return replaceAddress(match[0]);
    }
  }

  return undefined;
}

export function removeEscapes(str: string) {
  return str.replace(/\\(.)/gm, '$1');
}
