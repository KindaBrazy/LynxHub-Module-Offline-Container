import {PagesData} from '../../../../src/cross/plugin/ModuleTypes';
import {
  BOLT_DIY_ID,
  FLOWISEAI_ID,
  GeminiCli_ID,
  LoLLMS_ID,
  N8N_ID,
  OPEN_WEBUI_ID,
  SILLYTAVERN_ID,
  TG_ID,
} from '../../Constants';
import BOLT_DIY_RM from './BoltDiy (StackblitzLabs)/RendererMethods';
import flowiseArguments from './Flowise (FlowiseAI)/Arguments';
import Flow_RM from './Flowise (FlowiseAI)/RendererMethods';
import geminiCliArguments from './Gemini CLI/Arguments';
import GeminiCli_RM from './Gemini CLI/RendererMethods';
import LoLLM_RM from './LoLLMs (ParisNeo)/RendererMethods';
import n8nArguments from './N8N/Arguments';
import N8N_RM from './N8N/RendererMethods';
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
      id: GeminiCli_ID,
      title: 'Gemini CLI',
      description: 'An open-source AI agent that brings the power of Gemini directly into your terminal.',
      repoUrl: 'https://github.com/google-gemini/gemini-cli',
      type: 'text',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6de40d6e-9b5e-4c41-a0ad-344114f79173/' +
        'width=300/Gemini_Generated_Image_h5c817h5c817h5c8.jpeg',
      arguments: geminiCliArguments,
      methods: GeminiCli_RM,
      installationType: 'others',
    },
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
      uninstallType: 'others',
      arguments: openArguments,
    },
    {
      id: N8N_ID,
      title: 'N8N',
      description:
        'Fair-code workflow automation platform with native AI capabilities. ' +
        'Combine visual building with custom code, self-host or cloud, 400+ integrations.',
      repoUrl: 'https://github.com/n8n-io/n8n',
      type: 'text',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ee2b96df-8dad-4bef-93fb-060f0c03cf0d/' +
        'width=300/00016-3727992318.jpeg',
      methods: N8N_RM,
      installationType: 'others',
      arguments: n8nArguments,
    },
    {
      id: BOLT_DIY_ID,
      title: 'Bolt.Diy',
      description: 'Prompt, run, edit, and deploy full-stack web applications using any LLM you want!',
      repoUrl: 'https://github.com/stackblitz-labs/bolt.diy',
      type: 'text',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1c1750b6-e8be-4373-a303-b54b1825f268/' +
        'width=300/00021-2487204806.jpeg',
      methods: BOLT_DIY_RM,
      installationType: 'others',
      uninstallType: 'removeFolder',
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
