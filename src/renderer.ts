import {NEROGAR_ID} from './Constants';
import audioPage from './Container/AudioGeneration';
import imagePage from './Container/ImageGeneration';
import nerogarRendererMethods from './Container/Nerogar/RendererMethods';
import textPage from './Container/TextGeneration';
import {CardModules} from './types';

const rendererModules: CardModules = [imagePage, textPage, audioPage];

export function setCurrentBuild(build: number) {
  if (build > 11) {
    rendererModules.forEach(page => {
      if (page.routePath === '/imageGenerationPage') {
        page.cards.push({
          id: NEROGAR_ID,
          title: 'OneTrainer',
          description: 'OneTrainer is a one-stop solution for all your stable diffusion training needs.',
          repoUrl: 'https://github.com/Nerogar/OneTrainer',
          type: 'image',
          bgUrl:
            'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4f810fe1-775b-44c4-83f0-f1ad07c8fb09' +
            '/width=300/00005-1318253062.jpeg',
          methods: nerogarRendererMethods,
        });
      }
    });
  }
}

export default rendererModules;
