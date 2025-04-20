import {ArgumentsData} from '../../../types';

const invokeArguments: ArgumentsData = [
  {
    category: 'Command Line Arguments',
    sections: [
      {
        section: 'Network & Server',
        items: [
          {
            name: 'host',
            description: 'IP address to bind to. Use 0.0.0.0 to serve to your local network.',
            type: 'Input',
            defaultValue: '127.0.0.1',
          },
          {
            name: 'port',
            description: 'Port to bind to.',
            type: 'Input',
            defaultValue: '9090',
          },
          {
            name: 'allow_origins',
            description: 'Allowed CORS origins.',
            type: 'Input',
          },
          {
            name: 'allow_credentials',
            description: 'Allow CORS credentials.',
            type: 'CheckBox',
          },
          {
            name: 'allow_methods',
            description: 'Methods allowed for CORS.',
            type: 'Input',
            defaultValue: "['*']",
          },
          {
            name: 'allow_headers',
            description: 'Headers allowed for CORS.',
            type: 'Input',
            defaultValue: "['*']",
          },
          {
            name: 'ssl_certfile',
            description: 'SSL certificate file for HTTPS. See https://www.uvicorn.org/settings/#https.',
            type: 'File',
          },
          {
            name: 'ssl_keyfile',
            description: 'SSL key file for HTTPS. See https://www.uvicorn.org/settings/#https.',
            type: 'File',
          },
        ],
      },
      {
        section: 'Directories',
        items: [
          {
            name: 'models_dir',
            description: 'Path to the models directory.',
            type: 'Directory',
            defaultValue: 'models',
          },
          {
            name: 'convert_cache_dir',
            description:
              'Path to the converted models cache directory (DEPRECATED, but do not delete because it is' +
              ' needed for migration from previous versions).',
            type: 'Directory',
            defaultValue: 'models/.convert_cache',
          },
          {
            name: 'download_cache_dir',
            description: 'Path to the directory that contains dynamically downloaded models.',
            type: 'Directory',
            defaultValue: 'models/.download_cache',
          },
          {
            name: 'legacy_conf_dir',
            description: 'Path to directory of legacy checkpoint config files.',
            type: 'Directory',
            defaultValue: 'configs',
          },
          {
            name: 'db_dir',
            description: 'Path to InvokeAI databases directory.',
            type: 'Directory',
            defaultValue: 'databases',
          },
          {
            name: 'outputs_dir',
            description: 'Path to directory for outputs.',
            type: 'Directory',
            defaultValue: 'outputs',
          },
          {
            name: 'custom_nodes_dir',
            description: 'Path to directory for custom nodes.',
            type: 'Directory',
            defaultValue: 'nodes',
          },
          {
            name: 'style_presets_dir',
            description: 'Path to directory for style presets.',
            type: 'Directory',
            defaultValue: 'style_presets',
          },
          {
            name: 'workflow_thumbnails_dir',
            description: 'Path to directory for workflow thumbnails.',
            type: 'Directory',
          },
        ],
      },
      {
        section: 'Logging',
        items: [
          {
            name: 'log_tokenization',
            description: 'Enable logging of parsed prompt tokens.',
            type: 'CheckBox',
          },
          {
            name: 'log_handlers',
            description: 'Log handler. Valid options are "console", "file=", "syslog=path|address:host:port", "http=".',
            type: 'Input',
            defaultValue: "['console']",
          },
          {
            name: 'log_format',
            description:
              'Log format. Use "plain" for text-only, "color" for colorized output, "legacy" for 2.3-style' +
              ' logging and "syslog" for syslog-style.',
            type: 'DropDown',
            defaultValue: 'color',
            values: ['plain', 'color', 'syslog', 'legacy'],
          },
          {
            name: 'log_level',
            description: 'Emit logging messages at this level or higher.',
            type: 'DropDown',
            defaultValue: 'info',
            values: ['debug', 'info', 'warning', 'error', 'critical'],
          },
          {
            name: 'log_level_network',
            description: "Log level for network-related messages. 'info' and 'debug' are very verbose.",
            type: 'DropDown',
            defaultValue: 'warning',
            values: ['debug', 'info', 'warning', 'error', 'critical'],
          },
          {
            name: 'log_sql',
            description: 'Log SQL queries. log_level must be debug for this to do anything. Extremely verbose.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Development & Profiling',
        items: [
          {
            name: 'use_memory_db',
            description: 'Use in-memory database. Useful for development.',
            type: 'CheckBox',
          },
          {
            name: 'dev_reload',
            description: 'Automatically reload when Python sources are changed. Does not reload node definitions.',
            type: 'CheckBox',
          },
          {
            name: 'profile_graphs',
            description: 'Enable graph profiling using cProfile.',
            type: 'CheckBox',
          },
          {
            name: 'profile_prefix',
            description: 'An optional prefix for profile output files.',
            type: 'Input',
          },
          {
            name: 'profiles_dir',
            description: 'Path to profiles output directory.',
            type: 'Directory',
            defaultValue: 'profiles',
          },
        ],
      },
      {
        section: 'Memory & Performance',
        items: [
          {
            name: 'max_cache_ram_gb',
            description:
              'The maximum amount of CPU RAM to use for model caching in GB. If unset,' +
              ' the limit will be configured based on the available RAM. It is recommended to leave this unset.',
            type: 'Input',
          },
          {
            name: 'max_cache_vram_gb',
            description:
              'The amount of VRAM to use for model caching in GB. If unset, the limit' +
              ' will be configured based on the available VRAM and device_working_mem_gb. It is recommended to leave this unset.',
            type: 'Input',
          },
          {
            name: 'device_working_mem_gb',
            description:
              'The amount of working memory to keep available on the compute device (in GB).' +
              ' Has no effect if running on CPU. If you are experiencing OOM errors, try increasing this value.',
            type: 'Input',
          },
          {
            name: 'log_memory_usage',
            description:
              'If True, a memory snapshot will be captured before and after every model cache operation,' +
              ' and the result will be logged (at debug level). There is a time cost to capturing the' +
              ' memory snapshots, so it is recommended to only enable this feature if you are actively' +
              " inspecting the model cache's behaviour.",
            type: 'CheckBox',
          },
          {
            name: 'enable_partial_loading',
            description:
              'Enable partial loading of models. Reduces VRAM requirements (at the cost of slower speed)' +
              ' by streaming the model from RAM to VRAM as needed.',
            type: 'CheckBox',
          },
          {
            name: 'keep_ram_copy_of_weights',
            description:
              "Whether to keep a full RAM copy of a model's weights when loaded in VRAM." +
              ' Increases RAM usage but speeds up model switching and LoRA patching.',
            type: 'CheckBox',
          },
          {
            name: 'pytorch_cuda_alloc_conf',
            description:
              'Configure the Torch CUDA memory allocator (e.g., "backend:cudaMallocAsync").' +
              ' Impacts peak VRAM and performance. Requires experimentation.',
            type: 'Input',
          },
          {
            name: 'device',
            description:
              'Preferred execution device. auto will choose the device depending on the hardware platform' +
              ' and the installed torch capabilities.',
            type: 'DropDown',
            defaultValue: 'auto',
            values: ['auto', 'cpu', 'cuda', 'cuda:1', 'mps'],
          },
          {
            name: 'precision',
            description:
              'Floating point precision. float16 will consume half the memory of float32 but produce slightly' +
              ' lower-quality images. The auto setting will guess the proper precision based on your video' +
              ' card and operating system.',
            type: 'DropDown',
            defaultValue: 'auto',
            values: ['auto', 'float16', 'bfloat16', 'float32'],
          },
          {
            name: 'sequential_guidance',
            description:
              'Whether to calculate guidance in serial instead of in parallel, lowering memory requirements.',
            type: 'CheckBox',
          },
          {
            name: 'attention_type',
            description: 'Attention type.',
            type: 'DropDown',
            defaultValue: 'auto',
            values: ['auto', 'normal', 'xformers', 'sliced', 'torch-sdp'],
          },
          {
            name: 'attention_slice_size',
            description: 'Slice size, valid when attention_type=="sliced".',
            type: 'DropDown',
            defaultValue: 'auto',
            values: ['auto', 'balanced', 'max', '1', '2', '3', '4', '5', '6', '7', '8'],
          },
          {
            name: 'force_tiled_decode',
            description:
              'Whether to enable tiled VAE decode (reduces memory consumption with some performance penalty).',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Features & Misc',
        items: [
          {
            name: 'patchmatch',
            description: 'Enable patchmatch inpaint code.',
            type: 'CheckBox',
          },
          {
            name: 'pil_compress_level',
            description:
              'The compress_level setting of PIL.Image.save(), used for PNG encoding. All settings are lossless.' +
              ' 0 = no compression, 1 = fastest (slightly larger file), 9 = slowest (smallest file). 1 is recommended.',
            type: 'Input',
            defaultValue: '1',
          },
          {
            name: 'max_queue_size',
            description: 'Maximum number of items in the session queue.',
            type: 'Input',
            defaultValue: '10000',
          },
          {
            name: 'clear_queue_on_startup',
            description: 'Empties session queue on startup.',
            type: 'CheckBox',
          },
          {
            name: 'allow_nodes',
            description: 'List of nodes to allow. Omit to allow all.',
            type: 'Input',
          },
          {
            name: 'deny_nodes',
            description: 'List of nodes to deny. Omit to deny none.',
            type: 'Input',
          },
          {
            name: 'node_cache_size',
            description: 'How many cached nodes to keep in memory.',
            type: 'Input',
            defaultValue: '512',
          },
          {
            name: 'hashing_algorithm',
            description:
              "Model hashing algorithm for model installs. 'blake3_multi' (SSD), 'blake3_single'" +
              " (HDD). 'random' disables hashing (UUID). Other hashlib algos supported but slower.",
            type: 'DropDown',
            defaultValue: 'blake3_single',
            values: [
              'blake3_multi',
              'blake3_single',
              'random',
              'md5',
              'sha1',
              'sha224',
              'sha256',
              'sha384',
              'sha512',
              'blake2b',
              'blake2s',
              'sha3_224',
              'sha3_256',
              'sha3_384',
              'sha3_512',
              'shake_128',
              'shake_256',
            ],
          },
          {
            name: 'remote_api_tokens',
            description:
              'List of regex/token pairs for model downloads. If URL matches regex, token is used as Bearer token.',
            type: 'Input',
          },
          {
            name: 'scan_models_on_startup',
            description:
              'Scan models directory on startup to register orphaned models. Typically only used with use_memory_db for testing.',
            type: 'CheckBox',
          },
        ],
      },
    ],
  },
];

export default invokeArguments;
