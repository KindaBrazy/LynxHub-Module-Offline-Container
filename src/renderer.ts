import {CardModules} from '../../src/common/types/plugins/modules';
import agentsPage from './Container/Agent/Agents';
import audioPage from './Container/Audio/AudioGeneration';
import imagePage from './Container/Image/ImageGeneration';
import textPage from './Container/Text/TextGeneration';
import toolsPage from './Container/Tools/ToolsPage';

const rendererModules: CardModules = [imagePage, textPage, audioPage, agentsPage, toolsPage];

export default rendererModules;
