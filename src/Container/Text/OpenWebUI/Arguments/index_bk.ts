/* eslint max-len: 0 */

import {ArgumentsData} from '../../../../../../src/common/types/plugins/modules';
import appBackend from './AppBackend';
import securityVariables from './SecurityVariables';
import vectorDatabase from './VectorDatabase';

const openArguments: ArgumentsData = [
  appBackend,
  securityVariables,
  vectorDatabase,
  {
    category: 'RAG Content Extraction Engine',
    items: [
      {
        name: 'CONTENT_EXTRACTION_ENGINE',
        description: 'Sets the content extraction engine to use for document ingestion.',
        type: 'DropDown',
        values: ['', 'external', 'tika', 'docling', 'document_intelligence', 'mistral_ocr', 'mineru'],
      },
      {
        name: 'MISTRAL_OCR_API_KEY',
        description: 'Specifies the Mistral OCR API key to use.',
        type: 'Input',
      },
      {
        name: 'MISTRAL_OCR_API_BASE_URL',
        description:
          'Configures custom Mistral OCR API endpoints for flexible deployment options, allowing users to point to self-hosted or alternative Mistral OCR instances.',
        type: 'Input',
        defaultValue: 'https://api.mistral.ai/v1',
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
        description:
          'Specifies the URL for the Docling server. Requires Docling version 2.0.0 or later for full compatibility with the new parameter-based configuration system.',
        type: 'Input',
        defaultValue: 'http://docling:5001',
      },
      {
        name: 'DOCLING_API_KEY',
        description:
          'Sets the API key for authenticating with the Docling server. Required when the Docling server has authentication enabled.',
        type: 'Input',
      },
      {
        name: 'DOCLING_PARAMS',
        description:
          'Specifies all Docling processing parameters in JSON format. This is the primary configuration method for Docling processing options. All previously individual Docling settings are now configured through this single JSON object.',
        type: 'Input',
      },
      {
        name: 'MINERU_API_TIMEOUT',
        description: 'Sets the timeout in seconds for MinerU API requests during document processing.',
        type: 'Input',
        defaultValue: 300,
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
        values: ['', 'ollama', 'openai', 'azure_openai'],
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
        name: 'ENABLE_RAG_HYBRID_SEARCH_ENRICHED_TEXTS',
        description:
          'Enables enriched text processing for hybrid search. When enabled, additional text preprocessing and enrichment techniques are applied to improve search quality and relevance in hybrid search mode.',
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
        name: 'CHUNK_MIN_SIZE_TARGET',
        description:
          'Chunks smaller than this threshold will be intelligently merged with neighboring chunks when possible. This helps prevent tiny, low-quality fragments that can hurt retrieval performance and waste embedding resources. This feature only works when `ENABLE_MARKDOWN_HEADER_TEXT_SPLITTER` is enabled. Set to `0` to disable merging.',
        type: 'Input',
        defaultValue: 0,
      },
      {
        name: 'ENABLE_MARKDOWN_HEADER_TEXT_SPLITTER',
        description:
          'Enables markdown header text splitting as a preprocessing step before character or token splitting. When enabled, documents are first split by markdown headers (h1-h6), then the resulting chunks are further processed by the configured text splitter (`RAG_TEXT_SPLITTER`). This helps preserve document structure and context across chunks.',
        type: 'CheckBox',
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
        name: 'SENTENCE_TRANSFORMERS_CROSS_ENCODER_SIGMOID_ACTIVATION_FUNCTION',
        description:
          'When enabled (default), applies sigmoid normalization to local CrossEncoder reranking scores to ensure they fall within the 0-1 range. This allows the relevance threshold setting to work correctly with models like MS MARCO that output raw logits.',
        type: 'CheckBox',
      },
      {
        name: 'RAG_EXTERNAL_RERANKER_TIMEOUT',
        description:
          'Sets the timeout in seconds for external reranker API requests during RAG document retrieval. Leave empty to use default timeout behavior.',
        type: 'Input',
      },
      {
        name: 'RAG_EXTERNAL_RERANKER_URL',
        description: 'Sets the **full URL** for the external reranking API.',
        type: 'Input',
      },
      {
        name: 'RAG_EXTERNAL_RERANKER_API_KEY',
        description: 'Sets the API key for the external reranking API.',
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
        description:
          'Controls how many text chunks are embedded in a single API request when using external embedding providers (Ollama, OpenAI, or Azure OpenAI). Higher values (20-100+; max 16000 (not recommended)) may process documents faster by sending less, but larger API requests. Some external APIs do not support batching or sending more than 1 chunk per request. In such case you must leave this at `1`. Default is 1 (safest option if the API does not support batching / more than 1 chunk per request). This setting only applies to external embedding engines, not the default SentenceTransformers engine.',
        type: 'Input',
        defaultValue: 1,
      },
      {
        name: 'ENABLE_ASYNC_EMBEDDING',
        description:
          'Runs embedding tasks asynchronously (parallelized) for maximum performance. Only works for Ollama, OpenAI and Azure OpenAI, does not affect sentence transformer setups.',
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
        name: 'RAG_OLLAMA_API_KEY',
        description: 'Sets the API key for Ollama API used in RAG models.',
        type: 'Input',
      },
      {
        name: 'RAG_AZURE_OPENAI_BASE_URL',
        description:
          'Sets the base URL for Azure OpenAI Services when using Azure OpenAI for RAG embeddings. Should be in the format `https://{your-resource-name}.openai.azure.com`.',
        type: 'Input',
      },
      {
        name: 'RAG_AZURE_OPENAI_API_KEY',
        description: 'Sets the API key for Azure OpenAI Services when using Azure OpenAI for RAG embeddings.',
        type: 'Input',
      },
      {
        name: 'RAG_AZURE_OPENAI_API_VERSION',
        description:
          'Sets the API version for Azure OpenAI Services when using Azure OpenAI for RAG embeddings. Common values include `2023-05-15`, `2023-12-01-preview`, or `2024-02-01`.',
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
        name: 'ENABLE_QUERIES_CACHE',
        description:
          'Enables request-scoped caching of LLM-generated search queries. When enabled, queries generated for web search are **cached** and automatically **reused** for file/knowledge base retrieval within the same request. This **eliminates duplicate LLM calls** when both web search and RAG are active, **reducing token usage and latency** while maintaining search quality. It is highly recommended to enable this especially in larger setups.',
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
        name: 'RAG_FULL_CONTEXT',
        description: 'Specifies whether to use the full context for RAG.',
        type: 'CheckBox',
      },
      {
        name: 'RAG_SYSTEM_CONTEXT',
        description:
          'When enabled, injects RAG context into the **system message** instead of the user message. This is highly recommended for optimizing performance when using models that support **KV prefix caching** or **Prompt Caching**. This includes local engines (like Ollama, llama.cpp, or vLLM) and cloud providers / Model-as-a-Service providers (like OpenAI and Vertex AI). By placing the context in the system message, it remains at a stable position at the start of the conversation, allowing the cache to persist across multiple turns. When disabled (default), context is injected into the user message, which shifts position each turn and invalidates the cache.',
        type: 'CheckBox',
      },
      {
        name: 'ENABLE_RAG_LOCAL_WEB_FETCH',
        description:
          'Controls whether RAG web fetch operations can access URLs that resolve to private/local network IP addresses.',
        type: 'CheckBox',
      },
      {
        name: 'WEB_FETCH_FILTER_LIST',
        description:
          'Configures additional URL filtering rules for web fetch operations to prevent Server-Side Request Forgery (SSRF) attacks. The system includes a default blocklist that protects against access to cloud metadata endpoints (AWS, Google Cloud, Azure, Alibaba Cloud). Entries without a ! prefix are treated as an allow list (only these domains are permitted), while entries with a ! prefix are added to the block list (these domains are always denied). The default blocklist includes !169.254.169.254, !fd00:ec2::254, !metadata.google.internal, !metadata.azure.com, and !100.100.100.200. Custom entries are merged with the default blocklist.',
        type: 'Input',
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
        name: 'DOCUMENT_INTELLIGENCE_MODEL',
        description: 'Specifies the model for document intelligence.',
        type: 'Input',
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
            description: 'Enables or disables the Microsoft OneDrive integration feature globally.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_ONEDRIVE_PERSONAL',
            description:
              'Controls whether the "Personal OneDrive" option appears in the attachment menu. Requires `ONEDRIVE_PERSONAL_CLIENT_ID` to be configured.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_ONEDRIVE_BUSINESS',
            description:
              'Controls whether the "Work/School OneDrive" option appears in the attachment menu. Requires `ONEDRIVE_CLIENT_ID` to be configured.',
            type: 'CheckBox',
          },
          {
            name: 'ONEDRIVE_CLIENT_ID',
            description:
              'Generic environment variable for the OneDrive Client ID. You should rather use the specific `ONEDRIVE_CLIENT_ID_PERSONAL` or `ONEDRIVE_CLIENT_ID_BUSINESS` variables. This exists as a legacy option for backwards compatibility.',
            type: 'Input',
          },
          {
            name: 'ONEDRIVE_CLIENT_ID_PERSONAL',
            description:
              'Specifies the Application (client) ID for the **Personal OneDrive** integration. This requires a separate Azure App Registration configured to support personal Microsoft accounts. **Do not put the business OneDrive client ID here!**',
            type: 'Input',
          },
          {
            name: 'ONEDRIVE_CLIENT_ID_BUSINESS',
            description:
              'Specifies the Application (client) ID for the **Work/School (Business) OneDrive** integration. This requires a separate Azure App Registration configured to support personal Microsoft accounts. **Do not put the personal OneDrive client ID here!**',
            type: 'Input',
          },
          {
            name: 'ONEDRIVE_SHAREPOINT_URL',
            description:
              'Specifies the root SharePoint site URL for the work/school integration, e.g., `https://companyname.sharepoint.com`.',
            type: 'Input',
          },
          {
            name: 'ONEDRIVE_SHAREPOINT_TENANT_ID',
            description:
              'Specifies the Directory (tenant) ID for the work/school integration. This is obtained from your business-focused Azure App Registration.',
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
        name: 'WEB_SEARCH_DOMAIN_FILTER_LIST',
        description:
          'Comma-separated list of domains to filter web search results. Domains prefixed with `!` are blocked; domains without prefix create an allowlist (only those domains permitted).',
        type: 'Input',
      },
      {
        name: 'WEB_SEARCH_CONCURRENT_REQUESTS',
        description:
          'Limits the number of concurrent search requests to the search engine provider. Set to `0` for unlimited concurrency (default). Set to `1` for sequential execution to prevent rate limiting errors (e.g., Brave Free Tier).',
        type: 'Input',
        defaultValue: 0,
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
        name: 'BYPASS_WEB_SEARCH_WEB_LOADER',
        description:
          'Bypasses the web loader when performing web search. When enabled, only snippets from the search engine are used, and the full page content is not fetched.',
        type: 'CheckBox',
      },
      {
        name: 'SEARXNG_LANGUAGE',
        description: 'This variable is used in the request to searxng as the "search language" (arguement "language").',
        type: 'Input',
        defaultValue: 'all',
      },
      {
        name: 'DDGS_BACKEND',
        description: 'Specifies the backend to be used by the DDGS engine.',
        type: 'DropDown',
        values: [
          'auto',
          'bing',
          'brave',
          'duckduckgo',
          'google',
          'grokipedia',
          'mojeek',
          'wikipedia',
          'yahoo',
          'yandex',
        ],
        defaultValue: 'auto',
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
        name: 'OLLAMA_CLOUD_WEB_SEARCH_API_KEY',
        description: 'Sets the Ollama Cloud Web Search API Key.',
        type: 'Input',
      },
      {
        name: 'AZURE_AI_SEARCH_API_KEY',
        description:
          'API key (query key or admin key) for authenticating with Azure AI Search service. Required for using Azure AI Search as a web search provider.',
        type: 'Input',
      },
      {
        name: 'AZURE_AI_SEARCH_ENDPOINT',
        description: 'Azure Search service endpoint URL. Specifies which Azure Search service instance to connect to.',
        type: 'Input',
      },
      {
        name: 'AZURE_AI_SEARCH_INDEX_NAME',
        description:
          'Name of the search index to query within your Azure Search service. Different indexes can contain different types of searchable content.',
        type: 'Input',
      },
      {
        name: 'YACY_QUERY_URL',
        description:
          "Sets the query URL for YaCy search engine integration. Should point to a YaCy instance's search API endpoint.",
        type: 'Input',
      },
      {
        name: 'YACY_USERNAME',
        description: 'Specifies the username for authenticated access to YaCy search engine.',
        type: 'Input',
      },
      {
        name: 'YACY_PASSWORD',
        description: 'Specifies the password for authenticated access to YaCy search engine.',
        type: 'Input',
      },
      {
        name: 'EXTERNAL_WEB_SEARCH_URL',
        description: 'Specifies the URL of an external web search service API endpoint for custom search integrations.',
        type: 'Input',
      },
      {
        name: 'EXTERNAL_WEB_SEARCH_API_KEY',
        description: 'Sets the API key for authenticating with the external web search service.',
        type: 'Input',
      },
      {
        name: 'EXTERNAL_WEB_LOADER_URL',
        description:
          'Specifies the URL of an external web content loader service for fetching and processing web pages.',
        type: 'Input',
      },
      {
        name: 'EXTERNAL_WEB_LOADER_API_KEY',
        description: 'Sets the API key for authenticating with the external web loader service.',
        type: 'Input',
      },
      {
        name: 'PERPLEXITY_API_KEY',
        description: 'Sets the API key for Perplexity API.',
        type: 'Input',
      },
      {
        name: 'PERPLEXITY_SEARCH_API_URL',
        description:
          "Configures the API endpoint for Perplexity Search. Allows using custom or self-hosted Perplexity-compatible API endpoints (such as LiteLLM's `/search` endpoint) instead of the hardcoded default for the official Perplexity API.",
        type: 'Input',
        defaultValue: 'https://api.perplexity.ai/search',
      },
      {
        name: 'PERPLEXITY_MODEL',
        description:
          'Specifies the Perplexity AI model to use for search queries when using `Perplexity` as the web search engine.',
        type: 'Input',
        defaultValue: 'sonar',
      },
      {
        name: 'PERPLEXITY_SEARCH_CONTEXT_USAGE',
        description:
          'Controls the amount of search context used by Perplexity AI. Options typically include `low`, `medium`, `high`.',
        type: 'Input',
        defaultValue: 'medium',
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
            values: ['safe_web', 'playwright', 'firecrawl', 'tavily', 'external'],
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
            name: 'FIRECRAWL_TIMEOUT',
            description:
              'Specifies the timeout in milliseconds for Firecrawl requests. If not set, the default Firecrawl timeout is used.',
            type: 'Input',
          },
          {
            name: 'PLAYWRIGHT_TIMEOUT',
            description: 'Specifies the timeout for Playwright requests.',
            type: 'Input',
          },
          {
            name: 'WEB_LOADER_TIMEOUT',
            description:
              'Specifies the request timeout in seconds for the SafeWebBaseLoader when scraping web pages. Without this setting, web scraping operations can hang indefinitely on slow or unresponsive pages. Recommended values are 10–30 seconds depending on your network conditions.',
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
            name: 'WHISPER_COMPUTE_TYPE',
            description:
              'Sets the compute type for Whisper model inference. Defaults to `int8` for CPU and `float16` for CUDA (with fallback to `int8/int8_float16`).',
            type: 'Input',
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
          {
            name: 'WHISPER_MULTILINGUAL',
            description:
              'Toggles whether to use the multilingual Whisper model. When set to `False`, the system will use the English-only model for better performance in English-centric tasks. When `True`, it supports multiple languages.',
            type: 'CheckBox',
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
            name: 'IMAGE_GENERATION_MODEL',
            description: 'Default model to use for image generation (e.g., `dall-e-3`, `gemini-2.0-flash-exp`).',
            type: 'Input',
          },
          {
            name: 'ENABLE_IMAGE_PROMPT_GENERATION',
            description:
              'Enables or disables automatic enhancement of user prompts for better image generation results.',
            type: 'CheckBox',
          },
          {
            name: 'IMAGE_PROMPT_GENERATION_PROMPT_TEMPLATE',
            description: 'Specifies the template to use for generating image prompts.',
            type: 'Input',
          },
          {
            name: 'IMAGE_SIZE',
            description:
              'Sets the default output dimensions for generated images in WIDTHxHEIGHT format (e.g., `1024x1024`).',
            type: 'Input',
            defaultValue: '512x512',
          },
          {
            name: 'IMAGE_STEPS',
            description:
              'Sets the default iteration steps for image generation. Used for ComfyUI and AUTOMATIC1111 engines.',
            type: 'Input',
            defaultValue: 50,
          },
        ],
      },
      {
        section: 'Image Editing',
        items: [
          {
            name: 'ENABLE_IMAGE_EDIT',
            description:
              'When disabled, Image Editing will not be used and instead, images will be created only using the image generation engine.',
            type: 'CheckBox',
          },
          {
            name: 'IMAGE_EDIT_ENGINE',
            description:
              'Configures the engine used for image editing operations, enabling modification of existing images using text prompts.',
            type: 'DropDown',
            values: ['openai', 'gemini', 'comfyui'],
            defaultValue: 'openai',
          },
          {
            name: 'IMAGE_EDIT_MODEL',
            description:
              'Specifies the model to use for image editing operations within the selected engine (e.g., `dall-e-2`, `gemini-2.5-flash`).',
            type: 'Input',
          },
          {
            name: 'IMAGE_EDIT_SIZE',
            description:
              'Defines the output dimensions for edited images in WIDTHxHEIGHT format (e.g., `1024x1024`). Leave empty to preserve original dimensions.',
            type: 'Input',
          },
        ],
      },
      {
        section: 'AUTOMATIC1111',
        items: [
          {
            name: 'AUTOMATIC1111_BASE_URL',
            description: "Specifies the URL to AUTOMATIC1111's Stable Diffusion API (e.g., `http://127.0.0.1:7860`).",
            type: 'Input',
          },
          {
            name: 'AUTOMATIC1111_API_AUTH',
            description: 'Sets the AUTOMATIC1111 API authentication credentials if required.',
            type: 'Input',
          },
          {
            name: 'AUTOMATIC1111_PARAMS',
            description:
              'Additional parameters in JSON format to pass to AUTOMATIC1111 API requests (e.g., `{"cfg_scale": 7, "sampler_name": "Euler a", "scheduler": "normal"}`).',
            type: 'Input',
          },
        ],
      },
      {
        section: 'ComfyUI',
        items: [
          {
            name: 'COMFYUI_BASE_URL',
            description: 'Specifies the URL to the ComfyUI image generation API (e.g., `http://127.0.0.1:8188`).',
            type: 'Input',
          },
          {
            name: 'COMFYUI_API_KEY',
            description: 'Sets the API key for ComfyUI authentication.',
            type: 'Input',
          },
          {
            name: 'COMFYUI_WORKFLOW',
            description:
              'Defines the ComfyUI workflow configuration in JSON format. Export from ComfyUI using "Save (API Format)" to ensure compatibility.',
            type: 'Input',
          },
          {
            name: 'COMFYUI_WORKFLOW_NODES',
            description:
              'Specifies the ComfyUI workflow node mappings for image generation, defining which nodes handle prompt, model, dimensions, and other parameters. Configured automatically via the admin UI.',
            type: 'Input',
          },
          {
            name: 'IMAGES_EDIT_COMFYUI_BASE_URL',
            description:
              'Configures the ComfyUI base URL for image editing operations, enabling self-hosted ComfyUI workflows for image manipulation.',
            type: 'Input',
          },
          {
            name: 'IMAGES_EDIT_COMFYUI_API_KEY',
            description:
              'Provides authentication for ComfyUI image editing API requests when the ComfyUI instance requires API key authentication.',
            type: 'Input',
          },
          {
            name: 'IMAGES_EDIT_COMFYUI_WORKFLOW',
            description:
              'Defines the ComfyUI workflow configuration in JSON format for image editing operations. Must include nodes for image input, prompt, and output. Export from ComfyUI using "Save (API Format)".',
            type: 'Input',
          },
          {
            name: 'IMAGES_EDIT_COMFYUI_WORKFLOW_NODES',
            description:
              'Specifies the ComfyUI workflow node mappings for image editing, defining which nodes handle image input, prompt, model, dimensions, and other parameters. Configured automatically via the admin UI.',
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
          {
            name: 'IMAGES_GEMINI_ENDPOINT_METHOD',
            description:
              'Specifies the Gemini API endpoint method for image generation, supporting both legacy Imagen models and newer Gemini models with image generation capabilities.',
            type: 'DropDown',
            values: ['predict', 'generateContent'],
          },
          {
            name: 'IMAGES_EDIT_GEMINI_API_BASE_URL',
            description: 'Configures the Gemini API base URL for image editing operations with Gemini models.',
            type: 'Input',
          },
          {
            name: 'IMAGES_EDIT_GEMINI_API_KEY',
            description: 'Provides authentication for Gemini image editing API requests.',
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
          },
          {
            name: 'IMAGES_OPENAI_API_VERSION',
            description:
              'Optional setting. If provided it sets the `api-version` query parameter when calling the image generation endpoint. Required for Azure OpenAI deployments.',
            type: 'Input',
          },
          {
            name: 'IMAGES_OPENAI_API_KEY',
            description: 'Sets the API key to use for DALL-E image generation.',
            type: 'Input',
          },
          {
            name: 'IMAGES_OPENAI_API_PARAMS',
            description:
              'Additional parameters for OpenAI image generation API in JSON format. Allows customization of API-specific settings such as quality parameters for DALL-E models (e.g., `{"quality": "hd"}` for dall-e-3).',
            type: 'Input',
          },
          {
            name: 'IMAGES_EDIT_OPENAI_API_BASE_URL',
            description:
              'Configures the OpenAI API base URL specifically for image editing operations, allowing separate endpoints from image generation.',
            type: 'Input',
          },
          {
            name: 'IMAGES_EDIT_OPENAI_API_VERSION',
            description:
              'Specifies the OpenAI API version for image editing, enabling support for Azure OpenAI deployments with versioned endpoints.',
            type: 'Input',
          },
          {
            name: 'IMAGES_EDIT_OPENAI_API_KEY',
            description:
              'Provides authentication for OpenAI image editing API requests, with support for separate keys from image generation.',
            type: 'Input',
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
            name: 'ENABLE_OAUTH_WITHOUT_EMAIL',
            description:
              'Enables authentication with OpenID Connect (OIDC) providers that do not support or expose an email scope. When enabled, Open WebUI will create and manage user accounts without requiring an email address from the OAuth provider.',
            type: 'CheckBox',
          },
          {
            name: 'OAUTH_UPDATE_PICTURE_ON_LOGIN',
            description: 'If enabled, updates the local user profile picture with the OAuth-provided picture on login.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_OAUTH_ID_TOKEN_COOKIE',
            description:
              'Controls whether the **legacy** `oauth_id_token` cookie (unsafe, not recommended, token can go stale/orphaned) is set in the browser upon a successful OAuth login. This is provided for **backward compatibility** with custom tools or older versions that might rely on scraping this cookie. **The new, recommended approach is to use the server-side session management.**',
            type: 'CheckBox',
          },
          {
            name: 'OAUTH_CLIENT_INFO_ENCRYPTION_KEY',
            description:
              'Specifies the secret key used to encrypt and decrypt OAuth client tokens stored server-side in the database. This is a critical security component for OAuth client tokens. If not set, it defaults to using the main `WEBUI_SECRET_KEY`, but it is highly recommended to set it to a unique, securely generated value for production environments. `OAUTH_CLIENT_INFO_ENCRYPTION_KEY` is used in conjunction with OAuth 2.1 MCP server authentication.',
            type: 'Input',
          },
          {
            name: 'OAUTH_SESSION_TOKEN_ENCRYPTION_KEY',
            description:
              'Specifies the secret key used to encrypt and decrypt OAuth tokens stored server-side in the database. This is a critical security component for protecting user credentials at rest. If not set, it defaults to using the main `WEBUI_SECRET_KEY`, but it is highly recommended to set it to a unique, securely generated value for production environments.',
            type: 'Input',
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
          {
            name: 'MICROSOFT_CLIENT_LOGIN_BASE_URL',
            description:
              'Sets the base login URL for Microsoft OAuth authentication. Allows configuration of alternative login endpoints for government clouds or custom deployments.',
            type: 'Input',
            defaultValue: 'https://login.microsoftonline.com',
          },
          {
            name: 'MICROSOFT_CLIENT_PICTURE_URL',
            description:
              'Specifies the Microsoft Graph API endpoint for retrieving user profile pictures during OAuth authentication.',
            type: 'Input',
            defaultValue: 'https://graph.microsoft.com/v1.0/me/photo/$value',
          },
        ],
      },
      {
        section: 'Feishu',
        items: [
          {
            name: 'FEISHU_CLIENT_ID',
            description: 'Sets the client ID for Feishu OAuth.',
            type: 'Input',
          },
          {
            name: 'FEISHU_CLIENT_SECRET',
            description: 'Sets the client secret for Feishu OAuth.',
            type: 'Input',
          },
          {
            name: 'FEISHU_CLIENT_SCOPE',
            description: 'Specifies the scope for Feishu OAuth authentication.',
            type: 'Input',
            defaultValue: 'contact:user.base:readonly',
          },
          {
            name: 'FEISHU_CLIENT_REDIRECT_URI',
            description: 'Sets the redirect URI for Feishu OAuth.',
            type: 'Input',
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
            name: 'ENABLE_OAUTH_GROUP_CREATION',
            description:
              "When enabled, groups from OAuth claims that don't exist in Open WebUI will be automatically created.",
            type: 'CheckBox',
          },
          {
            name: 'OAUTH_BLOCKED_GROUPS',
            description:
              'JSON array of group names that are blocked from accessing the application. Users belonging to these groups will be denied access even if they have valid OAuth credentials.',
            type: 'Input',
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
            name: 'OAUTH_ROLES_SEPARATOR',
            description:
              'Allows custom role separators for for splitting the `OAUTH_*_ROLES` variables. Meant for OAuth roles that contain commas; useful for roles specified in LDAP syntax or other systems where commas are part of role names. If the claim is a string and contains the separator, it will be also split by that separator.',
            type: 'Input',
            defaultValue: ',',
          },
          {
            name: 'OAUTH_GROUPS_SEPARATOR',
            description:
              'Specifies the delimiter used to parse multiple group names from the OAuth group claim. This separator is used when the identity provider returns group memberships as a delimited string rather than an array. Useful when integrating with systems that use non-standard separators or when group names themselves contain commas.',
            type: 'Input',
            defaultValue: ';',
          },
          {
            name: 'OAUTH_ALLOWED_DOMAINS',
            description: 'Specifies the allowed domains for OAuth authentication. (e.g. "example1.com,example2.com").',
            type: 'Input',
            defaultValue: '*',
          },
          {
            name: 'OAUTH_AUDIENCE',
            description:
              "Specifies an audience parameter passed to the OAuth provider's authorization endpoint during login. Some providers (such as Auth0 and Ory) use this value to determine the type of access token returned—without it, providers typically return an opaque token, while with it, they return a JWT that can be decoded and validated. This parameter is not part of the official OAuth/OIDC spec for authorization endpoints but is widely supported by some providers.",
            type: 'Input',
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
          {
            name: 'USER_PERMISSIONS_FEATURES_MEMORIES',
            description: 'Enables or disables user permission to use the memory feature.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_FEATURES_FOLDERS',
            description: 'Enables or disables the visibility of the Folders feature (chat sidebar) to users.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_FEATURES_NOTES',
            description: 'Enables or disables the visibility of the Notes feature to users.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_FEATURES_CHANNELS',
            description: 'Enables or disables the ability for users to create their own group channels.',
            type: 'Input',
          },
          {
            name: 'USER_PERMISSIONS_FEATURES_API_KEYS',
            description:
              'Sets the permission for API key creation feature for users. When enabled, users will have the ability to create and manage API keys for programmatic access.',
            type: 'CheckBox',
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
      {
        section: 'Settings Permissions',
        items: [
          {
            name: 'USER_PERMISSIONS_SETTINGS_INTERFACE',
            description:
              'Enables or disables user / group permissions for the interface settings section in the Settings Modal.',
            type: 'CheckBox',
          },
          {
            name: 'USER_PERMISSIONS_NOTES_ALLOW_PUBLIC_SHARING',
            description: 'Enables or disables public sharing of notes.',
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
            name: 'ENABLE_OTEL_TRACES',
            description:
              'Enables or disables OpenTelemetry trace collection and export. When enabled, distributed tracing data is sent to the configured OTLP endpoint. This variable works in conjunction with `ENABLE_OTEL`.',
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
        section: 'Database Configuration',
        items: [
          {
            name: 'ENABLE_DB_MIGRATIONS',
            description:
              'Enables or disables automatic database migrations on startup. When enabled, the application will automatically apply pending database schema changes. Disable this in production environments where you want to control migrations manually.',
            type: 'CheckBox',
          },
          {
            name: 'DATABASE_TYPE',
            description:
              'Specifies the type of database to use. Supported values include `sqlite`, `postgresql`, `mysql`, etc. This determines which database driver and connection logic will be used.',
            type: 'Input',
          },
          {
            name: 'DATABASE_USER',
            description:
              'Specifies the username for database authentication when using external databases like PostgreSQL or MySQL.',
            type: 'Input',
          },
          {
            name: 'DATABASE_PASSWORD',
            description:
              'Specifies the password for database authentication when using external databases like PostgreSQL or MySQL.',
            type: 'Input',
          },
          {
            name: 'DATABASE_HOST',
            description: 'Specifies the hostname or IP address of the database server.',
            type: 'Input',
          },
          {
            name: 'DATABASE_PORT',
            description: 'Specifies the port number on which the database server is listening.',
            type: 'Input',
          },
          {
            name: 'DATABASE_NAME',
            description: 'Specifies the name of the database to connect to.',
            type: 'Input',
          },
          {
            name: 'DATABASE_USER_ACTIVE_STATUS_UPDATE_INTERVAL',
            description:
              'Sets the interval in seconds for updating user active status in the database. This controls how frequently user activity timestamps are written to the database. Higher values reduce database writes but may result in less accurate activity tracking.',
            type: 'Input',
          },
          {
            name: 'DATABASE_ENABLE_SESSION_SHARING',
            description:
              'Enables or disables session sharing across multiple application instances using the database. When enabled, user sessions are stored in the database rather than in-memory, allowing users to maintain their session across different application instances.',
            type: 'CheckBox',
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
            name: 'REDIS_SOCKET_CONNECT_TIMEOUT',
            description:
              'Sets the timeout in seconds for establishing a connection to Redis. If the connection cannot be established within this time, the operation will fail.',
            type: 'Input',
            defaultValue: 5,
          },
          {
            name: 'ENABLE_STAR_SESSIONS_MIDDLEWARE',
            description:
              'Enables or disables Starlette sessions middleware for managing user sessions. When enabled, session data is stored server-side and managed through cookies.',
            type: 'CheckBox',
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
          {
            name: 'WEBSOCKET_REDIS_OPTIONS',
            description:
              'Specifies additional Redis connection options for websocket communication in JSON format. This can include parameters like connection pool settings, retry logic, or other Redis client configuration options.',
            type: 'Input',
          },
          {
            name: 'WEBSOCKET_SERVER_LOGGING',
            description:
              'Enables or disables logging for the WebSocket server. When enabled, WebSocket connection events, messages, and errors are logged for debugging and monitoring purposes.',
            type: 'CheckBox',
          },
          {
            name: 'WEBSOCKET_SERVER_ENGINEIO_LOGGING',
            description:
              'Enables or disables Engine.IO logging for the WebSocket server. Engine.IO is the underlying transport layer for Socket.IO. When enabled, detailed Engine.IO events and operations are logged.',
            type: 'CheckBox',
          },
          {
            name: 'WEBSOCKET_SERVER_PING_TIMEOUT',
            description:
              'Sets the timeout in seconds for WebSocket ping operations. If a client does not respond to a ping within this time, the connection is considered dead and will be closed.',
            type: 'Input',
            defaultValue: 60,
          },
          {
            name: 'WEBSOCKET_SERVER_PING_INTERVAL',
            description:
              'Sets the interval in seconds between WebSocket ping messages sent to clients. This helps detect disconnected clients and maintain connection health.',
            type: 'Input',
            defaultValue: 25,
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
        section: 'Logging',
        items: [
          {
            name: 'GLOBAL_LOG_LEVEL',
            description:
              'Sets the global logging level for the application. Controls the verbosity of logs across all components. Valid values: DEBUG, INFO, WARNING, ERROR, CRITICAL.',
            type: 'DropDown',
            values: ['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'],
            defaultValue: 'INFO',
          },
          {
            name: 'ENABLE_AUDIT_STDOUT',
            description:
              'Enables or disables audit logging to standard output (console). When enabled, audit events are printed to stdout for real-time monitoring and debugging.',
            type: 'CheckBox',
          },
          {
            name: 'ENABLE_AUDIT_LOGS_FILE',
            description:
              'Enables or disables audit logging to a file. When enabled, audit events are written to a log file specified by `AUDIT_LOGS_FILE_PATH` for persistent storage and analysis.',
            type: 'CheckBox',
          },
          {
            name: 'AUDIT_LOGS_FILE_PATH',
            description:
              'Specifies the file path where audit logs will be written when `ENABLE_AUDIT_LOGS_FILE` is enabled. The path can be absolute or relative to the application directory.',
            type: 'Input',
            defaultValue: './audit.log',
          },
          {
            name: 'AUDIT_LOG_FILE_ROTATION_SIZE',
            description:
              'Sets the maximum size in bytes for audit log files before rotation occurs. When the log file reaches this size, it will be rotated (renamed with a timestamp) and a new log file will be created. Set to 0 to disable rotation.',
            type: 'Input',
            defaultValue: 10485760,
          },
          {
            name: 'AUDIT_UVICORN_LOGGER_NAMES',
            description:
              'Comma-separated list of Uvicorn logger names to include in audit logs. This allows fine-grained control over which Uvicorn components generate audit logs.',
            type: 'Input',
          },
          {
            name: 'AUDIT_LOG_LEVEL',
            description:
              'Sets the logging level specifically for audit logs. This can be different from `GLOBAL_LOG_LEVEL` to control audit log verbosity independently. Valid values: DEBUG, INFO, WARNING, ERROR, CRITICAL.',
            type: 'DropDown',
            values: ['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'],
            defaultValue: 'INFO',
          },
          {
            name: 'MAX_BODY_LOG_SIZE',
            description:
              'Sets the maximum size in bytes for request/response bodies to include in logs. Bodies larger than this size will be truncated in log entries to prevent excessive log file growth. Set to 0 to disable body logging.',
            type: 'Input',
            defaultValue: 1024,
          },
          {
            name: 'AUDIT_EXCLUDED_PATHS',
            description:
              'Comma-separated list of URL paths to exclude from audit logging. Useful for excluding health check endpoints or other high-frequency, low-value endpoints from audit logs to reduce noise.',
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
