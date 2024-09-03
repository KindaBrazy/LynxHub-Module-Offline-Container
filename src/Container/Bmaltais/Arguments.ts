import {ArgumentsData} from '../../types';

const bmaltaisArguments: ArgumentsData = [
  {
    category: 'Command Line Arguments',
    items: [
      {
        name: '--listen',
        description: 'Specify the IP address to listen on for connections to Gradio.',
        type: 'Input',
      },
      {
        name: '--username',
        description: 'Set a username for authentication.',
        type: 'Input',
      },
      {
        name: '--password',
        description: 'Set a password for authentication.',
        type: 'Input',
      },
      {
        name: '--server_port',
        description: 'Define the port to run the server listener on.',
        type: 'Input',
      },
      {
        name: '--inbrowser',
        description: 'Open the Gradio UI in a web browser.',
        type: 'Input',
      },
      {
        name: '--share',
        description: 'Share the Gradio UI.',
        type: 'CheckBox',
      },
      {
        name: '--language',
        description: 'Set custom language',
        type: 'Input',
      },
    ],
  },
];

export default bmaltaisArguments;
