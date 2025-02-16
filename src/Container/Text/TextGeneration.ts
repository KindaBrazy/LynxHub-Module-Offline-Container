import {FLOWISEAI_ID, LoLLMS_ID, OPEN_WEBUI_ID, SILLYTAVERN_ID, TG_ID} from '../../Constants';
import {PagesData} from '../../types';
import flowiseArguments from './Flowise (FlowiseAI)/Arguments';
import Flow_RM from './Flowise (FlowiseAI)/RendererMethods';
import LoLLM_RM from './LoLLMs (ParisNeo)/RendererMethods';
import openArguments from './OpenWebUI/Arguments';
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
      id: FLOWISEAI_ID,
      title: 'Flowise',
      description: 'Drag & drop UI to build your customized LLM flow',
      repoUrl: 'https://github.com/FlowiseAI/Flowise',
      type: 'text',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/96d813cd-91e6-41ca-95b3-ea619d6c462c/' +
        'width=300/00008-112793962.jpeg',
      methods: Flow_RM,
      arguments: flowiseArguments,
      installationType: 'others',
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
      arguments: openArguments,
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
      id: LoLLMS_ID,
      title: 'LoLLMs',
      description: 'Lord of Large Language and Multi modal Systems Web User Interface',
      repoUrl: 'https://github.com/ParisNeo/lollms-webui',
      type: 'text',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9129f22d-70d1-4584-a7af-9aa96713debc/' +
        'width=300/00007-1103515559.jpeg',
      methods: LoLLM_RM,
      installationType: 'git',
    },
  ],
};

export default textPage;
