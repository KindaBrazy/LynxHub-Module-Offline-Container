import {OPEN_WEBUI_ID, SILLYTAVERN_ID, TG_ID} from '../../Constants';
import {PagesData} from '../../types';
import OPEN_WEBUI_RM from './OpenWebUI/RendererMethods';
import sillyArguments from './SillyTavern/Arguments';
import SILLYTAVERN_RM from './SillyTavern/RendererMethods';
import oobaboogaArguments from './Text Generation (oobabooga)/Arguments';
import TG_RM from './Text Generation (oobabooga)/RendererMethods';

const textPage: PagesData = {
  routePath: '/textGenerationPage',
  cards: [
    {
      id: TG_ID,
      title: 'Text Generation',
      description: 'A Gradio web UI for Large Language Models.',
      repoUrl: 'https://github.com/oobabooga/text-generation-webui',
      type: 'text',
      extensionsDir: '/extensions',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/71c60a56-df44-4185-8227-c285e58a3cf1/width=300/00000-3546450635.jpeg',
      arguments: oobaboogaArguments,
      methods: TG_RM,
      installationType: 'git',
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
      methods: SILLYTAVERN_RM,
      installationType: 'git',
    },
    {
      id: OPEN_WEBUI_ID,
      title: 'Open WebUI',
      description:
        'Open WebUI is an extensible, feature-rich, and user-friendly self-hosted ' +
        'WebUI designed to operate entirely offline. It supports various LLM runners,' +
        ' including Ollama and OpenAI-compatible APIs. ',
      repoUrl: 'https://github.com/open-webui/open-webui',
      type: 'text',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/223520d9-9071-4b73-9171-9628a804f89f/' +
        'width=300/00025-4013828223.jpeg',
      methods: OPEN_WEBUI_RM,
      installationType: 'others',
    },
  ],
};

export default textPage;
