import {ArgumentsData} from '../../../../../src/cross/plugin/ModuleTypes';

const sillyArguments: ArgumentsData = [
  {
    category: 'Command Line Arguments',
    items: [
      {name: '--version', description: 'Show version number', type: 'CheckBox'},
      {name: '--global', description: 'Forces the use of system-wide paths for application data', type: 'CheckBox'},
      {
        name: '--configPath',
        description: 'Overrides the path to the config.yaml file (standalone mode only)',
        type: 'File',
      },
      {
        name: '--dataRoot',
        description: 'Sets the root directory for data storage (standalone mode only)',
        type: 'Directory',
      },
      {
        name: '--port',
        description:
          "Sets the port under which SillyTavern will run. If not provided falls back to yaml config 'port'.",
        type: 'Input',
      },
      {
        name: '--listen',
        description:
          "SillyTavern is listening on all network interfaces. If not provided falls back to yaml config 'listen'.",
        type: 'CheckBox',
      },
      {name: '--whitelist', description: 'Enables whitelist mode', type: 'CheckBox'},
      {name: '--basicAuthMode', description: 'Enables basic authentication', type: 'CheckBox'},
      {name: '--enableIPv4', description: 'Enables the IPv4 protocol', type: 'CheckBox'},
      {name: '--enableIPv6', description: 'Enables the IPv6 protocol', type: 'CheckBox'},
      {name: '--listenAddressIPv4', description: 'Specifies the IPv4 address to listen on', type: 'Input'},
      {name: '--listenAddressIPv6', description: 'Specifies the IPv6 address to listen on', type: 'Input'},
      {
        name: '--dnsPreferIPv6',
        description: "Prefers IPv6 for dns. If not provided falls back to yaml config 'preferIPv6'.",
        type: 'CheckBox',
      },
      {name: '--ssl', description: 'Enables SSL', type: 'CheckBox'},
      {name: '--certPath', description: 'Path to your certificate file.', type: 'File'},
      {name: '--keyPath', description: 'Path to your private key file.', type: 'File'},
      {
        name: '--browserLaunchEnabled',
        description: 'Automatically launches SillyTavern in the browser.',
        type: 'CheckBox',
      },
      {name: '--browserLaunchHostname', description: 'Sets the browser launch hostname', type: 'Input'},
      {name: '--browserLaunchPort', description: 'Overrides the port for browser launch', type: 'Input'},
      {
        name: '--browserLaunchAvoidLocalhost',
        description: "Avoids using 'localhost' for browser launch in auto mode",
        type: 'CheckBox',
      },
      {
        name: '--corsProxy',
        description: "Enables CORS proxy. If not provided falls back to yaml config 'enableCorsProxy'.",
        type: 'CheckBox',
      },
      {name: '--requestProxyEnabled', description: 'Enables a use of proxy for outgoing requests', type: 'CheckBox'},
      {name: '--requestProxyUrl', description: 'Request proxy URL (HTTP or SOCKS protocols)', type: 'Input'},
      {
        name: '--requestProxyBypass',
        description: 'Request proxy bypass list (space separated list of hosts)',
        type: 'Input',
      },
      {name: '--disableCsrf', description: 'Disables CSRF protection', type: 'CheckBox'},
    ],
  },
];

export default sillyArguments;
