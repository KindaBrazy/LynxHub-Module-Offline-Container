import {CardRendererMethods} from '../../types';
import {catchAddress} from '../../Utils/RendererUtils';
import {startInstall} from './Install';

const nerogarRendererMethods: CardRendererMethods = {catchAddress, installUI: {startInstall}};

export default nerogarRendererMethods;
