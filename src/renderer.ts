import {ComfyUI_Zluda_ID, EREW123_ID, INVOKEAI_ID, NEROGAR_ID} from './Constants';
import audioPage from './Container/AudioGeneration';
import erew123RendererMethods from './Container/Erew123/RendererMethods';
import imagePage from './Container/ImageGeneration';
import invokeArguments from './Container/InvokeAI/Arguments';
import invokeRendererMethods from './Container/InvokeAI/RendererMethods';
import nerogarRendererMethods from './Container/Nerogar/RendererMethods';
import comfyZludaArguments from './Container/Patientx/Arguments';
import comfyZludaRendererMethods from './Container/Patientx/RendererMethods';
import textPage from './Container/TextGeneration';
import {CardModules} from './types';

const rendererModules: CardModules = [imagePage, textPage, audioPage];

export function setCurrentBuild(build: number) {
  if (build > 11) {
    rendererModules.forEach(page => {
      if (page.routePath === '/imageGenerationPage') {
        page.cards.splice(1, 0, {
          id: ComfyUI_Zluda_ID,
          title: 'ComfyUI Zluda',
          description:
            'The most powerful and modular stable diffusion GUI, api and backend with a graph/nodes interface.' +
            ' Now ZLUDA enhanced  for better AMD GPU performance.',
          repoUrl: 'https://github.com/patientx/ComfyUI-Zluda',
          extensionsDir: '/custom_nodes',
          type: 'image',
          bgUrl:
            'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c660d1cf-772f-4068-9a32-3ed76c6ee9e8' +
            '/width=300/00023-3290977700.jpeg',
          arguments: comfyZludaArguments,
          methods: comfyZludaRendererMethods,
        });
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
      } else if (page.routePath === '/audioGenerationPage') {
        page.cards.push({
          id: EREW123_ID,
          title: 'AllTalk TTS',
          description:
            'AllTalk is based on the Coqui TTS engine, similar to the Coqui_tts extension for Text generation webUI, ' +
            'however supports a variety of advanced features, such as a settings page, low VRAM support, DeepSpeed, ' +
            'narrator, model finetuning, custom models, wav file maintenance. It can also be used with 3rd Party ' +
            'software via JSON calls.',
          repoUrl: 'https://github.com/erew123/alltalk_tts',
          type: 'audio',
          bgUrl:
            'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d0f56692-50fc-4e8e-ac8b-02d8ec070417' +
            '/width=300/00006-951269360.jpeg',
          methods: erew123RendererMethods,
        });
      }
    });
  }
}

export default rendererModules;
