import {ArgumentsData} from '../../../../../src/cross/types/plugins/module';

const oobaboogaArguments: ArgumentsData = [
  {
    category: 'Command Line Arguments',
    sections: [
      {
        section: 'Basic settings',
        items: [
          {
            name: '--multi-user',
            description:
              'Multi-user mode. Chat histories are not saved or automatically loaded.' +
              ' Warning: this is likely not safe for sharing publicly.',
            type: 'CheckBox',
          },
          {
            name: '--character',
            description: 'The name of the character to load in chat mode by default.',
            type: 'Input',
          },
          {
            name: '--model',
            description: 'Name of the model to load by default.',
            type: 'Input',
          },
          {
            name: '--lora',
            description:
              'The list of LoRAs to load. If you want to load more than one LoRA, write the names separated by spaces.',
            type: 'Input',
          },
          {
            name: '--model-dir',
            description: 'Path to directory with all the models.',
            type: 'Directory',
            defaultValue: 'models/',
          },
          {
            name: '--lora-dir',
            description: 'Path to directory with all the loras.',
            type: 'Directory',
            defaultValue: 'loras/',
          },
          {
            name: '--model-menu',
            description: 'Show a model menu in the terminal when the web UI is first launched.',
            type: 'CheckBox',
          },
          {
            name: '--settings',
            description:
              'Load the default interface settings from this yaml file. See settings-template.yaml' +
              ' for an example. If you create a file called settings.yaml, this file will be loaded' +
              ' by default without the need to use the --settings flag.',
            type: 'File',
          },
          {
            name: '--extensions',
            description:
              'The list of extensions to load. If you want to load more than one extension, write ' +
              'the names separated by spaces.',
            type: 'Input',
          },
          {
            name: '--verbose',
            description: 'Print the prompts to the terminal.',
            type: 'CheckBox',
          },
          {
            name: '--idle-timeout',
            description:
              'Unload model after this many minutes of inactivity. It will be automatically' +
              ' reloaded when you try to use it again.',
            type: 'Input',
            defaultValue: '0',
          },
        ],
      },
      {
        section: 'Model loader',
        items: [
          {
            name: '--loader',
            description:
              'Choose the model loader manually, otherwise, it will get autodetected. Valid options:' +
              ' Transformers, llama.cpp, llamacpp_HF, ExLlamav2_HF, ExLlamav2, AutoGPTQ, AutoAWQ.',
            type: 'DropDown',
            values: ['Transformers', 'llama.cpp', 'llamacpp_HF', 'ExLlamav2_HF', 'ExLlamav2', 'AutoGPTQ', 'AutoAWQ'],
          },
        ],
      },
      {
        section: 'Transformers/Accelerate',
        items: [
          {
            name: '--cpu',
            description: 'Use the CPU to generate text. Warning: Training on CPU is extremely slow.',
            type: 'CheckBox',
          },
          {
            name: '--auto-devices',
            description: 'Automatically split the model across the available GPU(s) and CPU.',
            type: 'CheckBox',
          },
          {
            name: '--gpu-memory',
            description:
              'Maximum GPU memory in GiB to be allocated per GPU. Example: --gpu-memory 10 for a' +
              ' single GPU, --gpu-memory 10 5 for two GPUs. You can also set values in MiB like --gpu-memory 3500MiB.',
            type: 'Input',
          },
          {
            name: '--cpu-memory',
            description: 'Maximum CPU memory in GiB to allocate for offloaded weights. Same as above.',
            type: 'Input',
          },
          {
            name: '--disk',
            description:
              'If the model is too large for your GPU(s) and CPU combined, send the remaining layers to the disk.',
            type: 'CheckBox',
          },
          {
            name: '--disk-cache-dir',
            description: 'Directory to save the disk cache to. Defaults to "cache".',
            type: 'Directory',
            defaultValue: 'cache',
          },
          {
            name: '--load-in-8bit',
            description: 'Load the model with 8-bit precision (using bitsandbytes).',
            type: 'CheckBox',
          },
          {
            name: '--bf16',
            description: 'Load the model with bfloat16 precision. Requires NVIDIA Ampere GPU.',
            type: 'CheckBox',
          },
          {
            name: '--no-cache',
            description:
              'Set use_cache to False while generating text. This reduces VRAM usage slightly,' +
              ' but it comes at a performance cost.',
            type: 'CheckBox',
          },
          {
            name: '--trust-remote-code',
            description: 'Set trust_remote_code=True while loading the model. Necessary for some models.',
            type: 'CheckBox',
          },
          {
            name: '--force-safetensors',
            description: 'Set use_safetensors=True while loading the model. This prevents arbitrary code execution.',
            type: 'CheckBox',
          },
          {
            name: '--no_use_fast',
            description:
              "Set use_fast=False while loading the tokenizer (it's True by default). Use this if you" +
              ' have any problems related to use_fast.',
            type: 'CheckBox',
          },
          {
            name: '--use_flash_attention_2',
            description: 'Set use_flash_attention_2=True while loading the model.',
            type: 'CheckBox',
          },
          {
            name: '--use_eager_attention',
            description: 'Set attn_implementation= eager while loading the model.',
            type: 'CheckBox',
          },
          {
            name: '--attn-implementation',
            description: 'Attention implementation. Valid options: sdpa, eager, flash_attention_2.',
            type: 'DropDown',
            values: ['sdpa', 'eager', 'flash_attention_2'],
            defaultValue: 'sdpa',
          },
        ],
      },
      {
        section: 'bitsandbytes 4-bit',
        items: [
          {
            name: '--load-in-4bit',
            description: 'Load the model with 4-bit precision (using bitsandbytes).',
            type: 'CheckBox',
          },
          {
            name: '--use_double_quant',
            description: 'use_double_quant for 4-bit.',
            type: 'CheckBox',
          },
          {
            name: '--compute_dtype',
            description: 'compute dtype for 4-bit. Valid options: bfloat16, float16, float32.',
            type: 'DropDown',
            values: ['bfloat16', 'float16', 'float32'],
            defaultValue: 'float16',
          },
          {
            name: '--quant_type',
            description: 'quant_type for 4-bit. Valid options: nf4, fp4.',
            type: 'DropDown',
            values: ['nf4', 'fp4'],
            defaultValue: 'nf4',
          },
        ],
      },
      {
        section: 'llama.cpp',
        items: [
          {
            name: '--flash-attn',
            description: 'Use flash-attention.',
            type: 'CheckBox',
          },
          {
            name: '--tensorcores',
            description:
              'NVIDIA only: use llama-cpp-python compiled with tensor cores support.' +
              ' This may increase performance on newer cards.',
            type: 'CheckBox',
          },
          {
            name: '--n_ctx',
            description: 'Size of the prompt context.',
            type: 'Input',
            defaultValue: '2048',
          },
          {
            name: '--threads',
            description: 'Number of threads to use.',
            type: 'Input',
            defaultValue: '0',
          },
          {
            name: '--threads-batch',
            description: 'Number of threads to use for batches/prompt processing.',
            type: 'Input',
            defaultValue: '0',
          },
          {
            name: '--no_mul_mat_q',
            description: 'Disable the mulmat kernels.',
            type: 'CheckBox',
          },
          {
            name: '--n_batch',
            description: 'Maximum number of prompt tokens to batch together when calling llama_eval.',
            type: 'Input',
            defaultValue: '512',
          },
          {
            name: '--no-mmap',
            description: 'Prevent mmap from being used.',
            type: 'CheckBox',
          },
          {
            name: '--mlock',
            description: 'Force the system to keep the model in RAM.',
            type: 'CheckBox',
          },
          {
            name: '--n-gpu-layers',
            description: 'Number of layers to offload to the GPU.',
            type: 'Input',
            defaultValue: '0',
          },
          {
            name: '--tensor_split',
            description: 'Split the model across multiple GPUs. Comma-separated list of proportions. Example: 60,40.',
            type: 'Input',
          },
          {
            name: '--numa',
            description: 'Activate NUMA task allocation for llama.cpp.',
            type: 'CheckBox',
          },
          {
            name: '--logits_all',
            description:
              'Needs to be set for perplexity evaluation to work. Otherwise, ignore it, as it makes' +
              ' prompt processing slower.',
            type: 'CheckBox',
          },
          {
            name: '--no_offload_kqv',
            description: 'Do not offload the K, Q, V to the GPU. This saves VRAM but reduces the performance.',
            type: 'CheckBox',
          },
          {
            name: '--cache-capacity',
            description:
              'Maximum cache capacity (llama-cpp-python). Examples: 2000MiB, 2GiB. When provided' +
              ' without units, bytes will be assumed.',
            type: 'Input',
          },
          {
            name: '--row_split',
            description: 'Split the model by rows across GPUs. This may improve multi-gpu performance.',
            type: 'CheckBox',
          },
          {
            name: '--streaming-llm',
            description:
              'Activate StreamingLLM to avoid re-evaluating the entire prompt when old messages are removed.',
            type: 'CheckBox',
          },
          {
            name: '--attention-sink-size',
            description:
              'StreamingLLM: number of sink tokens. Only used if the trimmed prompt does not share' +
              ' a prefix with the old prompt.',
            type: 'Input',
            defaultValue: '5',
          },
          {
            name: '--tokenizer-dir',
            description:
              'Load the tokenizer from this folder. Meant to be used with llamacpp_HF through the command-line.',
            type: 'Directory',
          },
        ],
      },
      {
        section: 'ExLlamaV2',
        items: [
          {
            name: '--gpu-split',
            description:
              'Comma-separated list of VRAM (in GB) to use per GPU device for model layers. Example: 20,7,7.',
            type: 'Input',
          },
          {
            name: '--autosplit',
            description:
              'Autosplit the model tensors across the available GPUs. This causes --gpu-split to be ignored.',
            type: 'CheckBox',
          },
          {
            name: '--max_seq_len',
            description: 'Maximum sequence length.',
            type: 'Input',
            defaultValue: '2048',
          },
          {
            name: '--cfg-cache',
            description:
              'ExLlamav2_HF: Create an additional cache for CFG negative prompts. Necessary ' +
              'to use CFG with that loader.',
            type: 'CheckBox',
          },
          {
            name: '--no_flash_attn',
            description: 'Force flash-attention to not be used.',
            type: 'CheckBox',
          },
          {
            name: '--no_xformers',
            description: 'Force xformers to not be used.',
            type: 'CheckBox',
          },
          {
            name: '--no_sdpa',
            description: 'Force Torch SDPA to not be used.',
            type: 'CheckBox',
          },
          {
            name: '--num_experts_per_token',
            description: 'Number of experts to use for generation. Applies to MoE models like Mixtral.',
            type: 'Input',
            defaultValue: '2',
          },
          {
            name: '--enable_tp',
            description: 'Enable Tensor Parallelism (TP) in ExLlamaV2.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'AutoGPTQ',
        items: [
          {
            name: '--triton',
            description: 'Use triton.',
            type: 'CheckBox',
          },
          {
            name: '--no_inject_fused_mlp',
            description:
              'Triton mode only: disable the use of fused MLP, which will use less' +
              ' VRAM at the cost of slower inference.',
            type: 'CheckBox',
          },
          {
            name: '--no_use_cuda_fp16',
            description: 'This can make models faster on some systems.',
            type: 'CheckBox',
          },
          {
            name: '--desc_act',
            description:
              'For models that do not have a quantize_config.json, this parameter is used to define' +
              ' whether to set desc_act or not in BaseQuantizeConfig.',
            type: 'CheckBox',
          },
          {
            name: '--disable_exllama',
            description: 'Disable ExLlama kernel, which can improve inference speed on some systems.',
            type: 'CheckBox',
          },
          {
            name: '--disable_exllamav2',
            description: 'Disable ExLlamav2 kernel.',
            type: 'CheckBox',
          },
          {
            name: '--wbits',
            description: 'Load a pre-quantized model with specified precision in bits. 2, 3, 4 and 8 are supported.',
            type: 'Input',
            defaultValue: '0',
          },
          {
            name: '--groupsize',
            description: 'Group size.',
            type: 'Input',
            defaultValue: '-1',
          },
        ],
      },
      {
        section: 'HQQ',
        items: [
          {
            name: '--hqq-backend',
            description: 'Backend for the HQQ loader. Valid options: PYTORCH, PYTORCH_COMPILE, ATEN.',
            type: 'DropDown',
            values: ['PYTORCH', 'PYTORCH_COMPILE', 'ATEN'],
            defaultValue: 'PYTORCH_COMPILE',
          },
        ],
      },
      {
        section: 'TensorRT-LLM',
        items: [
          {
            name: '--cpp-runner',
            description:
              "Use the ModelRunnerCpp runner, which is faster than the default ModelRunner but doesn't support streaming yet.",
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Cache',
        items: [
          {
            name: '--cache_type',
            description:
              'KV cache type; valid options: llama.cpp - fp16, q8_0, q4_0; ExLlamaV2 - fp16, fp8, q8, q6, q4.',
            type: 'Input',
            defaultValue: 'fp16',
          },
        ],
      },
      {
        section: 'DeepSpeed',
        items: [
          {
            name: '--deepspeed',
            description: 'Enable the use of DeepSpeed ZeRO-3 for inference via the Transformers integration.',
            type: 'CheckBox',
          },
          {
            name: '--nvme-offload-dir',
            description: 'DeepSpeed: Directory to use for ZeRO-3 NVME offloading.',
            type: 'Directory',
          },
          {
            name: '--local_rank',
            description: 'DeepSpeed: Optional argument for distributed setups.',
            type: 'Input',
            defaultValue: '0',
          },
        ],
      },
      {
        section: 'RoPE',
        items: [
          {
            name: '--alpha_value',
            description:
              'Positional embeddings alpha factor for NTK RoPE scaling. Use either this or compress_pos_emb, not both.',
            type: 'Input',
            defaultValue: '1',
          },
          {
            name: '--rope_freq_base',
            description:
              'If greater than 0, will be used instead of alpha_value. Those two are related by' +
              ' rope_freq_base = 10000 * alpha_value ^ (64 / 63).',
            type: 'Input',
            defaultValue: '0',
          },
          {
            name: '--compress_pos_emb',
            description:
              'Positional embeddings compression factor. Should be set to (context length) / ' +
              "(model's original context length). Equal to 1/rope_freq_scale.",
            type: 'Input',
            defaultValue: '1',
          },
        ],
      },
      {
        section: 'Gradio',
        items: [
          {
            name: '--listen',
            description: 'Make the web UI reachable from your local network.',
            type: 'CheckBox',
          },
          {
            name: '--listen-port',
            description: 'The listening port that the server will use.',
            type: 'Input',
          },
          {
            name: '--listen-host',
            description: 'The hostname that the server will use.',
            type: 'Input',
          },
          {
            name: '--share',
            description: 'Create a public URL. This is useful for running the web UI on Google Colab or similar.',
            type: 'CheckBox',
          },
          {
            name: '--auto-launch',
            description: 'Open the web UI in the default browser upon launch.',
            type: 'CheckBox',
          },
          {
            name: '--gradio-auth',
            description:
              'Set Gradio authentication password in the format "username:password". Multiple credentials' +
              ' can also be supplied with "u1:p1,u2:p2,u3:p3".',
            type: 'Input',
          },
          {
            name: '--gradio-auth-path',
            description:
              'Set the Gradio authentication file path. The file should contain one or more user:password' +
              ' pairs in the same format as above.',
            type: 'File',
          },
          {
            name: '--ssl-keyfile',
            description: 'The path to the SSL certificate key file.',
            type: 'File',
          },
          {
            name: '--ssl-certfile',
            description: 'The path to the SSL certificate cert file.',
            type: 'File',
          },
          {
            name: '--subpath',
            description: 'Customize the subpath for gradio, use with reverse proxy',
            type: 'Input',
          },
          {
            name: '--old-colors',
            description: 'Use the legacy Gradio colors, before the December/2024 update.',
            type: 'CheckBox',
          },
          {
            name: '--portable',
            description: 'Hide features not available in portable mode like training.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'API',
        items: [
          {
            name: '--api',
            description: 'Enable the API extension.',
            type: 'CheckBox',
          },
          {
            name: '--public-api',
            description: 'Create a public URL for the API using Cloudfare.',
            type: 'CheckBox',
          },
          {
            name: '--public-api-id',
            description: 'Tunnel ID for named Cloudflare Tunnel. Use together with public-api option.',
            type: 'Input',
          },
          {
            name: '--api-port',
            description: 'The listening port for the API.',
            type: 'Input',
            defaultValue: '5000',
          },
          {
            name: '--api-key',
            description: 'API authentication key.',
            type: 'Input',
          },
          {
            name: '--admin-key',
            description:
              'API authentication key for admin tasks like loading and unloading models. If not set,' +
              ' will be the same as --api-key.',
            type: 'Input',
          },
          {
            name: '--nowebui',
            description: 'Do not launch the Gradio UI. Useful for launching the API in standalone mode.',
            type: 'CheckBox',
          },
          {
            name: '--api-enable-ipv6',
            description: 'Enable IPv6 for the API',
            type: 'CheckBox',
          },
          {
            name: '--api-disable-ipv4',
            description: 'Disable IPv4 for the API',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Multimodal',
        items: [
          {
            name: '--multimodal-pipeline',
            description: 'The multimodal pipeline to use. Examples: llava-7b, llava-13b.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Context and cache',
        items: [
          {
            name: '--ctx-size',
            description: 'Context size in tokens.',
            type: 'Input',
            defaultValue: '8192',
          },
          {
            name: '--cache-type',
            description:
              'KV cache type; valid options: llama.cpp - fp16, q8_0, q4_0; ExLlamaV2 - fp16, fp8, q8, q6, q4;' +
              ' ExLlamaV3 - fp16, q2 to q8 (can specify k_bits and v_bits separately, e.g. q4_q8).',
            type: 'Input',
            defaultValue: 'fp16',
          },
        ],
      },
      {
        section: 'Speculative decoding',
        items: [
          {
            name: '--model-draft',
            description: 'Path to the draft model for speculative decoding.',
            type: 'File',
          },
          {
            name: '--draft-max',
            description: 'Number of tokens to draft for speculative decoding.',
            type: 'Input',
            defaultValue: '4',
          },
          {
            name: '--gpu-layers-draft',
            description: 'Number of layers to offload to the GPU for the draft model.',
            type: 'Input',
            defaultValue: '256',
          },
          {
            name: '--device-draft',
            description: 'Comma-separated list of devices to use for offloading the draft model. Example: CUDA0,CUDA1',
            type: 'Input',
          },
          {
            name: '--ctx-size-draft',
            description: 'Size of the prompt context for the draft model. If 0, uses the same as the main model.',
            type: 'Input',
            defaultValue: '0',
          },
        ],
      },
      {
        section: 'ExLlamaV3',
        items: [
          {
            name: '--enable-tp',
            description: 'Enable Tensor Parallelism (TP) to split the model across GPUs.',
            type: 'CheckBox',
          },
          {
            name: '--tp-backend',
            description: 'The backend for tensor parallelism. Valid options: native, nccl. Default: native.',
            type: 'DropDown',
            values: ['native', 'nccl'],
            defaultValue: 'native',
          },
        ],
      },
    ],
  },
];

export default oobaboogaArguments;
