import {NEROGAR_ID} from './Constants';
import audioPage from './Container/AudioGeneration';
import imagePage from './Container/ImageGeneration';
import nerogarRendererMethods from './Container/Nerogar/RendererMethods';
import textPage from './Container/TextGeneration';
import {CardModules} from './types';

const rendererModules: CardModules = [imagePage, textPage, audioPage];

export function setCurrentBuild(build: number) {
  if (build > 10) {
    rendererModules.forEach(page => {
      if (page.routePath === '/imageGenerationPage') {
        page.cards.push({
          id: NEROGAR_ID,
          title: 'OneTrainer',
          description: 'OneTrainer is a one-stop solution for all your stable diffusion training needs.',
          repoUrl: 'https://github.com/Nerogar/OneTrainer',
          type: 'image',
          bgUrl:
            'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/db3575cb-162a-4436-b5d0-f9fbf9ed1140' +
            '/width=300/00002-4073703889.jpeg',
          methods: nerogarRendererMethods,
        });
      }
    });
  }
}

export default rendererModules;
