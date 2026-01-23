import {ArgumentsData} from '../../../../../src/common/types/plugins/modules';

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
  {
    category: 'Configuration',
    sections: [
      {
        section: 'Data Configuration',
        items: [
          {
            name: 'dataRoot',
            description: 'Root directory for user data storage (standalone mode only)',
            type: 'Directory',
          },
          {
            name: 'skipContentCheck',
            description: 'Skip new default content checks',
            type: 'CheckBox',
            defaultValue: false,
          },
          {
            name: 'enableDownloadableTokenizers',
            description: 'Enable on-demand tokenizer downloads',
            type: 'CheckBox',
            defaultValue: true,
          },
        ],
      },
      {
        section: 'Logging Configuration',
        items: [
          {
            name: 'logging.minLogLevel',
            description: 'Minimum log level to display in the terminal',
            type: 'DropDown',
            defaultValue: 0,
            values: ['0 (DEBUG)', '1 (INFO)', '2 (WARN)', '3 (ERROR)'],
          },
          {
            name: 'logging.enableAccessLog',
            description: 'Write server access log to file and console',
            type: 'CheckBox',
            defaultValue: true,
          },
        ],
      },
      {
        section: 'Network Configuration',
        items: [
          {
            name: 'listen',
            description: 'Enable listening for incoming connections',
            type: 'CheckBox',
            defaultValue: false,
          },
          {name: 'port', description: 'Server listening port', type: 'Input', defaultValue: 8000},
          {
            name: 'protocol.ipv4',
            description: 'Enable listening on IPv4 protocol',
            type: 'DropDown',
            defaultValue: 'true',
            values: ['true', 'false', 'auto'],
          },
          {
            name: 'protocol.ipv6',
            description: 'Enable listening on IPv6 protocol',
            type: 'DropDown',
            defaultValue: 'false',
            values: ['true', 'false', 'auto'],
          },
          {
            name: 'listenAddress.ipv4',
            description: 'Listen on specific IPv4 address',
            type: 'Input',
            defaultValue: '0.0.0.0',
          },
          {
            name: 'listenAddress.ipv6',
            description: 'Listen on specific IPv6 address',
            type: 'Input',
            defaultValue: '[::]',
          },
          {name: 'dnsPreferIPv6', description: 'Prefer IPv6 for DNS resolution', type: 'CheckBox', defaultValue: false},
        ],
      },
      {
        section: 'SSL Configuration',
        items: [
          {name: 'ssl.enabled', description: 'Enable SSL/TLS', type: 'CheckBox', defaultValue: false},
          {
            name: 'ssl.keyPath',
            description: 'Path to SSL private key',
            type: 'File',
            defaultValue: './certs/privkey.pem',
          },
          {
            name: 'ssl.certPath',
            description: 'Path to SSL certificate',
            type: 'File',
            defaultValue: './certs/cert.pem',
          },
        ],
      },
      {
        section: 'Security Configuration',
        items: [
          {name: 'whitelistMode', description: 'Enable IP whitelist filtering', type: 'CheckBox', defaultValue: true},
          {
            name: 'enableForwardedWhitelist',
            description: 'Check forwarded headers for whitelisted IPs',
            type: 'CheckBox',
            defaultValue: true,
          },
          {
            name: 'whitelist',
            description: 'List of allowed IP addresses',
            type: 'Input',
            defaultValue: '["::1", "127.0.0.1"]',
          }, // Note: Representing an array as a string for now.
          {
            name: 'whitelistDockerHosts',
            description: 'Automatically whitelist Docker host IPs',
            type: 'CheckBox',
            defaultValue: true,
          },
          {name: 'enableCorsProxy', description: 'Enable CORS proxy middleware', type: 'CheckBox', defaultValue: false},
          {
            name: 'allowKeysExposure',
            description: 'Allow API keys exposure in the UI',
            type: 'CheckBox',
            defaultValue: false,
          },
          {
            name: 'disableCsrfProtection',
            description: 'Disable CSRF protection (not recommended)',
            type: 'CheckBox',
            defaultValue: false,
          },
          {
            name: 'securityOverride',
            description: 'Disable startup security checks (not recommended)',
            type: 'CheckBox',
            defaultValue: false,
          },
        ],
      },
      {
        section: 'User Authentication',
        items: [
          {name: 'basicAuthMode', description: 'Enable basic authentication', type: 'CheckBox', defaultValue: false},
          {name: 'basicAuthUser.username', description: 'Basic auth username', type: 'Input', defaultValue: 'user'},
          {name: 'basicAuthUser.password', description: 'Basic auth password', type: 'Input', defaultValue: 'password'},
          {name: 'enableUserAccounts', description: 'Enable multi-user mode', type: 'CheckBox', defaultValue: false},
          {
            name: 'enableDiscreetLogin',
            description: 'Hide user list on login screen',
            type: 'CheckBox',
            defaultValue: false,
          },
          {name: 'sessionTimeout', description: 'User session timeout in seconds', type: 'Input', defaultValue: -1},
          {
            name: 'autheliaAuth',
            description: 'Enable Authelia-based auto login',
            type: 'CheckBox',
            defaultValue: false,
          },
          {
            name: 'perUserBasicAuth',
            description: 'Use account credentials for basic auth',
            type: 'CheckBox',
            defaultValue: false,
          },
        ],
      },
      {
        section: 'Rate Limiting Configuration',
        items: [
          {
            name: 'rateLimiting.preferRealIpHeader',
            description: 'Use X-Real-IP header instead of socket IP for rate limiting',
            type: 'CheckBox',
            defaultValue: false,
          },
        ],
      },
      {
        section: 'Request Proxy Configuration',
        items: [
          {
            name: 'requestProxy.enabled',
            description: 'Enable proxy for outgoing requests',
            type: 'CheckBox',
            defaultValue: false,
          },
          {name: 'requestProxy.url', description: 'Proxy server URL', type: 'Input'},
          {name: 'requestProxy.bypass', description: 'Hosts to bypass proxy', type: 'Input'},
        ],
      },
      {
        section: 'Browser Launch Configuration',
        items: [
          {
            name: 'browserLaunch.enabled',
            description: 'Open the browser automatically on server startup',
            type: 'CheckBox',
            defaultValue: true,
          },
          {
            name: 'browserLaunch.browser',
            description: 'Browser to use for opening the URL',
            type: 'DropDown',
            defaultValue: 'default',
            values: ['default', 'chrome', 'firefox', 'edge', 'brave'],
          },
          {
            name: 'browserLaunch.hostname',
            description: 'Override the hostname for browser launch',
            type: 'Input',
            defaultValue: 'auto',
          },
          {
            name: 'browserLaunch.port',
            description: 'Override the port for browser launch',
            type: 'Input',
            defaultValue: -1,
          },
          {
            name: 'browserLaunch.avoidLocalhost',
            description: "Avoid using 'localhost' in a launch URL",
            type: 'CheckBox',
            defaultValue: false,
          },
        ],
      },
      {
        section: 'Performance Configuration',
        items: [
          {
            name: 'performance.lazyLoadCharacters',
            description: 'Lazy-load character data',
            type: 'CheckBox',
            defaultValue: true,
          },
          {
            name: 'performance.useDiskCache',
            description: 'Enables disk caching for character cards',
            type: 'CheckBox',
            defaultValue: true,
          },
          {
            name: 'performance.memoryCacheCapacity',
            description: 'Maximum memory cache capacity',
            type: 'Input',
            defaultValue: '100mb',
          },
        ],
      },
      {
        section: 'Cache Buster Configuration',
        items: [
          {
            name: 'cacheBuster.enabled',
            description: 'Clear browser cache on first load or after uploading image files',
            type: 'CheckBox',
            defaultValue: false,
          },
          {
            name: 'cacheBuster.userAgentPattern',
            description: 'Only clear cache for the specified user agent regex pattern.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Thumbnailing Configuration',
        items: [
          {
            name: 'thumbnails.enabled',
            description: 'Enable thumbnail generation',
            type: 'CheckBox',
            defaultValue: true,
          },
          {name: 'thumbnails.quality', description: 'JPEG thumbnail quality', type: 'Input', defaultValue: 95},
          {
            name: 'thumbnails.format',
            description: 'Image format for thumbnails',
            type: 'DropDown',
            defaultValue: 'jpg',
            values: ['jpg', 'png'],
          },
          {
            name: 'thumbnails.dimensions.bg',
            description: 'Background thumbnails size',
            type: 'Input',
            defaultValue: '[160, 90]',
          },
          {
            name: 'thumbnails.dimensions.avatar',
            description: 'Avatar thumbnails size',
            type: 'Input',
            defaultValue: '[96, 144]',
          },
          {
            name: 'thumbnails.dimensions.persona',
            description: 'Persona thumbnails size',
            type: 'Input',
            defaultValue: '[96, 144]',
          },
        ],
      },
      {
        section: 'Backup Configuration',
        items: [
          {
            name: 'backups.chat.enabled',
            description: 'Enable automatic chat backups',
            type: 'CheckBox',
            defaultValue: true,
          },
          {
            name: 'backups.chat.checkIntegrity',
            description: 'Verify integrity of chat files before saving',
            type: 'CheckBox',
            defaultValue: true,
          },
          {
            name: 'backups.common.numberOfBackups',
            description: 'Number of backups to keep',
            type: 'Input',
            defaultValue: 50,
          },
          {
            name: 'backups.chat.throttleInterval',
            description: 'Backup throttle interval (ms)',
            type: 'Input',
            defaultValue: 10000,
          },
          {
            name: 'backups.chat.maxTotalBackups',
            description: 'Maximum total chat backups to keep',
            type: 'Input',
            defaultValue: -1,
          },
        ],
      },
      {
        section: 'Extensions Configuration',
        items: [
          {name: 'extensions.enabled', description: 'Enable UI extensions', type: 'CheckBox', defaultValue: true},
          {
            name: 'extensions.autoUpdate',
            description: 'Auto-update extensions (if enabled by the extension manifest)',
            type: 'CheckBox',
            defaultValue: true,
          },
          {
            name: 'extensions.models.autoDownload',
            description: 'Enable automatic model downloads',
            type: 'CheckBox',
            defaultValue: true,
          },
          {
            name: 'extensions.models.classification',
            description: 'HuggingFace model ID for classification',
            type: 'Input',
            defaultValue: 'Cohee/distilbert-base-uncased-go-emotions-onnx',
          },
          {
            name: 'extensions.models.captioning',
            description: 'HuggingFace model ID for image captioning',
            type: 'Input',
            defaultValue: 'Xenova/vit-gpt2-image-captioning',
          },
          {
            name: 'extensions.models.embedding',
            description: 'HuggingFace model ID for embeddings',
            type: 'Input',
            defaultValue: 'Cohee/jina-embeddings-v2-base-en',
          },
          {
            name: 'extensions.models.speechToText',
            description: 'HuggingFace model ID for speech-to-text',
            type: 'Input',
            defaultValue: 'Xenova/whisper-small',
          },
          {
            name: 'extensions.models.textToSpeech',
            description: 'HuggingFace model ID for text-to-speech',
            type: 'Input',
            defaultValue: 'Xenova/speecht5_tts',
          },
        ],
      },
      {
        section: 'Server Plugins',
        items: [
          {
            name: 'enableServerPlugins',
            description: 'Enable server-side plugins',
            type: 'CheckBox',
            defaultValue: false,
          },
          {
            name: 'enableServerPluginsAutoUpdate',
            description: 'Attempt to automatically update server plugins on startup',
            type: 'CheckBox',
            defaultValue: true,
          },
        ],
      },
      {
        section: 'API Integration Settings',
        items: [
          {
            name: 'promptPlaceholder',
            description: 'Default message for empty prompts',
            type: 'Input',
            defaultValue: '[Start a new chat]',
          },
          {
            name: 'openai.randomizeUserId',
            description: 'Randomize user ID for API calls',
            type: 'CheckBox',
            defaultValue: false,
          },
          {name: 'openai.captionSystemPrompt', description: 'System message for caption completion', type: 'Input'},
          {
            name: 'mistral.enablePrefix',
            description: 'Enable reply prefilling. The prefix will be echoed in the response',
            type: 'CheckBox',
            defaultValue: false,
          },
          {
            name: 'ollama.keepAlive',
            description: 'Model keep-alive duration (seconds)',
            type: 'Input',
            defaultValue: -1,
          },
          {
            name: 'ollama.batchSize',
            description: 'Controls the "num_batch" (batch size) parameter of the generation request',
            type: 'Input',
            defaultValue: -1,
          },
          {
            name: 'claude.enableSystemPromptCache',
            description: 'Enable system prompt caching',
            type: 'CheckBox',
            defaultValue: false,
          },
          {
            name: 'claude.cachingAtDepth',
            description: 'Enable message history caching',
            type: 'Input',
            defaultValue: -1,
          },
          {
            name: 'claude.extendedTTL',
            description: 'Use 1h TTL instead of the default 5m.',
            type: 'CheckBox',
            defaultValue: false,
          },
          {
            name: 'gemini.apiVersion',
            description: 'API endpoint version',
            type: 'DropDown',
            defaultValue: 'v1beta',
            values: ['v1beta', 'v1alpha'],
          },
          {
            name: 'deepl.formality',
            description: 'Translation formality level',
            type: 'DropDown',
            defaultValue: 'default',
            values: ['default', 'more', 'less', 'prefer_more', 'prefer_less'],
          },
        ],
      },
    ],
  },
];

export default sillyArguments;
