import {ArgumentsData} from '../../types';

const invokeArguments: ArgumentsData = [
  {
    category: 'Subset Settings',
    items: [
      {
        name: '--root',
        description: 'Specify the root directory',
        type: 'Directory',
      },
      {
        name: '--config',
        description: 'Override the default "invokeai.yaml" file location',
        type: 'File',
      },
    ],
  },
  {
    category: 'Command Line Arguments',
    items: [
      {
        name: 'host',
        description: 'IP address to bind to. Use 0.0.0.0 to serve to your local network.',
        type: 'Input',
      },
      {
        name: 'port',
        description: 'Port to bind to.',
        type: 'Input',
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
      },
      {
        name: 'allow_headers',
        description: 'Headers allowed for CORS.',
        type: 'Input',
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
      {
        name: 'log_tokenization',
        description: 'Enable logging of parsed prompt tokens.',
        type: 'CheckBox',
      },
      {
        name: 'patchmatch',
        description: 'Enable patchmatch inpaint code.',
        type: 'CheckBox',
      },
      {
        name: 'models_dir',
        description: 'Path to the models directory.',
        type: 'Directory',
      },
      {
        name: 'convert_cache_dir',
        description:
          'Path to the converted models cache directory (DEPRECATED, but do not delete because it is' +
          ' needed for migration from previous versions).',
        type: 'Directory',
      },
      {
        name: 'download_cache_dir',
        description: 'Path to the directory that contains dynamically downloaded models.',
        type: 'Directory',
      },
      {
        name: 'legacy_conf_dir',
        description: 'Path to directory of legacy checkpoint config files.',
        type: 'Directory',
      },
      {
        name: 'db_dir',
        description: 'Path to InvokeAI databases directory.',
        type: 'Directory',
      },
      {
        name: 'outputs_dir',
        description: 'Path to directory for outputs.',
        type: 'Directory',
      },
      {
        name: 'custom_nodes_dir',
        description: 'Path to directory for custom nodes.',
        type: 'Directory',
      },
      {
        name: 'style_presets_dir',
        description: 'Path to directory for style presets.',
        type: 'Directory',
      },
      {
        name: 'log_handlers',
        description: 'Log handler. Valid options are "console", "file=", "syslog=path|address:host:port", "http=".',
        type: 'Input',
      },
      {
        name: 'log_format',
        description:
          'Log format. Use "plain" for text-only, "color" for colorized output, "legacy" for 2.3-style' +
          ' logging and "syslog" for syslog-style.',
        type: 'DropDown',
        values: ['plain', 'color', 'syslog', 'legacy'],
      },
      {
        name: 'log_level',
        description: 'Emit logging messages at this level or higher.',
        type: 'DropDown',
        values: ['debug', 'info', 'warning', 'error', 'critical'],
      },
      {
        name: 'log_sql',
        description: 'Log SQL queries. log_level must be debug for this to do anything. Extremely verbose.',
        type: 'CheckBox',
      },
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
      },
      {
        name: 'ram',
        description: 'Maximum memory amount used by memory model cache for rapid switching (GB).',
        type: 'Input',
      },
      {
        name: 'vram',
        description: 'Amount of VRAM reserved for model storage (GB).',
        type: 'Input',
      },
      {
        name: 'lazy_offload',
        description: 'Keep models in VRAM until their space is needed.',
        type: 'CheckBox',
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
        name: 'device',
        description:
          'Preferred execution device. auto will choose the device depending on the hardware platform' +
          ' and the installed torch capabilities.',
        type: 'DropDown',
        values: ['auto', 'cpu', 'cuda', 'cuda:1', 'mps'],
      },
      {
        name: 'precision',
        description:
          'Floating point precision. float16 will consume half the memory of float32 but produce slightly' +
          ' lower-quality images. The auto setting will guess the proper precision based on your video' +
          ' card and operating system.',
        type: 'DropDown',
        values: ['auto', 'float16', 'bfloat16', 'float32'],
      },
      {
        name: 'sequential_guidance',
        description: 'Whether to calculate guidance in serial instead of in parallel, lowering memory requirements.',
        type: 'CheckBox',
      },
      {
        name: 'attention_type',
        description: 'Attention type.',
        type: 'DropDown',
        values: ['auto', 'normal', 'xformers', 'sliced', 'torch-sdp'],
      },
      {
        name: 'attention_slice_size',
        description: 'Slice size, valid when attention_type=="sliced".',
        type: 'DropDown',
        values: ['auto', 'balanced', 'max', '1', '2', '3', '4', '5', '6', '7', '8'],
      },
      {
        name: 'force_tiled_decode',
        description: 'Whether to enable tiled VAE decode (reduces memory consumption with some performance penalty).',
        type: 'CheckBox',
      },
      {
        name: 'pil_compress_level',
        description:
          'The compress_level setting of PIL.Image.save(), used for PNG encoding. All settings are lossless.' +
          ' 0 = no compression, 1 = fastest with slightly larger filesize, 9 = slowest with smallest filesize.' +
          ' 1 is typically the best setting.',
        type: 'Input',
      },
      {
        name: 'max_queue_size',
        description: 'Maximum number of items in the session queue.',
        type: 'Input',
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
      },
      {
        name: 'hashing_algorithm',
        description: 'Model hashing algorithm for model installs.',
        type: 'DropDown',
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
          'List of regular expression and token pairs used when downloading models from URLs.' +
          ' The download URL is tested against the regex, and if it matches, the token is provided in as a Bearer token.',
        type: 'Input',
      },
      {
        name: 'scan_models_on_startup',
        description:
          'Scan the models directory on startup, registering orphaned models. This is typically only used' +
          ' in conjunction with use_memory_db for testing purposes.',
        type: 'CheckBox',
      },
    ],
  },
];

export default invokeArguments;
