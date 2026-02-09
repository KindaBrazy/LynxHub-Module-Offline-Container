import {CardModules} from '../../src/common/types/plugins/modules';
import agentsPage from './Container/Agent/Agents';
import audioPage from './Container/Audio/AudioGeneration';
import imagePage from './Container/Image/ImageGeneration';
import othersPage from './Container/Others/OthersPage';
import textPage from './Container/Text/TextGeneration';

const rendererModules: CardModules = [imagePage, textPage, audioPage, agentsPage, othersPage];

export default rendererModules;
