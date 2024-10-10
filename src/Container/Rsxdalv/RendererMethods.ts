import {CardRendererMethods} from '../../types';

function catchAddress(input: string): string | undefined {
  if (input.toLowerCase().includes('Installed Packages tab loaded'.toLowerCase())) {
    return 'http://127.0.0.1:7770';
  } else {
    return undefined;
  }
}

const rsxdalvRendererMethods: CardRendererMethods = {catchAddress};
export default rsxdalvRendererMethods;
