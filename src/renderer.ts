import {INVOKEAI_ID, NEROGAR_ID} from './Constants';
import audioPage from './Container/AudioGeneration';
import imagePage from './Container/ImageGeneration';
import invokeArguments from './Container/InvokeAI/Arguments';
import invokeRendererMethods from './Container/InvokeAI/RendererMethods';
import nerogarRendererMethods from './Container/Nerogar/RendererMethods';
import textPage from './Container/TextGeneration';
import {CardModules} from './types';

const rendererModules: CardModules = [imagePage, textPage, audioPage];

export function setCurrentBuild(build: number) {
  if (build > 11) {
    rendererModules.forEach(page => {
      if (page.routePath === '/imageGenerationPage') {
        page.cards.push(
          {
            id: NEROGAR_ID,
            title: 'OneTrainer',
            description: 'OneTrainer is a one-stop solution for all your stable diffusion training needs.',
            repoUrl: 'https://github.com/Nerogar/OneTrainer',
            type: 'image',
            bgUrl:
              'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4f810fe1-775b-44c4-83f0-f1ad07c8fb09' +
              '/width=300/00005-1318253062.jpeg',
            methods: nerogarRendererMethods,
          },
          {
            id: INVOKEAI_ID,
            title: 'Invoke AI',
            description:
              'Invoke is a leading creative engine built to empower professionals and enthusiasts alike. Generate and create' +
              ' stunning visual media using the latest AI-driven technologies. Invoke offers an industry leading web-based UI,' +
              ' and serves as the foundation for multiple commercial products.',
            repoUrl: 'https://github.com/invoke-ai/InvokeAI',
            type: 'image',
            bgUrl:
              'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3a5d8728-2a0f-45d9-ade4-baceb04fa023' +
              '/width=300/00002-3715244638.jpeg',
            arguments: invokeArguments,
            methods: invokeRendererMethods,
          },
        );
      }
    });
  }
}

export default rendererModules;
