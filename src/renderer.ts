import audioPage from './Container/AudioGeneration';
import imagePage from './Container/ImageGeneration';
import textPage from './Container/TextGeneration';
import {CardModules} from './types';

const rendererModules: CardModules = [imagePage, textPage, audioPage];

export default rendererModules;
