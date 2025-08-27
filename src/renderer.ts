import {CardModules} from '../../src/cross/plugin/ModuleTypes';
import audioPage from './Container/Audio/AudioGeneration';
import imagePage from './Container/Image/ImageGeneration';
import textPage from './Container/Text/TextGeneration';

const rendererModules: CardModules = [imagePage, textPage, audioPage];

export default rendererModules;
