import {PagesData} from '../../../../src/cross/plugin/ModuleTypes';
import {FLOWISEAI_ID, GeminiCli_ID, N8N_ID} from '../../Constants';
import flowiseArguments from './Flowise (FlowiseAI)/Arguments';
import Flow_RM from './Flowise (FlowiseAI)/RendererMethods';
import geminiCliArguments from './Gemini CLI/Arguments';
import GeminiCli_RM from './Gemini CLI/RendererMethods';
import n8nArguments from './N8N/Arguments';
import N8N_RM from './N8N/RendererMethods';

const agentsPage: PagesData = {
  routePath: 'agents_page',
  cards: [
    {
      id: FLOWISEAI_ID,
      title: 'Flowise',
      description: 'Drag & drop UI to build your customized LLM flow',
      repoUrl: 'https://github.com/FlowiseAI/Flowise',
      type: 'text',
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
      methods: N8N_RM,
      installationType: 'others',
      arguments: n8nArguments,
    },
  ],
};

export default agentsPage;
