import {ArgumentsData} from '../../types';

const sillyArguments: ArgumentsData = [
  {
    category: 'Command Line Arguments',
    items: [
      {name: '--version', description: 'Show version number', type: 'CheckBox'},
      {
        name: '--enableIPv6',
        description: 'Enables IPv6.',
        type: 'CheckBox',
      },
      {
        name: '--enableIPv4',
        description: 'Enables IPv4.',
        type: 'CheckBox',
      },
      {
        name: '--port',
        description:
          "Sets the port under which SillyTavern will run. If not provided falls back to yaml config 'port'.",
        type: 'Input',
      },
      {
        name: '--dnsPreferIPv6',
        description: "Prefers IPv6 for dns. If not provided falls back to yaml config 'preferIPv6'.",
        type: 'CheckBox',
      },
      {
        name: '--autorun',
        description:
          "Automatically launch SillyTavern in the browser. If not provided falls back to yaml config 'autorun'.",
        type: 'CheckBox',
      },
      {
        name: '--autorunHostname',
        description: "The autorun hostname, probably best left on 'auto'.",
        type: 'Input',
      },
      {
        name: '--autorunPortOverride',
        description: 'Overrides the port for autorun.',
        type: 'Input',
      },
      {
        name: '--listen',
        description:
          "SillyTavern is listening on all network interfaces. If not provided falls back to yaml config 'listen'.",
        type: 'CheckBox',
      },
      {
        name: '--corsProxy',
        description: "Enables CORS proxy. If not provided falls back to yaml config 'enableCorsProxy'.",
        type: 'CheckBox',
      },
      {
        name: '--disableCsrf',
        description: 'Disables CSRF protection',
        type: 'CheckBox',
      },
      {
        name: '--ssl',
        description: 'Enables SSL',
        type: 'CheckBox',
      },
      {
        name: '--certPath',
        description: 'Path to your certificate file.',
        type: 'File',
      },
      {
        name: '--keyPath',
        description: 'Path to your private key file.',
        type: 'File',
      },
      {
        name: '--whitelist',
        description: 'Enables whitelist mode',
        type: 'CheckBox',
      },
      {
        name: '--dataRoot',
        description: 'Root directory for data storage',
        type: 'Directory',
      },
      {
        name: '--avoidLocalhost',
        description: "Avoids using 'localhost' for autorun in auto mode.",
        type: 'CheckBox',
      },
      {
        name: '--basicAuthMode',
        description: 'Enables basic authentication',
        type: 'CheckBox',
      },
      {
        name: '--requestProxyEnabled',
        description: 'Enables a use of proxy for outgoing requests',
        type: 'CheckBox',
      },
      {
        name: '--requestProxyUrl',
        description: 'Request proxy URL (HTTP or SOCKS protocols)',
        type: 'Input',
      },
      {
        name: '--requestProxyBypass',
        description: 'Request proxy bypass list (space separated list of hosts)',
        type: 'Input',
      },
    ],
  },
];

export default sillyArguments;
