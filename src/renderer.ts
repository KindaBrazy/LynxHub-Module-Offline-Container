import {CardModules} from '../../src/cross/types/plugins/modules';
import agentsPage from './Container/Agent/Agents';
import audioPage from './Container/Audio/AudioGeneration';
import imagePage from './Container/Image/ImageGeneration';
import textPage from './Container/Text/TextGeneration';

const rendererModules: CardModules = [imagePage, textPage, audioPage, agentsPage];

export default rendererModules;
