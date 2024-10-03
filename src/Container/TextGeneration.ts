import {OOBABOOGA_ID, SILLYTAVERN_ID} from '../Constants';
import {PagesData} from '../types';
import oobaboogaArguments from './Oobabooga/Arguments';
import oobaRendererMethods from './Oobabooga/RendererMethods';
import sillyArguments from './SillyTavern/Arguments';
import sillyRendererMethods from './SillyTavern/RendererMethods';

const textPage: PagesData = {
  routePath: '/textGenerationPage',
  cards: [
    {
      id: OOBABOOGA_ID,
      title: 'Text generation web UI',
      description: 'A Gradio web UI for Large Language Models.',
      repoUrl: 'https://github.com/oobabooga/text-generation-webui',
      type: 'text',
      extensionsDir: '/extensions',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/71c60a56-df44-4185-8227-c285e58a3cf1/width=300/00000-3546450635.jpeg',
      arguments: oobaboogaArguments,
      methods: oobaRendererMethods,
    },
    {
      id: SILLYTAVERN_ID,
      title: 'SillyTavern',
      description:
        'SillyTavern provides a single unified interface for many LLM APIs (KoboldAI/CPP, Horde, NovelAI, Ooba, Tabby, OpenAI,' +
        ' OpenRouter, Claude, Mistral and more), a mobile-friendly layout, Visual Novel Mode, Automatic1111 & ComfyUI API image' +
        " generation integration, TTS, WorldInfo (lorebooks), customizable UI, auto-translate, more prompt options than you'd" +
        ' ever want or need, and endless growth potential via third-party extensions.',
      repoUrl: 'https://github.com/SillyTavern/SillyTavern',
      type: 'text',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8691d17f-0414-4280-a743-e4b840250807/width=300/00015-757708719.jpeg',
      arguments: sillyArguments,
      methods: sillyRendererMethods,
    },
  ],
};

export default textPage;
