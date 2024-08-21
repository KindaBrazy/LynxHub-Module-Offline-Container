import {OOBABOOGA_ID} from '../Constants';
import {PagesData} from '../types';
import oobaboogaArguments from './Oobabooga/Arguments';
import oobaRendererMethods from './Oobabooga/RendererMethods';

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
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/71c60a56-df44-4185-8227-c285e58a3cf1/' +
        'width=832,quality=90/00000-3546450635.jpeg',
      arguments: oobaboogaArguments,
      methods: oobaRendererMethods,
    },
  ],
};

export default textPage;
