import {PagesData} from '../../../../src/cross/plugin/ModuleTypes';
import {FLOWISEAI_ID, GeminiCli_ID, N8N_ID} from '../../Constants';
import flowiseArguments from './Flowise (FlowiseAI)/Arguments';
import Flow_RM from './Flowise (FlowiseAI)/RendererMethods';
import geminiCliArguments from './Gemini CLI/Arguments';
import GeminiCli_RM from './Gemini CLI/RendererMethods';
import n8nArguments from './N8N/Arguments';
import N8N_RM from './N8N/RendererMethods';

const audioPage: PagesData = {
  routePath: 'agents_page',
  cards: [
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
  ],
};

export default audioPage;
