import {CardModules} from '../../src/common/types/plugins/modules';
import agentsPage from './Container/Agent/Agents';
import audioPage from './Container/Audio/AudioGeneration';
import imagePage from './Container/Image/ImageGeneration';
import textPage from './Container/Text/TextGeneration';
import toolsPage from './Container/Tools/Tools';
import {isPagesFixed} from './Utils/RendererUtils';

const rendererModules: CardModules = [imagePage, textPage, audioPage, agentsPage];

if (isPagesFixed) rendererModules.push(toolsPage);

export default rendererModules;
