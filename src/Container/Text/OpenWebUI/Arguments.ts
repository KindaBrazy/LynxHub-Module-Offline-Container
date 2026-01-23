// noinspection SpellCheckingInspection
/* eslint max-len: 0 */

import {ArgumentsData} from '../../../../../src/common/types/plugins/modules';

const openArguments: ArgumentsData = [
  {
    category: 'App/Backend',
    sections: [
      {
        section: 'General',
        items: [
          {
            name: 'WEBUI_URL',
            description:
              'Specifies the URL where your Open WebUI installation is reachable. Needed for search engine support and OAuth/SSO.',
            type: 'Input',
            defaultValue: 'http://localhost:3000',
          },
          {
            name: 'ENABLE_SIGNUP',
            description: 'Toggles user account creation.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_SIGNUP_PASSWORD_CONFIRMATION',
            description:
              'If set to True, a "Confirm Password" field is added to the sign-up page to help users avoid typos when creating their password.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_LOGIN_FORM',
            description:
              'Toggles email, password, sign-in and "or" (only when ENABLE_OAUTH_SIGNUP is set to True) elements.',
            type: 'CheckBox',
          },
          {
            name: 'DEFAULT_LOCALE',
            description: 'Sets the default locale for the application.',
            type: 'Input',
            defaultValue: 'en',
          },
          {
            name: 'DEFAULT_MODELS',
            description: 'Sets a default Language Model.',
            type: 'Input',
          },
          {
            name: 'DEFAULT_USER_ROLE',
            description: 'Sets the default role assigned to new users.',
            type: 'DropDown',
            values: ['pending', 'user', 'admin'],
            defaultValue: 'pending',
          },
          {
            name: 'PENDING_USER_OVERLAY_TITLE',
            description: 'Sets a custom title for the pending user overlay.',
            type: 'Input',
          },
          {
            name: 'PENDING_USER_OVERLAY_CONTENT',
            description: 'Sets a custom text content for the pending user overlay.',
            type: 'Input',
          },
          {
            name: 'ENABLE_CHANNELS',
            description: 'Enables or disables channel support.',
            type: 'CheckBox',
          },
          {
            name: 'WEBHOOK_URL',
            description: 'Sets a webhook for integration with Discord/Slack/Microsoft Teams.',
            type: 'Input',
          },
          {
            name: 'ENABLE_ADMIN_EXPORT',
            description:
              'Controls whether admins can export data, chats and the database in the admin panel. Database exports only work for SQLite databases for now.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_ADMIN_CHAT_ACCESS',
            description:
              "Enables admin users to directly access the chats of other users. When disabled, admins can no longer accesss user's chats in the admin panel. If you disable this, consider disabling `ENABLE_ADMIN_EXPORT` too, if you are using SQLite, as the exports also contain user chats.",
            type: 'CheckBox',
          },
          {
            name: 'BYPASS_ADMIN_ACCESS_CONTROL',
            description:
              'When disabled, admin users are treated like regular users for workspace access (models, knowledge, prompts and tools) and only see items they have explicit permission to access through the existing access control system. This also applies to the visibility of models in the model selector - admins will be treated as regular users: base models and custom models they do not have explicit permission to access, will be hidden. If set to `True` (Default), admins have access to all created items in the workspace area and all models in the model selector, regardless of access permissions.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_USER_WEBHOOKS',
            description: 'Enables or disables user webhooks.',
            type: 'CheckBox',
          },
          {
            name: 'RESPONSE_WATERMARK',
            description:
              'Sets a custom text that will be included when you copy a message in the chat. E.g. `"This text is AI generated"` -> will add "This text is AI generated" to every message, when copied.',
            type: 'Input',
          },
          {
            name: 'THREAD_POOL_SIZE',
            description:
              'Sets the thread pool size for FastAPI/AnyIO blocking calls. By default (when set to `0`) FastAPI/AnyIO use `40` threads. In case of large instances and many concurrent users, it may be needed to increase `THREAD_POOL_SIZE` to prevent blocking.',
            type: 'Input',
            defaultValue: 0,
          },
          {
            name: 'MODELS_CACHE_TTL',
            description:
              'Sets the cache time-to-live in seconds for model list responses from OpenAI and Ollama endpoints. This reduces API calls by caching the available models list for the specified duration. Set to empty string to disable caching entirely.',
            type: 'Input',
            defaultValue: 1,
          },
          {
            name: 'SHOW_ADMIN_DETAILS',
            description: 'Toggles whether to show admin user details in the interface.',
            type: 'CheckBox',
          },
          {
            name: 'ADMIN_EMAIL',
            description: 'Sets the admin email shown by `SHOW_ADMIN_DETAILS`',
            type: 'Input',
          },
          {
            name: 'ENV',
            description: 'Environment setting.',
            type: 'DropDown',
            values: ['dev', 'prod'],
            defaultValue: 'dev',
          },
          {
            name: 'ENABLE_PERSISTENT_CONFIG',
            description: 'If set to `False`, all `PersistentConfig` variables are treated as regular variables.',
            type: 'CheckBox',
          },
          {
            name: 'CUSTOM_NAME',
            description: 'Sets `WEBUI_NAME` but polls **api.openwebui.com** for metadata.',
            type: 'Input',
          },
          {
            name: 'WEBUI_NAME',
            description: 'Sets the main WebUI name. Appends `(Open WebUI)` if overridden.',
            type: 'Input',
            defaultValue: 'Open WebUI',
          },
          {
            name: 'PORT',
            description: 'Sets the port to run Open WebUI from.',
            type: 'Input',
            defaultValue: 8080,
          },
          {
            name: 'ENABLE_REALTIME_CHAT_SAVE',
            description:
              "When enabled, the system saves each chunk of streamed chat data to the database in real time to ensure maximum data persistency. This feature provides robust data recovery and allows accurate session tracking. However, the tradeoff is increased latency, as saving to the database introduces a delay. Disabling this feature can improve performance and reduce delays, but it risks potential data loss in the event of a system failure or crash. Use based on your application's requirements and acceptable tradeoffs.",
            type: 'CheckBox',
          },
          {
            name: 'CHAT_RESPONSE_STREAM_DELTA_CHUNK_SIZE',
            description:
              "Sets a system-wide minimum value for the number of tokens to batch together before sending them to the client during a streaming response. This allows an administrator to enforce a baseline level of performance and stability across the entire system by preventing excessively small chunk sizes that can cause high CPU load. The final chunk size used for a response will be the highest value set among this global variable, the model's advanced parameters, or the per-chat settings. The default is 1, which applies no minimum batching at the global level.",
            type: 'Input',
            defaultValue: 1,
          },
          {
            name: 'BYPASS_MODEL_ACCESS_CONTROL',
            description:
              "Bypasses model access control. When set to `true`, all users (and admins alike) will have access to all models, regardless of the model's privacy setting (Private, Public, Shared with certain groups). This is useful for smaller or individual Open WebUI installations where model access restrictions may not be needed.",
            type: 'CheckBox',
          },
          {
            name: 'WEBUI_BUILD_HASH',
            description: 'Used for identifying the Git SHA of the build for releases.',
            type: 'Input',
            defaultValue: 'dev-build',
          },
          {
            name: 'WEBUI_BANNERS',
            description: 'List of banners to show to users.',
            type: 'Input',
          },
          {
            name: 'USE_CUDA_DOCKER',
            description:
              'Builds the Docker image with NVIDIA CUDA support. Enables GPU acceleration for local Whisper and embeddings.',
            type: 'CheckBox',
          },
          {
            name: 'EXTERNAL_PWA_MANIFEST_URL',
            description:
              'When defined as a fully qualified URL (e.g., https://path/to/manifest.webmanifest), requests sent to /manifest.json will use the external manifest file. When not defined, the default manifest.json file will be used.',
            type: 'Input',
          },
          {
            name: 'ENABLE_TITLE_GENERATION',
            description: 'Enables or disables chat title generation.',
            type: 'CheckBox',
          },
          {
            name: 'LICENSE_KEY',
            description: 'Specifies the license key to use (for Enterprise users only).',
            type: 'Input',
          },
          {
            name: 'SSL_ASSERT_FINGERPRINT',
            description: 'Specifies the SSL assert fingerprint to use.',
            type: 'Input',
          },
          {
            name: 'DEFAULT_PROMPT_SUGGESTIONS',
            description: 'List of prompt suggestions.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'AIOHTTP Client',
        items: [
          {
            name: 'AIOHTTP_CLIENT_TIMEOUT',
            description:
              'Specifies the timeout duration in seconds for the AIOHTTP client. This impacts things such as connections to Ollama and OpenAI endpoints.',
            type: 'Input',
            defaultValue: 300,
          },
          {
            name: 'AIOHTTP_CLIENT_TIMEOUT_MODEL_LIST',
            description:
              'Sets the timeout in seconds for fetching the model list. This can be useful in cases where network latency requires a longer timeout duration to successfully retrieve the model list.',
            type: 'Input',
            defaultValue: 10,
          },
          {
            name: 'AIOHTTP_CLIENT_TIMEOUT_OPENAI_MODEL_LIST',
            description:
              'Sets the timeout in seconds for fetching the model list. This can be useful in cases where network latency requires a longer timeout duration to successfully retrieve the model list.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Directories',
        items: [
          {
            name: 'DATA_DIR',
            description:
              'Specifies the base directory for data storage, including uploads, cache, vector database, etc.',
            type: 'Input',
            defaultValue: './data',
          },
          {
            name: 'FONTS_DIR',
            description: 'Specifies the directory for fonts.',
            type: 'Input',
          },
          {
            name: 'FRONTEND_BUILD_DIR',
            description: 'Specifies the location of the built frontend files.',
            type: 'Input',
            defaultValue: '../build',
          },
          {
            name: 'STATIC_DIR',
            description: 'Specifies the directory for static files, such as the favicon.',
            type: 'Input',
            defaultValue: './static',
          },
        ],
      },
      {
        section: 'Ollama',
        items: [
          {
            name: 'ENABLE_OLLAMA_API',
            description: 'Enables the use of Ollama APIs.',
            type: 'CheckBox',
          },
          {
            name: 'OLLAMA_BASE_URL',
            description: 'Configures the Ollama backend URL.',
            type: 'Input',
            defaultValue: 'http://localhost:11434',
          },
          {
            name: 'OLLAMA_BASE_URLS',
            description:
              'Configures load-balanced Ollama backend hosts, separated by ;. Takes precedence over OLLAMA_BASE_URL.',
            type: 'Input',
          },
          {
            name: 'USE_OLLAMA_DOCKER',
            description: 'Builds the Docker image with a bundled Ollama instance.',
            type: 'CheckBox',
          },
          {
            name: 'K8S_FLAG',
            description:
              'If set, assumes Helm chart deployment and sets OLLAMA_BASE_URL to http://ollama-service.open-webui.svc.cluster.local:11434',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'OpenAI',
        items: [
          {
            name: 'ENABLE_OPENAI_API',
            description: 'Enables the use of OpenAI APIs.',
            type: 'CheckBox',
          },
          {
            name: 'OPENAI_API_BASE_URL',
            description: 'Configures the OpenAI base API URL.',
            type: 'Input',
            defaultValue: 'https://api.openai.com/v1',
          },
          {
            name: 'OPENAI_API_BASE_URLS',
            description: 'Supports balanced OpenAI base API URLs, semicolon-separated.',
            type: 'Input',
          },
          {
            name: 'OPENAI_API_KEY',
            description: 'Sets the OpenAI API key.',
            type: 'Input',
          },
          {
            name: 'OPENAI_API_KEYS',
            description: 'Supports multiple OpenAI API keys, semicolon-separated.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Tasks',
        items: [
          {
            name: 'TASK_MODEL',
            description:
              'The default model to use for tasks such as title and web search query generation when using Ollama models.',
            type: 'Input',
          },
          {
            name: 'TASK_MODEL_EXTERNAL',
            description:
              'The default model to use for tasks such as title and web search query generation when using OpenAI-compatible endpoints.',
            type: 'Input',
          },
          {
            name: 'TITLE_GENERATION_PROMPT_TEMPLATE',
            description: 'Prompt to use when generating chat titles.',
            type: 'Input',
          },
          {
            name: 'ENABLE_FOLLOW_UP_GENERATION',
            description: 'Enables or disables follow up generation.',
            type: 'CheckBox',
          },
          {
            name: 'FOLLOW_UP_GENERATION_PROMPT_TEMPLATE',
            description: 'Prompt to use for generating several relevant follow-up questions.',
            type: 'Input',
          },
          {
            name: 'TOOLS_FUNCTION_CALLING_PROMPT_TEMPLATE',
            description: 'Prompt to use when calling tools.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Code Execution',
        items: [
          {
            name: 'ENABLE_CODE_EXECUTION',
            description: 'Enables or disables code execution.',
            type: 'CheckBox',
          },
          {
            name: 'CODE_EXECUTION_ENGINE',
            description: 'Specifies the code execution engine to use.',
            type: 'Input',
            defaultValue: 'pyodide',
          },
          {
            name: 'CODE_EXECUTION_JUPYTER_URL',
            description: 'Specifies the Jupyter URL to use for code execution.',
            type: 'Input',
          },
          {
            name: 'CODE_EXECUTION_JUPYTER_AUTH',
            description: 'Specifies the Jupyter authentication method to use for code execution.',
            type: 'Input',
          },
          {
            name: 'CODE_EXECUTION_JUPYTER_AUTH_TOKEN',
            description: 'Specifies the Jupyter authentication token to use for code execution.',
            type: 'Input',
          },
          {
            name: 'CODE_EXECUTION_JUPYTER_AUTH_PASSWORD',
            description: 'Specifies the Jupyter authentication password to use for code execution.',
            type: 'Input',
          },
          {
            name: 'CODE_EXECUTION_JUPYTER_TIMEOUT',
            description: 'Specifies the timeout for Jupyter code execution.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Code Interpreter',
        items: [
          {
            name: 'ENABLE_CODE_INTERPRETER',
            description: 'Enables or disables code interpreter.',
            type: 'CheckBox',
          },
          {
            name: 'CODE_INTERPRETER_ENGINE',
            description: 'Specifies the code interpreter engine to use.',
            type: 'Input',
            defaultValue: 'pyodide',
          },
          {
            name: 'CODE_INTERPRETER_BLACKLISTED_MODULES',
            description:
              'Specifies a comma-separated list of Python modules that are blacklisted and cannot be imported or used within the code interpreter. This enhances security by preventing access to potentially sensitive or system-level functionalities.',
            type: 'Input',
          },
          {
            name: 'CODE_INTERPRETER_PROMPT_TEMPLATE',
            description: 'Specifies the prompt template to use for code interpreter.',
            type: 'Input',
          },
          {
            name: 'CODE_INTERPRETER_JUPYTER_URL',
            description: 'Specifies the Jupyter URL to use for code interpreter.',
            type: 'Input',
          },
          {
            name: 'CODE_INTERPRETER_JUPYTER_AUTH',
            description: 'Specifies the Jupyter authentication method to use for code interpreter.',
            type: 'Input',
          },
          {
            name: 'CODE_INTERPRETER_JUPYTER_AUTH_TOKEN',
            description: 'Specifies the Jupyter authentication token to use for code interpreter.',
            type: 'Input',
          },
          {
            name: 'CODE_INTERPRETER_JUPYTER_AUTH_PASSWORD',
            description: 'Specifies the Jupyter authentication password to use for code interpreter.',
            type: 'Input',
          },
          {
            name: 'CODE_INTERPRETER_JUPYTER_TIMEOUT',
            description: 'Specifies the timeout for the Jupyter code interpreter.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Direct Connections (OpenAPI/MCPO Tool Servers)',
        items: [
          {
            name: 'ENABLE_DIRECT_CONNECTIONS',
            description: 'Enables or disables direct connections.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Autocomplete',
        items: [
          {
            name: 'ENABLE_AUTOCOMPLETE_GENERATION',
            description: 'Enables or disables autocomplete generation.',
            type: 'CheckBox',
          },
          {
            name: 'AUTOCOMPLETE_GENERATION_INPUT_MAX_LENGTH',
            description: 'Sets the maximum input length for autocomplete generation.',
            type: 'Input',
            defaultValue: -1,
          },
          {
            name: 'AUTOCOMPLETE_GENERATION_PROMPT_TEMPLATE',
            description: 'Sets the prompt template for autocomplete generation.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Evaluation Arena Model',
        items: [
          {
            name: 'ENABLE_EVALUATION_ARENA_MODELS',
            description: 'Enables or disables evaluation arena models.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_MESSAGE_RATING',
            description: 'Enables message rating feature.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_COMMUNITY_SHARING',
            description: 'Controls whether users are shown the share to community button.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Tags Generation',
        items: [
          {
            name: 'ENABLE_TAGS_GENERATION',
            description: 'Enables or disables tag generation.',
            type: 'CheckBox',
          },
          {
            name: 'TAGS_GENERATION_PROMPT_TEMPLATE',
            description: 'Sets the prompt template for tag generation.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'API Key Endpoint Restrictions',
        items: [
          {
            name: 'ENABLE_API_KEY',
            description: 'Enables API key authentication.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_API_KEY_ENDPOINT_RESTRICTIONS',
            description: 'Enables API key endpoint restrictions for added security and configurability.',
            type: 'CheckBox',
          },
          {
            name: 'API_KEY_ALLOWED_ENDPOINTS',
            description:
              'Specifies a comma-separated list of allowed API endpoints when API key endpoint restrictions are enabled.',
            type: 'Input',
          },
          {
            name: 'JWT_EXPIRES_IN',
            description:
              'Sets the JWT expiration time in seconds. Valid time units: `s`, `m`, `h`, `d`, `w` or `-1` for no expiration.',
            type: 'Input',
            defaultValue: '-1',
          },
        ],
      },
    ],
  },
  {
    category: 'Security Variables',
    items: [
      {
        name: 'ENABLE_FORWARD_USER_INFO_HEADERS',
        description:
          'Forwards user information (name, ID, email, role and chat-id) as X-headers to OpenAI API and Ollama API.',
        type: 'CheckBox',
      },
      {
        name: 'ENABLE_WEB_LOADER_SSL_VERIFICATION',
        description: 'Bypass SSL Verification for RAG on Websites.',
        type: 'CheckBox',
      },
      {
        name: 'WEBUI_SESSION_COOKIE_SAME_SITE',
        description: 'Sets the `SameSite` attribute for session cookies.',
        type: 'DropDown',
        values: ['lax', 'strict', 'none'],
        defaultValue: 'lax',
      },
      {
        name: 'WEBUI_SESSION_COOKIE_SECURE',
        description: 'Sets the `Secure` attribute for session cookies if set to `True`.',
        type: 'CheckBox',
      },
      {
        name: 'WEBUI_AUTH_COOKIE_SAME_SITE',
        description: 'Sets the `SameSite` attribute for auth cookies.',
        type: 'DropDown',
        values: ['lax', 'strict', 'none'],
        defaultValue: 'lax',
      },
      {
        name: 'WEBUI_AUTH_COOKIE_SECURE',
        description: 'Sets the `Secure` attribute for auth cookies if set to `True`.',
        type: 'CheckBox',
      },
      {
        name: 'WEBUI_AUTH',
        description: 'This setting enables or disables authentication.',
        type: 'CheckBox',
      },
      {
        name: 'WEBUI_SECRET_KEY',
        description: 'Overrides the randomly generated string used for JSON Web Token.',
        type: 'Input',
        defaultValue: 't0p-s3cr3t',
      },
      {
        name: 'ENABLE_VERSION_UPDATE_CHECK',
        description:
          'When enabled, the application makes automatic update checks and notifies you about version updates.',
        type: 'CheckBox',
      },
      {
        name: 'OFFLINE_MODE',
        description: "Disables Open WebUI's network connections for update checks and automatic model downloads.",
        type: 'CheckBox',
      },
      {
        name: 'RESET_CONFIG_ON_START',
        description: 'Resets the `config.json` file on startup.',
        type: 'CheckBox',
      },
      {
        name: 'SAFE_MODE',
        description: 'Enables safe mode, which disables potentially unsafe features, deactivating all functions.',
        type: 'CheckBox',
      },
      {
        name: 'CORS_ALLOW_ORIGIN',
        description: 'Sets the allowed origins for Cross-Origin Resource Sharing (CORS).',
        type: 'Input',
        defaultValue: '*',
      },
      {
        name: 'CORS_ALLOW_CUSTOM_SCHEME',
        description:
          'Sets a list of further allowed schemes for Cross-Origin Resource Sharing (CORS). Allows you to specify additional custom URL schemes, beyond the standard `http` and `https`, that are permitted as valid origins for Cross-Origin Resource Sharing (CORS).',
        type: 'Input',
      },
      {
        name: 'RAG_EMBEDDING_MODEL_TRUST_REMOTE_CODE',
        description: 'Determines whether to allow custom models defined on the Hub in their own modeling files.',
        type: 'CheckBox',
      },
      {
        name: 'RAG_RERANKING_MODEL_TRUST_REMOTE_CODE',
        description:
          'Determines whether to allow custom models defined on the Hub in their own. modeling files for reranking.',
        type: 'CheckBox',
      },
      {
        name: 'RAG_EMBEDDING_MODEL_AUTO_UPDATE',
        description: 'Toggles automatic update of the Sentence-Transformer model.',
        type: 'CheckBox',
      },
      {
        name: 'RAG_RERANKING_MODEL_AUTO_UPDATE',
        description: 'Toggles automatic update of the reranking model.',
        type: 'CheckBox',
      },
    ],
  },
  {
    category: 'Vector Database',
    sections: [
      {
        section: 'General',
        items: [
          {
            name: 'VECTOR_DB',
            description:
              'Specifies which vector database system to use. This setting determines which vector storage system will be used for managing embeddings.',
            type: 'DropDown',
            values: [
              'chroma',
              'elasticsearch',
              'milvus',
              'opensearch',
              'pgvector',
              'qdrant',
              'pinecone',
              's3vector',
              'oracle23ai',
            ],
            defaultValue: 'chroma',
          },
        ],
      },
      {
        section: 'ChromaDB',
        items: [
          {
            name: 'CHROMA_TENANT',
            description: 'Sets the tenant for ChromaDB to use for RAG embeddings.',
            type: 'Input',
          },
          {
            name: 'CHROMA_DATABASE',
            description: 'Sets the database in the ChromaDB tenant to use for RAG embeddings.',
            type: 'Input',
          },
          {
            name: 'CHROMA_HTTP_HOST',
            description:
              'Specifies the hostname of a remote ChromaDB Server. Uses a local ChromaDB instance if not set.',
            type: 'Input',
          },
          {
            name: 'CHROMA_HTTP_PORT',
            description: 'Specifies the port of a remote ChromaDB Server.',
            type: 'Input',
            defaultValue: 8000,
          },
          {
            name: 'CHROMA_HTTP_HEADERS',
            description: 'A comma-separated list of HTTP headers to include with every ChromaDB request.',
            type: 'Input',
          },
          {
            name: 'CHROMA_HTTP_SSL',
            description: 'Controls whether or not SSL is used for ChromaDB Server connections.',
            type: 'CheckBox',
          },
          {
            name: 'CHROMA_CLIENT_AUTH_PROVIDER',
            description: 'Specifies an authentication provider for remote ChromaDB Server.',
            type: 'Input',
          },
          {
            name: 'CHROMA_CLIENT_AUTH_CREDENTIALS',
            description: 'Specifies auth credentials for remote ChromaDB Server.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Elasticsearch',
        items: [
          {
            name: 'ELASTICSEARCH_API_KEY',
            description: 'Specifies the Elasticsearch API key.',
            type: 'Input',
          },
          {
            name: 'ELASTICSEARCH_CA_CERTS',
            description: 'Specifies the path to the CA certificates for Elasticsearch.',
            type: 'Input',
          },
          {
            name: 'ELASTICSEARCH_CLOUD_ID',
            description: 'Specifies the Elasticsearch cloud ID.',
            type: 'Input',
          },
          {
            name: 'ELASTICSEARCH_INDEX_PREFIX',
            description: 'Specifies the prefix for the Elasticsearch index.',
            type: 'Input',
            defaultValue: 'open_webui_collections',
          },
          {
            name: 'ELASTICSEARCH_PASSWORD',
            description: 'Specifies the password for Elasticsearch.',
            type: 'Input',
          },
          {
            name: 'ELASTICSEARCH_URL',
            description: 'Specifies the URL for the Elasticsearch instance.',
            type: 'Input',
            defaultValue: 'https://localhost:9200',
          },
          {
            name: 'ELASTICSEARCH_USERNAME',
            description: 'Specifies the username for Elasticsearch.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Milvus',
        items: [
          {
            name: 'MILVUS_URI',
            description:
              'Specifies the URI for connecting to the Milvus vector database. This can point to a local or remote Milvus server based on the deployment configuration.',
            type: 'Input',
            defaultValue: '${DATA_DIR}/vector_db/milvus.db',
          },
          {
            name: 'MILVUS_DB',
            description: 'Specifies the database to connect to within a Milvus instance.',
            type: 'Input',
            defaultValue: 'default',
          },
          {
            name: 'MILVUS_TOKEN',
            description: 'Specifies an optional connection token for Milvus.',
            type: 'Input',
          },
          {
            name: 'MILVUS_INDEX_TYPE',
            description:
              'Specifies the index type to use when creating a new collection in Milvus. `AUTOINDEX` is generally recommended for Milvus standalone. `HNSW` may offer better performance but typically requires a clustered Milvus setup.',
            type: 'DropDown',
            values: ['AUTOINDEX', 'FLAT', 'IVF_FLAT', 'HNSW'],
            defaultValue: 'HNSW',
          },
          {
            name: 'MILVUS_METRIC_TYPE',
            description: 'Specifies the metric type for vector similarity search in Milvus.',
            type: 'DropDown',
            values: ['COSINE', 'IP', 'L2'],
            defaultValue: 'COSINE',
          },
          {
            name: 'MILVUS_HNSW_M',
            description:
              'Specifies the `M` parameter for the HNSW index type in Milvus. This influences the number of bi-directional links created for each new element during construction. Only applicable if `MILVUS_INDEX_TYPE` is `HNSW`.',
            type: 'Input',
            defaultValue: 16,
          },
          {
            name: 'MILVUS_HNSW_EFCONSTRUCTION',
            description:
              'Specifies the `efConstruction` parameter for the HNSW index type in Milvus. This influences the size of the dynamic list for the nearest neighbors during index construction. Only applicable if `MILVUS_INDEX_TYPE` is `HNSW`.',
            type: 'Input',
            defaultValue: 100,
          },
          {
            name: 'MILVUS_IVF_FLAT_NLIST',
            description:
              'Specifies the `nlist` parameter for the IVF_FLAT index type in Milvus. This is the number of cluster units. Only applicable if `MILVUS_INDEX_TYPE` is `IVF_FLAT`.',
            type: 'Input',
            defaultValue: 128,
          },
        ],
      },
      {
        section: 'OpenSearch',
        items: [
          {
            name: 'OPENSEARCH_CERT_VERIFY',
            description: 'Enables or disables OpenSearch certificate verification.',
            type: 'CheckBox',
          },
          {
            name: 'OPENSEARCH_PASSWORD',
            description: 'Sets the password for OpenSearch.',
            type: 'Input',
          },
          {
            name: 'OPENSEARCH_SSL',
            description: 'Enables or disables SSL for OpenSearch.',
            type: 'CheckBox',
          },
          {
            name: 'OPENSEARCH_URI',
            description: 'Sets the URI for OpenSearch.',
            type: 'Input',
            defaultValue: 'https://localhost:9200',
          },
          {
            name: 'OPENSEARCH_USERNAME',
            description: 'Sets the username for OpenSearch.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'PGVector',
        items: [
          {
            name: 'PGVECTOR_DB_URL',
            description: 'Sets the database URL for model storage.',
            type: 'Input',
          },
          {
            name: 'PGVECTOR_INITIALIZE_MAX_VECTOR_LENGTH',
            description: 'Specifies the maximum vector length for PGVector initialization.',
            type: 'Input',
            defaultValue: '1536',
          },
        ],
      },
      {
        section: 'Qdrant',
        items: [
          {
            name: 'QDRANT_API_KEY',
            description: 'Sets the API key for Qdrant.',
            type: 'Input',
          },
          {
            name: 'QDRANT_URI',
            description: 'Sets the URI for Qdrant.',
            type: 'Input',
          },
          {
            name: 'QDRANT_ON_DISK',
            description: 'Enable the usage of memmap(also known as on-disk) storage',
            type: 'CheckBox',
          },
          {
            name: 'QDRANT_PREFER_GRPC',
            description: 'Use gPRC interface whenever possible.',
            type: 'CheckBox',
          },
          {
            name: 'QDRANT_GRPC_PORT',
            description: 'Sets the gRPC port number for Qdrant.',
            type: 'Input',
            defaultValue: 6334,
          },
          {
            name: 'QDRANT_TIMEOUT',
            description:
              'Sets the timeout in seconds for all requests made to the Qdrant server, helping to prevent long-running queries from stalling the application.',
            type: 'Input',
            defaultValue: 5,
          },
          {
            name: 'QDRANT_HNSW_M',
            description:
              'Controls the HNSW (Hierarchical Navigable Small World) index construction. In standard mode, this sets the `m` parameter. In multi-tenancy mode, this value is used for the `payload_m` parameter to build indexes on the payload, as the global `m` is disabled for performance, following Qdrant best practices.',
            type: 'Input',
            defaultValue: 16,
          },
          {
            name: 'ENABLE_QDRANT_MULTITENANCY_MODE',
            description:
              'Enables multitenancy pattern for Qdrant collections management, which significantly reduces RAM usage and computational overhead by consolidating similar vector data structures. Recommend turn on',
            type: 'CheckBox',
          },
          {
            name: 'QDRANT_COLLECTION_PREFIX',
            description:
              'Sets the prefix for Qdrant collection names. Useful for namespacing or isolating collections, especially in multitenancy mode. Changing this value will cause the application to use a different set of collections in Qdrant. Existing collections with a different prefix will not be affected.',
            type: 'Input',
            defaultValue: 'open-webui',
          },
        ],
      },
      {
        section: 'Pinecone',
        items: [
          {
            name: 'PINECONE_API_KEY',
            description: 'Sets the API key used to authenticate with the Pinecone service.',
            type: 'Input',
          },
          {
            name: 'PINECONE_ENVIRONMENT',
            description:
              'Specifies the Pinecone environment to connect to (e.g., `us-west1-gcp`, `gcp-starter`, etc.).',
            type: 'Input',
          },
          {
            name: 'PINECONE_INDEX_NAME',
            description:
              'Defines the name of the Pinecone index that will be used to store and query vector embeddings.',
            type: 'Input',
            defaultValue: 'open-webui-index',
          },
          {
            name: 'PINECONE_DIMENSION',
            description:
              'The dimensionality of the vector embeddings. Must match the dimension expected by the index (commonly 768, 1024, 1536, or 3072 based on model used).',
            type: 'Input',
            defaultValue: 1536,
          },
          {
            name: 'PINECONE_METRIC',
            description: 'Specifies the similarity metric to use for vector comparisons within the Pinecone index.',
            type: 'DropDown',
            values: ['cosine', 'dotproduct', 'euclidean'],
            defaultValue: 'cosine',
          },
          {
            name: 'PINECONE_CLOUD',
            description: 'Specifies the cloud provider where the Pinecone index is hosted.',
            type: 'DropDown',
            values: ['aws', 'gcp', 'azure'],
            defaultValue: 'aws',
          },
        ],
      },
      {
        section: 'Oracle 23ai Vector Search (oracle23ai)',
        items: [
          {
            name: 'ORACLE_DB_USE_WALLET',
            description: 'Determines the connection method to the Oracle Database.',
            type: 'CheckBox',
          },
          {
            name: 'ORACLE_DB_USER',
            description: 'Specifies the username used to connect to the Oracle Database.',
            type: 'Input',
            defaultValue: 'DEMOUSER',
          },
          {
            name: 'ORACLE_DB_PASSWORD',
            description: 'Specifies the password for the `ORACLE_DB_USER`.',
            type: 'Input',
            defaultValue: 'Welcome123456',
          },
          {
            name: 'ORACLE_DB_DSN',
            description: 'Defines the Data Source Name for the Oracle Database connection.',
            type: 'Input',
            defaultValue: 'localhost:1521/FREEPDB1',
          },
          {
            name: 'ORACLE_WALLET_DIR',
            description:
              'Required when `ORACLE_DB_USE_WALLET` is `true`. Specifies the absolute path to the directory containing the Oracle Cloud Wallet files.',
            type: 'Input',
          },
          {
            name: 'ORACLE_WALLET_PASSWORD',
            description:
              'Required when `ORACLE_DB_USE_WALLET` is `true`. Specifies the password for the Oracle Cloud Wallet.',
            type: 'Input',
          },
          {
            name: 'ORACLE_VECTOR_LENGTH',
            description:
              'Sets the expected dimension or length of the vector embeddings stored in the Oracle Database. This must match the embedding model used.',
            type: 'Input',
            defaultValue: 768,
          },
          {
            name: 'ORACLE_DB_POOL_MIN',
            description: 'The minimum number of connections to maintain in the Oracle Database connection pool.',
            type: 'Input',
            defaultValue: 2,
          },
          {
            name: 'ORACLE_DB_POOL_MAX',
            description: 'The maximum number of connections allowed in the Oracle Database connection pool.',
            type: 'Input',
            defaultValue: 10,
          },
          {
            name: 'ORACLE_DB_POOL_INCREMENT',
            description: 'The number of connections to create when the pool needs to grow.',
            type: 'Input',
            defaultValue: 1,
          },
        ],
      },
      {
        section: 'S3 Vector Bucket',
        items: [
          {
            name: 'S3_VECTOR_BUCKET_NAME',
            description: 'Specifies the name of the S3 Vector Bucket to store vectors in.',
            type: 'Input',
          },
          {
            name: 'S3_VECTOR_REGION',
            description: 'Specifies the AWS region where the S3 Vector Bucket is hosted.',
            type: 'Input',
          },
        ],
      },
    ],
  },
  {
    category: 'RAG Content Extraction Engine',
    items: [
      {
        name: 'CONTENT_EXTRACTION_ENGINE',
        description: 'Sets the content extraction engine to use for document ingestion.',
        type: 'DropDown',
        values: ['', 'external', 'tika', 'docling', 'document_intelligence', 'mistral_ocr'],
      },
      {
        name: 'MISTRAL_OCR_API_KEY',
        description: 'Specifies the Mistral OCR API key to use.',
        type: 'Input',
      },
      {
        name: 'EXTERNAL_DOCUMENT_LOADER_URL',
        description: 'Sets the URL for the external document loader service.',
        type: 'Input',
      },
      {
        name: 'EXTERNAL_DOCUMENT_LOADER_API_KEY',
        description: 'Sets the API key for authenticating with the external document loader service.',
        type: 'Input',
      },
      {
        name: 'TIKA_SERVER_URL',
        description: 'Sets the URL for the Apache Tika server.',
        type: 'Input',
        defaultValue: 'http://localhost:9998',
      },
      {
        name: 'DOCLING_SERVER_URL',
        description: 'Specifies the URL for the Docling server. Requires Docling version 1.0.0 or later.',
        type: 'Input',
        defaultValue: 'http://docling:5001',
      },
      {
        name: 'DOCLING_OCR_ENGINE',
        description: 'Specifies the OCR engine used by Docling.',
        type: 'Input',
        defaultValue: 'tesseract',
      },
      {
        name: 'DOCLING_OCR_LANG',
        description: 'Specifies the OCR language(s) to be used with the configured `DOCLING_OCR_ENGINE`.',
        type: 'Input',
        defaultValue: 'eng,fra,deu,spa',
      },
    ],
  },
  {
    category: 'Retrieval Augmented Generation (RAG)',
    items: [
      {
        name: 'RAG_EMBEDDING_ENGINE',
        description: 'Selects an embedding engine to use for RAG.',
        type: 'DropDown',
        values: ['', 'ollama', 'openai'],
      },
      {
        name: 'RAG_EMBEDDING_MODEL',
        description: 'Sets a model for embeddings. Locally, a Sentence-Transformer model is used.',
        type: 'Input',
        defaultValue: 'sentence-transformers/all-MiniLM-L6-v2',
      },
      {
        name: 'ENABLE_RAG_HYBRID_SEARCH',
        description:
          'Enables the use of ensemble search with `BM25` + `ChromaDB`, with reranking using `sentence_transformers` models.',
        type: 'CheckBox',
      },
      {
        name: 'RAG_TOP_K',
        description: 'Sets the default number of results to consider for the embedding when using RAG.',
        type: 'Input',
        defaultValue: 3,
      },
      {
        name: 'RAG_TOP_K_RERANKER',
        description: 'Sets the default number of results to consider for the reranker when using RAG.',
        type: 'Input',
        defaultValue: 3,
      },
      {
        name: 'RAG_RELEVANCE_THRESHOLD',
        description: 'Sets the relevance threshold to consider for documents when used with reranking.',
        type: 'Input',
        defaultValue: 0.0,
      },
      {
        name: 'RAG_HYBRID_BM25_WEIGHT',
        description:
          'Sets the weight given to the keyword search (BM25) during hybrid search. 1 means only keyword serach, 0 means only vector search.',
        type: 'Input',
        defaultValue: 0.5,
      },
      {
        name: 'RAG_TEMPLATE',
        description: 'Template to use when injecting RAG documents into chat completion',
        type: 'Input',
      },
      {
        name: 'RAG_TEXT_SPLITTER',
        description: 'Sets the text splitter for RAG models.',
        type: 'DropDown',
        values: ['character', 'token'],
        defaultValue: 'character',
      },
      {
        name: 'TIKTOKEN_CACHE_DIR',
        description: 'Sets the directory for TikToken cache.',
        type: 'Input',
        defaultValue: '{CACHE_DIR}/tiktoken',
      },
      {
        name: 'TIKTOKEN_ENCODING_NAME',
        description: 'Sets the encoding name for TikToken.',
        type: 'Input',
        defaultValue: 'cl100k_base',
      },
      {
        name: 'CHUNK_SIZE',
        description: 'Sets the document chunk size for embeddings.',
        type: 'Input',
        defaultValue: 1000,
      },
      {
        name: 'CHUNK_OVERLAP',
        description: 'Specifies how much overlap there should be between chunks.',
        type: 'Input',
        defaultValue: 100,
      },
      {
        name: 'PDF_EXTRACT_IMAGES',
        description: 'Extracts images from PDFs using OCR when loading documents.',
        type: 'CheckBox',
      },
      {
        name: 'RAG_FILE_MAX_SIZE',
        description: 'Sets the maximum size of a file in megabytes that can be uploaded for document ingestion.',
        type: 'Input',
      },
      {
        name: 'RAG_FILE_MAX_COUNT',
        description: 'Sets the maximum number of files that can be uploaded at once for document ingestion.',
        type: 'Input',
      },
      {
        name: 'RAG_ALLOWED_FILE_EXTENSIONS',
        description: 'Specifies which file extensions are permitted for upload.',
        type: 'Input',
      },
      {
        name: 'RAG_RERANKING_MODEL',
        description: 'Sets a model for reranking results. Locally, a Sentence-Transformer model is used.',
        type: 'Input',
      },
      {
        name: 'RAG_OPENAI_API_BASE_URL',
        description: 'Sets the OpenAI base API URL to use for RAG embeddings.',
        type: 'Input',
        defaultValue: '${OPENAI_API_BASE_URL}',
      },
      {
        name: 'RAG_OPENAI_API_KEY',
        description: 'Sets the OpenAI API key to use for RAG embeddings.',
        type: 'Input',
        defaultValue: '${OPENAI_API_KEY}',
      },
      {
        name: 'RAG_EMBEDDING_OPENAI_BATCH_SIZE',
        description: 'Sets the batch size for OpenAI embeddings.',
        type: 'Input',
        defaultValue: 1,
      },
      {
        name: 'RAG_EMBEDDING_BATCH_SIZE',
        description: 'Sets the batch size for embedding in RAG (Retrieval-Augmented Generator) models.',
        type: 'Input',
        defaultValue: 1,
      },
      {
        name: 'RAG_OLLAMA_API_KEY',
        description: 'Sets the API key for Ollama API used in RAG models.',
        type: 'Input',
      },
      {
        name: 'RAG_OLLAMA_BASE_URL',
        description: 'Sets the base URL for Ollama API used in RAG models.',
        type: 'Input',
      },
      {
        name: 'ENABLE_RETRIEVAL_QUERY_GENERATION',
        description: 'Enables or disables retrieval query generation.',
        type: 'CheckBox',
      },
      {
        name: 'QUERY_GENERATION_PROMPT_TEMPLATE',
        description: 'Sets the prompt template for query generation.',
        type: 'Input',
      },
      {
        name: 'BYPASS_EMBEDDING_AND_RETRIEVAL',
        description: 'Bypasses the embedding and retrieval process.',
        type: 'CheckBox',
      },
      {
        name: 'DOCUMENT_INTELLIGENCE_ENDPOINT',
        description: 'Specifies the endpoint for document intelligence.',
        type: 'Input',
      },
      {
        name: 'DOCUMENT_INTELLIGENCE_KEY',
        description: 'Specifies the key for document intelligence.',
        type: 'Input',
      },
      {
        name: 'ENABLE_RAG_LOCAL_WEB_FETCH',
        description: 'Enables or disables local web fetch for RAG.',
        type: 'CheckBox',
      },
      {
        name: 'RAG_EMBEDDING_CONTENT_PREFIX',
        description: 'Specifies the prefix for the RAG embedding content.',
        type: 'Input',
      },
      {
        name: 'RAG_EMBEDDING_PREFIX_FIELD_NAME',
        description: 'Specifies the field name for the RAG embedding prefix.',
        type: 'Input',
      },
      {
        name: 'RAG_EMBEDDING_QUERY_PREFIX',
        description: 'Specifies the prefix for the RAG embedding query.',
        type: 'Input',
      },
      {
        name: 'RAG_FULL_CONTEXT',
        description: 'Specifies whether to use the full context for RAG.',
        type: 'CheckBox',
      },
    ],
    sections: [
      {
        section: 'Google Drive',
        items: [
          {
            name: 'ENABLE_GOOGLE_DRIVE_INTEGRATION',
            description:
              'Enables or disables Google Drive integration. If set to true, and `GOOGLE_DRIVE_CLIENT_ID` & `GOOGLE_DRIVE_API_KEY` are both configured, Google Drive will appear as an upload option in the chat UI.',
            type: 'CheckBox',
          },
          {
            name: 'GOOGLE_DRIVE_CLIENT_ID',
            description:
              'Sets the client ID for Google Drive (client must be configured with Drive API and Picker API enabled).',
            type: 'Input',
          },
          {
            name: 'GOOGLE_DRIVE_API_KEY',
            description: 'Sets the API key for Google Drive integration.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'OneDrive',
        items: [
          {
            name: 'ENABLE_ONEDRIVE_INTEGRATION',
            description: 'Enables or disables OneDrive integration.',
            type: 'CheckBox',
          },
          {
            name: 'ONEDRIVE_CLIENT_ID',
            description: 'Specifies the client ID for OneDrive integration.',
            type: 'Input',
          },
          {
            name: 'ONEDRIVE_SHAREPOINT_URL',
            description:
              'Specifies the SharePoint site URL for OneDrive integration e.g. https://companyname.sharepoint.com.',
            type: 'Input',
          },
          {
            name: 'ONEDRIVE_SHAREPOINT_TENANT_ID',
            description: 'Specifies the SharePoint tenant ID for OneDrive integration.',
            type: 'Input',
          },
        ],
      },
    ],
  },
  {
    category: 'Web Search',
    items: [
      {
        name: 'ENABLE_WEB_SEARCH',
        description: 'Enable web search toggle.',
        type: 'CheckBox',
      },
      {
        name: 'ENABLE_SEARCH_QUERY_GENERATION',
        description: 'Enables or disables search query generation.',
        type: 'CheckBox',
      },
      {
        name: 'WEB_SEARCH_TRUST_ENV',
        description: 'Enables proxy set by `http_proxy` and `https_proxy` during web search content fetching.',
        type: 'CheckBox',
      },
      {
        name: 'WEB_SEARCH_RESULT_COUNT',
        description: 'Maximum number of search results to crawl.',
        type: 'Input',
        defaultValue: 3,
      },
      {
        name: 'WEB_LOADER_CONCURRENT_REQUESTS',
        description:
          'Specifies the number of concurrent requests used by the web loader to fetch content from web pages returned by search results. This directly impacts how many pages can be crawled simultaneously.',
        type: 'Input',
        defaultValue: 10,
      },
      {
        name: 'WEB_SEARCH_ENGINE',
        description: 'Specifies the search engine to use.',
        type: 'DropDown',
        values: [
          'searxng',
          'google_pse',
          'brave',
          'kagi',
          'mojeek',
          'bocha',
          'serpstack',
          'serper',
          'serply',
          'searchapi',
          'serpapi',
          'duckduckgo',
          'tavily',
          'jina',
          'bing',
          'exa',
          'perplexity',
          'sougou',
        ],
      },
      {
        name: 'BYPASS_WEB_SEARCH_EMBEDDING_AND_RETRIEVAL',
        description: 'Bypasses the web search embedding and retrieval process.',
        type: 'CheckBox',
      },
      {
        name: 'SEARXNG_QUERY_URL',
        description:
          'The [SearXNG search API](https://docs.searxng.org/dev/search_api.html) URL supporting JSON output. `<query>` is replaced with the search query. Example: `http://searxng.local/search?q=<query>`',
        type: 'Input',
      },
      {
        name: 'GOOGLE_PSE_API_KEY',
        description: 'Sets the API key for the Google Programmable Search Engine (PSE) service.',
        type: 'Input',
      },
      {
        name: 'GOOGLE_PSE_ENGINE_ID',
        description: 'The engine ID for the Google Programmable Search Engine (PSE) service.',
        type: 'Input',
      },
      {
        name: 'BRAVE_SEARCH_API_KEY',
        description: 'Sets the API key for the Brave Search API.',
        type: 'Input',
      },
      {
        name: 'KAGI_SEARCH_API_KEY',
        description: 'Sets the API key for Kagi Search API.',
        type: 'Input',
      },
      {
        name: 'MOJEEK_SEARCH_API_KEY',
        description: 'Sets the API key for Mojeek Search API.',
        type: 'Input',
      },
      {
        name: 'SERPSTACK_API_KEY',
        description: 'Sets the API key for Serpstack search API.',
        type: 'Input',
      },
      {
        name: 'SERPSTACK_HTTPS',
        description:
          'Configures the use of HTTPS for Serpstack requests. Free tier requests are restricted to HTTP only.',
        type: 'CheckBox',
      },
      {
        name: 'SERPER_API_KEY',
        description: 'Sets the API key for Serper search API.',
        type: 'Input',
      },
      {
        name: 'SERPLY_API_KEY',
        description: 'Sets the API key for Serply search API.',
        type: 'Input',
      },
      {
        name: 'SEARCHAPI_API_KEY',
        description: 'Sets the API key for SearchAPI.',
        type: 'Input',
      },
      {
        name: 'SEARCHAPI_ENGINE',
        description: 'Sets the SearchAPI engine.',
        type: 'Input',
      },
      {
        name: 'TAVILY_API_KEY',
        description: 'Sets the API key for Tavily search API.',
        type: 'Input',
      },
      {
        name: 'JINA_API_KEY',
        description: 'Sets the API key for Jina.',
        type: 'Input',
      },
      {
        name: 'BING_SEARCH_V7_ENDPOINT',
        description: 'Sets the endpoint for Bing Search API.',
        type: 'Input',
      },
      {
        name: 'BING_SEARCH_V7_SUBSCRIPTION_KEY',
        description: 'Sets the subscription key for Bing Search API.',
        type: 'Input',
        defaultValue: 'https://api.bing.microsoft.com/v7.0/search',
      },
      {
        name: 'BOCHA_SEARCH_API_KEY',
        description: 'Sets the API key for Bocha Search API.',
        type: 'Input',
      },
      {
        name: 'EXA_API_KEY',
        description: 'Sets the API key for Exa search API.',
        type: 'Input',
      },
      {
        name: 'SERPAPI_API_KEY',
        description: 'Sets the API key for SerpAPI.',
        type: 'Input',
      },
      {
        name: 'SERPAPI_ENGINE',
        description: 'Specifies the search engine to use for SerpAPI.',
        type: 'Input',
      },
      {
        name: 'SOUGOU_API_SID',
        description: 'Sets the Sogou API SID.',
        type: 'Input',
      },
      {
        name: 'SOUGOU_API_SK',
        description: 'Sets the Sogou API SK.',
        type: 'Input',
      },
      {
        name: 'TAVILY_EXTRACT_DEPTH',
        description: 'Specifies the extract depth for Tavily search results.',
        type: 'Input',
        defaultValue: 'basic',
      },
    ],
    sections: [
      {
        section: 'Web Loader Configuration',
        items: [
          {
            name: 'WEB_LOADER_ENGINE',
            description: 'Specifies the loader to use for retrieving and processing web content.',
            type: 'DropDown',
            values: ['requests', 'playwright'],
            defaultValue: 'safe_web',
          },
          {
            name: 'PLAYWRIGHT_WS_URL',
            description:
              'Specifies the WebSocket URI of a remote Playwright browser instance. When set, Open WebUI will use this remote browser instead of installing browser dependencies locally. This is particularly useful in containerized environments where you want to keep the Open WebUI container lightweight and separate browser concerns. Example: `ws://playwright:3000`',
            type: 'Input',
          },
          {
            name: 'FIRECRAWL_API_BASE_URL',
            description: 'Sets the base URL for Firecrawl API.',
            type: 'Input',
            defaultValue: 'https://api.firecrawl.dev',
          },
          {
            name: 'FIRECRAWL_API_KEY',
            description: 'Sets the API key for Firecrawl API.',
            type: 'Input',
          },
          {
            name: 'PERPLEXITY_API_KEY',
            description: 'Sets the API key for Perplexity API.',
            type: 'Input',
          },
          {
            name: 'PLAYWRIGHT_TIMEOUT',
            description: 'Specifies the timeout for Playwright requests.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'YouTube Loader',
        items: [
          {
            name: 'YOUTUBE_LOADER_PROXY_URL',
            description: 'Sets the proxy URL for YouTube loader.',
            type: 'Input',
          },
          {
            name: 'YOUTUBE_LOADER_LANGUAGE',
            description:
              'Comma-separated list of language codes to try when fetching YouTube video transcriptions, in priority order.',
            type: 'Input',
            defaultValue: 'en',
          },
        ],
      },
    ],
  },
  {
    category: 'Audio',
    sections: [
      {
        section: 'Whisper Speech-to-Text (Local)',
        items: [
          {
            name: 'WHISPER_MODEL',
            description:
              'Sets the Whisper model to use for Speech-to-Text. The backend used is faster_whisper with quantization to `int8`.',
            type: 'Input',
            defaultValue: 'base',
          },
          {
            name: 'WHISPER_MODEL_DIR',
            description: 'Specifies the directory to store Whisper model files.',
            type: 'Input',
            defaultValue: '${DATA_DIR}/cache/whisper/models',
          },
          {
            name: 'WHISPER_VAD_FILTER',
            description:
              'Specifies whether to apply a Voice Activity Detection (VAD) filter to Whisper Speech-to-Text.',
            type: 'CheckBox',
          },
          {
            name: 'WHISPER_MODEL_AUTO_UPDATE',
            description: 'Toggles automatic update of the Whisper model.',
            type: 'CheckBox',
          },
          {
            name: 'WHISPER_LANGUAGE',
            description:
              'Specifies the ISO 639-1 language Whisper uses for STT (ISO 639-2 for Hawaiian and Cantonese). Whisper predicts the language by default.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Speech-to-Text (OpenAI)',
        items: [
          {
            name: 'AUDIO_STT_ENGINE',
            description: 'Specifies the Speech-to-Text engine to use.',
            type: 'DropDown',
            values: ['', 'openai', 'deepgram', 'azure'],
          },
          {
            name: 'AUDIO_STT_MODEL',
            description: 'Specifies the Speech-to-Text model to use for OpenAI-compatible endpoints.',
            type: 'Input',
            defaultValue: 'whisper-1',
          },
          {
            name: 'AUDIO_STT_OPENAI_API_BASE_URL',
            description: 'Sets the OpenAI-compatible base URL to use for Speech-to-Text.',
            type: 'Input',
            defaultValue: '${OPENAI_API_BASE_URL}',
          },
          {
            name: 'AUDIO_STT_OPENAI_API_KEY',
            description: 'Sets the OpenAI API key to use for Speech-to-Text.',
            type: 'Input',
            defaultValue: '${OPENAI_API_KEY}',
          },
        ],
      },
      {
        section: 'Speech-to-Text (Azure)',
        items: [
          {
            name: 'AUDIO_STT_AZURE_API_KEY',
            description: 'Specifies the Azure API key to use for Speech-to-Text.',
            type: 'Input',
          },
          {
            name: 'AUDIO_STT_AZURE_REGION',
            description: 'Specifies the Azure region to use for Speech-to-Text.',
            type: 'Input',
          },
          {
            name: 'AUDIO_STT_AZURE_LOCALES',
            description: 'Specifies the locales to use for Azure Speech-to-Text.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Speech-to-Text (Deepgram)',
        items: [
          {
            name: 'DEEPGRAM_API_KEY',
            description: 'Specifies the Deepgram API key to use for Speech-to-Text.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Text-to-Speech',
        items: [
          {
            name: 'AUDIO_TTS_API_KEY',
            description: 'Sets the API key for Text-to-Speech.',
            type: 'Input',
          },
          {
            name: 'AUDIO_TTS_ENGINE',
            description: 'Specifies the Text-to-Speech engine to use.',
            type: 'DropDown',
            values: ['', 'azure', 'elevenlabs', 'openai', 'transformers'],
          },
          {
            name: 'AUDIO_TTS_MODEL',
            description: 'Specifies the OpenAI text-to-speech model to use.',
            type: 'Input',
            defaultValue: 'tts-1',
          },
          {
            name: 'AUDIO_TTS_VOICE',
            description: 'Sets the OpenAI text-to-speech voice to use.',
            type: 'Input',
            defaultValue: 'alloy',
          },
          {
            name: 'AUDIO_TTS_SPLIT_ON',
            description: 'Sets the OpenAI text-to-speech split on to use.',
            type: 'Input',
            defaultValue: 'punctuation',
          },
        ],
      },
      {
        section: 'Azure Text-to-Speech',
        items: [
          {
            name: 'AUDIO_TTS_AZURE_SPEECH_REGION',
            description: 'Sets the region for Azure Text to Speech.',
            type: 'Input',
          },
          {
            name: 'AUDIO_TTS_AZURE_SPEECH_OUTPUT_FORMAT',
            description: 'Sets the output format for Azure Text to Speech.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'OpenAI Text-to-Speech',
        items: [
          {
            name: 'AUDIO_TTS_OPENAI_API_BASE_URL',
            description: 'Sets the OpenAI-compatible base URL to use for text-to-speech.',
            type: 'Input',
            defaultValue: '${OPENAI_API_BASE_URL}',
          },
          {
            name: 'AUDIO_TTS_OPENAI_API_KEY',
            description: 'Sets the API key to use for text-to-speech.',
            type: 'Input',
            defaultValue: '${OPENAI_API_KEY}',
          },
        ],
      },
    ],
  },
  {
    category: 'Image Generation',
    sections: [
      {
        section: 'General',
        items: [
          {
            name: 'ENABLE_IMAGE_GENERATION',
            description: 'Enables or disables image generation features.',
            type: 'CheckBox',
          },
          {
            name: 'IMAGE_GENERATION_ENGINE',
            description: 'Specifies the engine to use for image generation.',
            type: 'DropDown',
            values: ['openai', 'comfyui', 'automatic1111', 'gemini'],
            defaultValue: 'openai',
          },
          {
            name: 'ENABLE_IMAGE_PROMPT_GENERATION',
            description: 'Enables or disables image prompt generation.',
            type: 'CheckBox',
          },
          {
            name: 'IMAGE_PROMPT_GENERATION_PROMPT_TEMPLATE',
            description: 'Specifies the template to use for generating image prompts.',
            type: 'Input',
          },
          {
            name: 'IMAGE_SIZE',
            description: 'Sets the default image size to generate.',
            type: 'Input',
            defaultValue: '512x512',
          },
          {
            name: 'IMAGE_STEPS',
            description: 'Sets the default iteration steps for image generation. Used for ComfyUI and AUTOMATIC1111.',
            type: 'Input',
            defaultValue: 50,
          },
          {
            name: 'IMAGE_GENERATION_MODEL',
            description: 'Default model to use for image generation',
            type: 'Input',
          },
        ],
      },
      {
        section: 'AUTOMATIC1111',
        items: [
          {
            name: 'AUTOMATIC1111_BASE_URL',
            description: "Specifies the URL to AUTOMATIC1111's Stable Diffusion API.",
            type: 'Input',
          },
          {
            name: 'AUTOMATIC1111_API_AUTH',
            description: 'Sets the AUTOMATIC1111 API authentication.',
            type: 'Input',
          },
          {
            name: 'AUTOMATIC1111_CFG_SCALE',
            description: 'Sets the scale for AUTOMATIC1111 inference.',
            type: 'Input',
          },
          {
            name: 'AUTOMATIC1111_SAMPLER',
            description: 'Sets the sampler for AUTOMATIC1111 inference.',
            type: 'Input',
          },
          {
            name: 'AUTOMATIC1111_SCHEDULER',
            description: 'Sets the scheduler for AUTOMATIC1111 inference.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'ComfyUI',
        items: [
          {
            name: 'COMFYUI_BASE_URL',
            description: 'Specifies the URL to the ComfyUI image generation API.',
            type: 'Input',
          },
          {
            name: 'COMFYUI_API_KEY',
            description: 'Sets the API key for ComfyUI.',
            type: 'Input',
          },
          {
            name: 'COMFYUI_WORKFLOW',
            description: 'Sets the ComfyUI workflow.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Gemini',
        items: [
          {
            name: 'GEMINI_API_BASE_URL',
            description: "Specifies the URL to Gemini's API.",
            type: 'Input',
          },
          {
            name: 'GEMINI_API_KEY',
            description: 'Sets the Gemini API key.',
            type: 'Input',
          },
          {
            name: 'IMAGES_GEMINI_API_BASE_URL',
            description: "Specifies the URL to Gemini's image generation API.",
            type: 'Input',
          },
          {
            name: 'IMAGES_GEMINI_API_KEY',
            description: 'Sets the Gemini API key for image generation.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'OpenAI DALL-E',
        items: [
          {
            name: 'IMAGES_OPENAI_API_BASE_URL',
            description: 'Sets the OpenAI-compatible base URL to use for DALL-E image generation.',
            type: 'Input',
            defaultValue: '${OPENAI_API_BASE_URL}',
          },
          {
            name: 'IMAGES_OPENAI_API_KEY',
            description: 'Sets the API key to use for DALL-E image generation.',
            type: 'Input',
            defaultValue: '${OPENAI_API_KEY}',
          },
        ],
      },
    ],
  },
  {
    category: 'OAuth',
    sections: [
      {
        section: 'General',
        items: [
          {
            name: 'ENABLE_OAUTH_SIGNUP',
            description: 'Enables account creation when signing up via OAuth. Distinct from `ENABLE_SIGNUP`.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_OAUTH_PERSISTENT_CONFIG',
            description:
              'Controls whether OAuth-related settings are persisted in the database after the first launch.',
            type: 'CheckBox',
          },
          {
            name: 'OAUTH_SUB_CLAIM',
            description:
              "Overrides the default claim used to identify a user's unique ID (`sub`) from the OAuth/OIDC provider's user info response. By default, Open WebUI attempts to infer this from the provider's configuration. This variable allows you to explicitly specify which claim to use. For example, if your identity provider uses 'employee_id' as the unique identifier, you would set this variable to 'employee_id'.",
            type: 'Input',
          },
          {
            name: 'OAUTH_MERGE_ACCOUNTS_BY_EMAIL',
            description:
              'If enabled, merges OAuth accounts with existing accounts using the same email address. This is considered unsafe as not all OAuth providers will verify email addresses and can lead to potential account takeovers.',
            type: 'CheckBox',
          },
          {
            name: 'OAUTH_UPDATE_PICTURE_ON_LOGIN',
            description: 'If enabled, updates the local user profile picture with the OAuth-provided picture on login.',
            type: 'CheckBox',
          },
          {
            name: 'WEBUI_AUTH_TRUSTED_EMAIL_HEADER',
            description: 'Defines the trusted request header for authentication. See [SSO docs](/features/sso).',
            type: 'Input',
          },
          {
            name: 'WEBUI_AUTH_TRUSTED_NAME_HEADER',
            description:
              'Defines the trusted request header for the username of anyone registering with the `WEBUI_AUTH_TRUSTED_EMAIL_HEADER` header. See [SSO docs](/features/sso).',
            type: 'Input',
          },
          {
            name: 'WEBUI_AUTH_TRUSTED_GROUPS_HEADER',
            description:
              'Defines the trusted request header containing a comma-separated list of group memberships for the user when using trusted header authentication. See [SSO docs](/features/sso).',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Google',
        items: [
          {
            name: 'GOOGLE_CLIENT_ID',
            description: 'Sets the client ID for Google OAuth.',
            type: 'Input',
          },
          {
            name: 'GOOGLE_CLIENT_SECRET',
            description: 'Sets the client secret for Google OAuth.',
            type: 'Input',
          },
          {
            name: 'GOOGLE_OAUTH_SCOPE',
            description: 'Sets the scope for Google OAuth authentication.',
            type: 'Input',
            defaultValue: 'openid email profile',
          },
          {
            name: 'GOOGLE_REDIRECT_URI',
            description: 'Sets the redirect URI for Google OAuth.',
            type: 'Input',
            defaultValue: '<backend>/oauth/google/callback',
          },
        ],
      },
      {
        section: 'Microsoft',
        items: [
          {
            name: 'MICROSOFT_CLIENT_ID',
            description: 'Sets the client ID for Microsoft OAuth.',
            type: 'Input',
          },
          {
            name: 'MICROSOFT_CLIENT_SECRET',
            description: 'Sets the client secret for Microsoft OAuth.',
            type: 'Input',
          },
          {
            name: 'MICROSOFT_CLIENT_TENANT_ID',
            description: 'Sets the tenant ID for Microsoft OAuth.',
            type: 'Input',
          },
          {
            name: 'MICROSOFT_OAUTH_SCOPE',
            description: 'Sets the scope for Microsoft OAuth authentication.',
            type: 'Input',
            defaultValue: 'openid email profile',
          },
          {
            name: 'MICROSOFT_REDIRECT_URI',
            description: 'Sets the redirect URI for Microsoft OAuth.',
            type: 'Input',
            defaultValue: '<backend>/oauth/microsoft/callback',
          },
        ],
      },
      {
        section: 'GitHub',
        items: [
          {
            name: 'GITHUB_CLIENT_ID',
            description: 'Sets the client ID for GitHub OAuth.',
            type: 'Input',
          },
          {
            name: 'GITHUB_CLIENT_SECRET',
            description: 'Sets the client secret for GitHub OAuth.',
            type: 'Input',
          },
          {
            name: 'GITHUB_CLIENT_SCOPE',
            description: 'Specifies the scope for GitHub OAuth authentication.',
            type: 'Input',
            defaultValue: 'user:email',
          },
          {
            name: 'GITHUB_CLIENT_REDIRECT_URI',
            description: 'Sets the redirect URI for GitHub OAuth.',
            type: 'Input',
            defaultValue: '<backend>/oauth/github/callback',
          },
        ],
      },
      {
        section: 'OpenID (OIDC)',
        items: [
          {
            name: 'OAUTH_CLIENT_ID',
            description: 'Sets the client ID for OIDC.',
            type: 'Input',
          },
          {
            name: 'OAUTH_CLIENT_SECRET',
            description: 'Sets the client secret for OIDC.',
            type: 'Input',
          },
          {
            name: 'OPENID_PROVIDER_URL',
            description: 'Path to the `.well-known/openid-configuration` endpoint',
            type: 'Input',
          },
          {
            name: 'OPENID_REDIRECT_URI',
            description: 'Sets the redirect URI for OIDC',
            type: 'Input',
            defaultValue: '<backend>/oauth/oidc/callback',
          },
          {
            name: 'OAUTH_SCOPES',
            description: 'Sets the scope for OIDC authentication. `openid` and `email` are required.',
            type: 'Input',
            defaultValue: 'openid email profile',
          },
          {
            name: 'OAUTH_CODE_CHALLENGE_METHOD',
            description: 'Specifies the code challenge method for OAuth authentication.',
            type: 'Input',
          },
          {
            name: 'OAUTH_PROVIDER_NAME',
            description: 'Sets the name for the OIDC provider.',
            type: 'Input',
            defaultValue: 'SSO',
          },
          {
            name: 'OAUTH_USERNAME_CLAIM',
            description: 'Set username claim for OpenID.',
            type: 'Input',
            defaultValue: 'name',
          },
          {
            name: 'OAUTH_EMAIL_CLAIM',
            description: 'Set email claim for OpenID.',
            type: 'Input',
            defaultValue: 'email',
          },
          {
            name: 'OAUTH_PICTURE_CLAIM',
            description: 'Set picture (avatar) claim for OpenID.',
            type: 'Input',
            defaultValue: 'picture',
          },
          {
            name: 'OAUTH_GROUP_CLAIM',
            description: 'Specifies the group claim for OAuth authentication.',
            type: 'Input',
            defaultValue: 'groups',
          },
          {
            name: 'ENABLE_OAUTH_ROLE_MANAGEMENT',
            description: 'Enables role management for OAuth delegation.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_OAUTH_GROUP_MANAGEMENT',
            description: 'Enables or disables OAuth group management.',
            type: 'CheckBox',
          },
          {
            name: 'OAUTH_ROLES_CLAIM',
            description: 'Sets the roles claim to look for in the OIDC token.',
            type: 'Input',
            defaultValue: 'roles',
          },
          {
            name: 'OAUTH_ALLOWED_ROLES',
            description: 'Sets the roles that are allowed access to the platform.',
            type: 'Input',
            defaultValue: 'user,admin',
          },
          {
            name: 'OAUTH_ADMIN_ROLES',
            description: 'Sets the roles that are considered administrators.',
            type: 'Input',
            defaultValue: 'admin',
          },
          {
            name: 'OAUTH_ALLOWED_DOMAINS',
            description: 'Specifies the allowed domains for OAuth authentication. (e.g. "example1.com,example2.com").',
            type: 'Input',
            defaultValue: '*',
          },
        ],
      },
    ],
  },
  {
    category: 'LDAP',
    items: [
      {
        name: 'ENABLE_LDAP',
        description: 'Enables or disables LDAP authentication.',
        type: 'CheckBox',
      },
      {
        name: 'LDAP_SERVER_LABEL',
        description: 'Sets the label of the LDAP server.',
        type: 'Input',
      },
      {
        name: 'LDAP_SERVER_HOST',
        description: 'Sets the hostname of the LDAP server.',
        type: 'Input',
        defaultValue: 'localhost',
      },
      {
        name: 'LDAP_SERVER_PORT',
        description: 'Sets the port number of the LDAP server.',
        type: 'Input',
        defaultValue: 389,
      },
      {
        name: 'LDAP_ATTRIBUTE_FOR_MAIL',
        description: 'Sets the attribute to use as mail for LDAP authentication.',
        type: 'Input',
      },
      {
        name: 'LDAP_ATTRIBUTE_FOR_USERNAME',
        description: 'Sets the attribute to use as a username for LDAP authentication.',
        type: 'Input',
      },
      {
        name: 'LDAP_APP_DN',
        description: 'Sets the distinguished name for the LDAP application.',
        type: 'Input',
      },
      {
        name: 'LDAP_APP_PASSWORD',
        description: 'Sets the password for the LDAP application.',
        type: 'Input',
      },
      {
        name: 'LDAP_SEARCH_BASE',
        description: 'Sets the base to search for LDAP authentication.',
        type: 'Input',
      },
      {
        name: 'LDAP_SEARCH_FILTER',
        description: 'Sets a single filter to use for LDAP search. Alternative to `LDAP_SEARCH_FILTERS`.',
        type: 'Input',
      },
      {
        name: 'LDAP_SEARCH_FILTERS',
        description: 'Sets the filter to use for LDAP search.',
        type: 'Input',
      },
      {
        name: 'LDAP_USE_TLS',
        description: 'Enables or disables TLS for LDAP connection.',
        type: 'CheckBox',
      },
      {
        name: 'LDAP_CA_CERT_FILE',
        description: 'Sets the path to the LDAP CA certificate file.',
        type: 'Input',
      },
      {
        name: 'LDAP_VALIDATE_CERT',
        description: 'Sets whether to validate the LDAP CA certificate.',
        type: 'CheckBox',
      },
      {
        name: 'LDAP_CIPHERS',
        description: 'Sets the ciphers to use for LDAP connection.',
        type: 'Input',
        defaultValue: 'ALL',
      },
      {
        name: 'ENABLE_LDAP_GROUP_MANAGEMENT',
        description: 'Enables the group management feature.',
        type: 'CheckBox',
      },
      {
        name: 'ENABLE_LDAP_GROUP_CREATION',
        description: 'If a group from LDAP does not exist in Open WebUI, it will be created automatically.',
        type: 'CheckBox',
      },
      {
        name: 'LDAP_ATTRIBUTE_FOR_GROUPS',
        description:
          "Specifies the LDAP attribute that contains the user's group memberships. `memberOf` is a standard attribute for this purpose in Active Directory environments.",
        type: 'Input',
        defaultValue: 'memberOf',
      },
    ],
  },
  {
    category: 'SCIM',
    items: [
      {
        name: 'SCIM_ENABLED',
        description:
          'Enables or disables SCIM 2.0 (System for Cross-domain Identity Management) support for automated user and group provisioning from identity providers like Okta, Azure AD, and Google Workspace.',
        type: 'CheckBox',
      },
      {
        name: 'SCIM_TOKEN',
        description:
          'Sets the bearer token for SCIM authentication. This token must be provided by identity providers when making SCIM API requests. Generate a secure random token (e.g., using `openssl rand -base64 32`) and configure it in both Open WebUI and your identity provider.',
        type: 'Input',
      },
    ],
  },
  {
    category: 'User Permissions',
    sections: [
      {
        section: 'Chat Permissions',
        items: [
          {
            name: 'USER_PERMISSIONS_CHAT_CONTROLS',
            description:
              'Acts as a master switch to enable or disable the main "Controls" button and panel in the chat interface. **If this is set to False, users will not see the Controls button, and the granular permissions below will have no effect**.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_VALVES',
            description:
              'When `USER_PERMISSIONS_CHAT_CONTROLS` is enabled, this setting specifically controls the visibility of the "Valves" section within the chat controls panel.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_SYSTEM_PROMPT',
            description:
              'When `USER_PERMISSIONS_CHAT_CONTROLS` is enabled, this setting specifically controls the visibility of the customizable "System Prompt" section within the chat controls panel, folders and the user settings.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_PARAMS',
            description:
              'When `USER_PERMISSIONS_CHAT_CONTROLS` is enabled, this setting specifically controls the visibility of the "Advanced Parameters" section within the chat controls panel.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_FILE_UPLOAD',
            description: 'Enables or disables user permission to upload files to chats.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_DELETE',
            description: 'Enables or disables user permission to delete chats.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_EDIT',
            description: 'Enables or disables user permission to edit chats.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_DELETE_MESSAGE',
            description:
              'Enables or disables user permission to delete individual messages within chats. This provides granular control over message deletion capabilities separate from full chat deletion.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_CONTINUE_RESPONSE',
            description:
              'Enables or disables user permission to continue AI responses. When disabled, users cannot use the "Continue Response" button, which helps prevent potential system prompt leakage through response continuation manipulation.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_REGENERATE_RESPONSE',
            description:
              'Enables or disables user permission to regenerate AI responses. Controls access to both the standard regenerate button and the guided regeneration menu.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_RATE_RESPONSE',
            description:
              'Enables or disables user permission to rate AI responses using the thumbs up/down feedback system. This controls access to the response rating functionality for evaluation and feedback collection.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_STT',
            description: 'Enables or disables user permission to use Speech-to-Text in chats.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_TTS',
            description: 'Enables or disables user permission to use Text-to-Speech in chats.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_CALL',
            description: 'Enables or disables user permission to make calls in chats.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_MULTIPLE_MODELS',
            description: 'Enables or disables user permission to use multiple models in chats.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_TEMPORARY',
            description: 'Enables or disables user permission to create temporary chats.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_CHAT_TEMPORARY_ENFORCED',
            description: 'Enables or disables enforced temporary chats for users.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Feature Permissions',
        items: [
          {
            name: 'USER_PERMISSIONS_FEATURES_DIRECT_TOOL_SERVERS',
            description: 'Enables or disables user permission to access direct tool servers.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_FEATURES_WEB_SEARCH',
            description: 'Enables or disables user permission to use the web search feature.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_FEATURES_IMAGE_GENERATION',
            description: 'Enables or disables user permission to use the image generation feature.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_FEATURES_CODE_INTERPRETER',
            description: 'Enables or disables user permission to use code interpreter feature.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Workspace Permissions',
        items: [
          {
            name: 'USER_PERMISSIONS_WORKSPACE_MODELS_ACCESS',
            description: 'Enables or disables user permission to access workspace models.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_WORKSPACE_KNOWLEDGE_ACCESS',
            description: 'Enables or disables user permission to access workspace knowledge.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_WORKSPACE_PROMPTS_ACCESS',
            description: 'Enables or disables user permission to access workspace prompts.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_WORKSPACE_TOOLS_ACCESS',
            description: 'Enables or disables user permission to access workspace tools.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_WORKSPACE_MODELS_ALLOW_PUBLIC_SHARING',
            description: 'Enables or disables public sharing of workspace models.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_WORKSPACE_KNOWLEDGE_ALLOW_PUBLIC_SHARING',
            description: 'Enables or disables public sharing of workspace knowledge.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_WORKSPACE_PROMPTS_ALLOW_PUBLIC_SHARING',
            description: 'Enables or disables public sharing of workspace prompts.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_WORKSPACE_TOOLS_ALLOW_PUBLIC_SHARING',
            description: 'Enables or disables public sharing of workspace tools.',
            type: 'Input',
          },
        ],
      },
    ],
  },
  {
    category: 'Misc Environment Variables',
    sections: [
      {
        section: 'Cloud Storage',
        items: [
          {
            name: 'STORAGE_PROVIDER',
            description: 'Sets the storage provider.',
            type: 'DropDown',
            values: ['s3', 'gcs', 'azure'],
          },
        ],
      },
      {
        section: 'Amazon S3 Storage',
        items: [
          {
            name: 'S3_ACCESS_KEY_ID',
            description: 'Sets the access key ID for S3 storage.',
            type: 'Input',
          },
          {
            name: 'S3_ADDRESSING_STYLE',
            description: "Specifies the addressing style to use for S3 storage (e.g., 'path', 'virtual').",
            type: 'Input',
          },
          {
            name: 'S3_BUCKET_NAME',
            description: 'Sets the bucket name for S3 storage.',
            type: 'Input',
          },
          {
            name: 'S3_ENDPOINT_URL',
            description: 'Sets the endpoint URL for S3 storage.',
            type: 'Input',
          },
          {
            name: 'S3_KEY_PREFIX',
            description: 'Sets the key prefix for a S3 object.',
            type: 'Input',
          },
          {
            name: 'S3_REGION_NAME',
            description: 'Sets the region name for S3 storage.',
            type: 'Input',
          },
          {
            name: 'S3_SECRET_ACCESS_KEY',
            description: 'Sets the secret access key for S3 storage.',
            type: 'Input',
          },
          {
            name: 'S3_USE_ACCELERATE_ENDPOINT',
            description: 'Specifies whether to use the accelerated endpoint for S3 storage.',
            type: 'CheckBox',
          },
          {
            name: 'S3_ENABLE_TAGGING',
            description:
              'Enables S3 object tagging after uploads for better organization, searching, and integration with file management policies. Always set to `False` when using Cloudflare R2, as R2 does not support object tagging.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Google Cloud Storage',
        items: [
          {
            name: 'GOOGLE_APPLICATION_CREDENTIALS_JSON',
            description: 'Contents of Google Application Credentials JSON file.',
            type: 'Input',
          },
          {
            name: 'GCS_BUCKET_NAME',
            description: 'Sets the bucket name for Google Cloud Storage. Bucket must already exist.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Microsoft Azure Storage',
        items: [
          {
            name: 'AZURE_STORAGE_ENDPOINT',
            description: 'Sets the endpoint URL for Azure Storage.',
            type: 'Input',
          },
          {
            name: 'AZURE_STORAGE_CONTAINER_NAME',
            description: 'Sets the container name for Azure Storage.',
            type: 'Input',
          },
          {
            name: 'AZURE_STORAGE_KEY',
            description: 'Set the access key for Azure Storage.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'OpenTelemetry Configuration',
        items: [
          {
            name: 'ENABLE_OTEL',
            description:
              'Enables or disables OpenTelemetry for observability. When enabled, tracing, metrics, and logging data can be collected and exported to an OTLP endpoint.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_OTEL_METRICS',
            description:
              'Enables or disables OpenTelemetry metrics collection and export. This variable works in conjunction with `ENABLE_OTEL`.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_OTEL_LOGS',
            description:
              'Enables or disables OpenTelemetry logging export. When enabled, application logs are sent to the configured OTLP endpoint. This variable works in conjunction with `ENABLE_OTEL`.',
            type: 'CheckBox',
          },
          {
            name: 'OTEL_EXPORTER_OTLP_ENDPOINT',
            description:
              'Specifies the default OTLP (OpenTelemetry Protocol) endpoint for exporting traces, metrics, and logs. This can be overridden for metrics if `OTEL_METRICS_EXPORTER_OTLP_ENDPOINT` is set, and for logs if `OTEL_LOGS_EXPORTER_OTLP_ENDPOINT` is set.',
            type: 'Input',
            defaultValue: 'http://localhost:4317',
          },
          {
            name: 'OTEL_METRICS_EXPORTER_OTLP_ENDPOINT',
            description:
              'Specifies the dedicated OTLP endpoint for exporting OpenTelemetry metrics. If not set, it defaults to the value of `OTEL_EXPORTER_OTLP_ENDPOINT`. This is useful when separate endpoints for traces and metrics are used.',
            type: 'Input',
          },
          {
            name: 'OTEL_LOGS_EXPORTER_OTLP_ENDPOINT',
            description:
              'Specifies the dedicated OTLP endpoint for exporting OpenTelemetry logs. If not set, it defaults to the value of `OTEL_EXPORTER_OTLP_ENDPOINT`. This is useful when separate endpoints for logs, traces, and metrics are used.',
            type: 'Input',
          },
          {
            name: 'OTEL_EXPORTER_OTLP_INSECURE',
            description:
              'If set to `True`, the OTLP exporter will use an insecure connection (e.g., HTTP for gRPC) for traces. For metrics, its behavior is governed by `OTEL_METRICS_EXPORTER_OTLP_INSECURE`, and for logs by `OTEL_LOGS_EXPORTER_OTLP_INSECURE`.',
            type: 'CheckBox',
          },
          {
            name: 'OTEL_METRICS_EXPORTER_OTLP_INSECURE',
            description:
              'If set to `True`, the OTLP exporter will use an insecure connection for metrics. If not specified, it uses the value of `OTEL_EXPORTER_OTLP_INSECURE`.',
            type: 'CheckBox',
          },
          {
            name: 'OTEL_LOGS_EXPORTER_OTLP_INSECURE',
            description:
              'If set to `True`, the OTLP exporter will use an insecure connection for logs. If not specified, it uses the value of `OTEL_EXPORTER_OTLP_INSECURE`.',
            type: 'CheckBox',
          },
          {
            name: 'OTEL_SERVICE_NAME',
            description:
              'Sets the service name that will be reported to your OpenTelemetry collector or observability platform. This helps identify your Open WebUI instance.',
            type: 'Input',
            defaultValue: 'open-webui',
          },
          {
            name: 'OTEL_RESOURCE_ATTRIBUTES',
            description:
              'Allows you to define additional resource attributes to be attached to all telemetry data, in a comma-separated `key1=val1,key2=val2` format.',
            type: 'Input',
          },
          {
            name: 'OTEL_TRACES_SAMPLER',
            description:
              'Configures the sampling strategy for OpenTelemetry traces. This determines which traces are collected and exported to reduce data volume.',
            type: 'Input',
            defaultValue: 'parentbased_always_on',
          },
          {
            name: 'OTEL_BASIC_AUTH_USERNAME',
            description:
              'Sets the username for basic authentication with the default OTLP endpoint. This applies to traces, and by default, to metrics and logs unless overridden by their specific authentication variables.',
            type: 'Input',
          },
          {
            name: 'OTEL_BASIC_AUTH_PASSWORD',
            description:
              'Sets the password for basic authentication with the default OTLP endpoint. This applies to traces, and by default, to metrics and logs unless overridden by their specific authentication variables.',
            type: 'Input',
          },
          {
            name: 'OTEL_METRICS_BASIC_AUTH_USERNAME',
            description:
              'Sets the username for basic authentication specifically for the OTLP metrics endpoint. If not specified, it uses the value of `OTEL_BASIC_AUTH_USERNAME`.',
            type: 'Input',
          },
          {
            name: 'OTEL_METRICS_BASIC_AUTH_PASSWORD',
            description:
              'Sets the password for basic authentication specifically for the OTLP metrics endpoint. If not specified, it uses the value of `OTEL_BASIC_AUTH_PASSWORD`.',
            type: 'Input',
          },
          {
            name: 'OTEL_LOGS_BASIC_AUTH_USERNAME',
            description:
              'Sets the username for basic authentication specifically for the OTLP logs endpoint. If not specified, it uses the value of `OTEL_BASIC_AUTH_USERNAME`.',
            type: 'Input',
          },
          {
            name: 'OTEL_LOGS_BASIC_AUTH_PASSWORD',
            description:
              'Sets the password for basic authentication specifically for the OTLP logs endpoint. If not specified, it uses the value of `OTEL_BASIC_AUTH_PASSWORD`.',
            type: 'Input',
          },
          {
            name: 'OTEL_OTLP_SPAN_EXPORTER',
            description:
              'Specifies the default protocol for exporting OpenTelemetry traces (gRPC or HTTP). This can be overridden for metrics if `OTEL_METRICS_OTLP_SPAN_EXPORTER` is set, and for logs if `OTEL_LOGS_OTLP_SPAN_EXPORTER` is set.',
            type: 'DropDown',
            values: ['grpc', 'http'],
            defaultValue: 'grpc',
          },
          {
            name: 'OTEL_METRICS_OTLP_SPAN_EXPORTER',
            description:
              'Specifies the protocol for exporting OpenTelemetry metrics (gRPC or HTTP). If not specified, it uses the value of `OTEL_OTLP_SPAN_EXPORTER`.',
            type: 'DropDown',
            values: ['grpc', 'http'],
          },
          {
            name: 'OTEL_LOGS_OTLP_SPAN_EXPORTER',
            description:
              'Specifies the protocol for exporting OpenTelemetry logs (gRPC or HTTP). If not specified, it uses the value of `OTEL_OTLP_SPAN_EXPORTER`.',
            type: 'DropDown',
            values: ['grpc', 'http'],
          },
        ],
      },
      {
        section: 'Database Pool',
        items: [
          {
            name: 'DATABASE_URL',
            description: 'Specifies the database URL to connect to.',
            type: 'Input',
            defaultValue: 'sqlite:///${DATA_DIR}/webui.db',
          },
          {
            name: 'DATABASE_SCHEMA',
            description: 'Specifies the database schema to connect to.',
            type: 'Input',
          },
          {
            name: 'DATABASE_POOL_SIZE',
            description: 'Specifies the pooling strategy and size of the database pool.',
            type: 'Input',
          },
          {
            name: 'DATABASE_POOL_MAX_OVERFLOW',
            description: 'Specifies the database pool max overflow.',
            type: 'Input',
            defaultValue: 0,
          },
          {
            name: 'DATABASE_POOL_TIMEOUT',
            description: 'Specifies the database pool timeout in seconds to get a connection.',
            type: 'Input',
            defaultValue: 30,
          },
          {
            name: 'DATABASE_POOL_RECYCLE',
            description: 'Specifies the database pool recycle time in seconds.',
            type: 'Input',
            defaultValue: 3600,
          },
          {
            name: 'DATABASE_ENABLE_SQLITE_WAL',
            description:
              'Enables or disables SQLite WAL (Write-Ahead Logging) mode. When enabled, SQLite transactions can be managed more efficiently, allowing multiple readers and one writer concurrently, which can improve database performance, especially under high concurrency. **This setting only applies to SQLite databases.**',
            type: 'CheckBox',
          },
          {
            name: 'DATABASE_DEDUPLICATE_INTERVAL',
            description:
              "Sets a time interval in seconds during which certain database write operations (e.g., updating a user's `last_active_at` timestamp) will be deduplicated. If a write operation is attempted within this interval for the same entity, it will be skipped. A value of `0.0` disables deduplication. Enabling this can reduce write conflicts and improve performance, but may result in less real-time accuracy for the affected fields.",
            type: 'Input',
            defaultValue: 0.0,
          },
        ],
      },
      {
        section: 'Redis',
        items: [
          {
            name: 'REDIS_URL',
            description: 'Specifies the URL of the Redis instance or cluster host for storing application state.',
            type: 'Input',
          },
          {
            name: 'REDIS_SENTINEL_HOSTS',
            description:
              'Comma-separated list of Redis Sentinels for app state. If specified, the "hostname" in `REDIS_URL` will be interpreted as the Sentinel service name.',
            type: 'Input',
          },
          {
            name: 'REDIS_SENTINEL_PORT',
            description: 'Sentinel port for app state Redis.',
            type: 'Input',
            defaultValue: 26379,
          },
          {
            name: 'REDIS_CLUSTER',
            description:
              'Connect to a Redis Cluster instead of a single instance or using Redis Sentinels. If `True`, `REDIS_URL` must also be defined.',
            type: 'CheckBox',
          },
          {
            name: 'REDIS_KEY_PREFIX',
            description:
              'Customizes the Redis key prefix used for storing configuration values. This allows multiple Open WebUI instances to share the same Redis instance without key conflicts. When operating in Redis cluster mode, the prefix is formatted as `{prefix}:` (e.g., `{open-webui}:config:*`) to enable multi-key operations on configuration keys within the same hash slot.',
            type: 'Input',
            defaultValue: 'open-webui',
          },
          {
            name: 'ENABLE_WEBSOCKET_SUPPORT',
            description: 'Enables websocket support in Open WebUI.',
            type: 'CheckBox',
          },
          {
            name: 'WEBSOCKET_MANAGER',
            description: 'Specifies the websocket manager to use (in this case, Redis).',
            type: 'Input',
            defaultValue: 'redis',
          },
          {
            name: 'WEBSOCKET_REDIS_URL',
            description:
              'Specifies the URL of the Redis instance or cluster host for websocket communication. It is distinct from `REDIS_URL` and in practice, it is recommended to set both.',
            type: 'Input',
            defaultValue: '${REDIS_URL}',
          },
          {
            name: 'WEBSOCKET_SENTINEL_HOSTS',
            description:
              'Comma-separated list of Redis Sentinels for websocket. If specified, the "hostname" in `WEBSOCKET_REDIS_URL` will be interpreted as the Sentinel service name.',
            type: 'Input',
          },
          {
            name: 'WEBSOCKET_SENTINEL_PORT',
            description: 'Sentinel port for websocket Redis.',
            type: 'Input',
            defaultValue: 26379,
          },
          {
            name: 'WEBSOCKET_REDIS_CLUSTER',
            description:
              'Specifies that websocket should communicate with a Redis Cluster instead of a single instance or using Redis Sentinels. If `True`, `WEBSOCKET_REDIS_URL` and/or `REDIS_URL` must also be defined.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Uvicorn Settings',
        items: [
          {
            name: 'UVICORN_WORKERS',
            description:
              'Controls the number of worker processes that Uvicorn spawns to handle requests. Each worker runs its own instance of the application in a separate process.',
            type: 'Input',
            defaultValue: 1,
          },
        ],
      },
      {
        section: 'Cache Settings',
        items: [
          {
            name: 'CACHE_CONTROL',
            description:
              'Sets the Cache-Control header for all HTTP responses. Supports standard directives like `public`, `private`, `no-cache`, `no-store`, `must-revalidate`, `max-age=seconds`, etc. If an invalid value is provided, defaults to `"no-store, max-age=0"` (no caching).',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Proxy Settings',
        items: [
          {
            name: 'http_proxy',
            description: 'Sets the URL for the HTTP proxy.',
            type: 'Input',
          },
          {
            name: 'https_proxy',
            description: 'Sets the URL for the HTTPS proxy.',
            type: 'Input',
          },
          {
            name: 'no_proxy',
            description:
              'Lists domain extensions (or IP addresses) for which the proxy should not be used, separated by commas.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'Install Required Python Packages',
        items: [
          {
            name: 'PIP_OPTIONS',
            description:
              'Specifies additional command-line options that pip should use when installing packages. For example, you can include flags such as `--upgrade`, `--user`, or `--no-cache-dir` to control the installation process.',
            type: 'Input',
          },
          {
            name: 'PIP_PACKAGE_INDEX_OPTIONS',
            description:
              'Defines custom package index behavior for pip. This can include specifying additional or alternate index URLs (e.g., `--extra-index-url`), authentication credentials, or other parameters to manage how packages are retrieved from different locations.',
            type: 'Input',
          },
        ],
      },
    ],
  },
];

export default openArguments;
