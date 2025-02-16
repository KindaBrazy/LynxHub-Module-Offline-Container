import {ArgumentsData} from '../../../types';

const flowiseArguments: ArgumentsData = [
  {
    category: 'General',
    sections: [
      {
        section: 'Basic Configuration',
        items: [
          {
            name: '--PORT',
            description: 'The HTTP port Flowise runs on',
            type: 'Input',
            defaultValue: 3000,
          },
          {
            name: '--CORS_ORIGINS',
            description: 'The allowed origins for all cross-origin HTTP calls',
            type: 'Input',
          },
          {
            name: '--IFRAME_ORIGINS',
            description: 'The allowed origins for iframe src embedding',
            type: 'Input',
          },
          {
            name: '--FLOWISE_USERNAME',
            description: 'Username to login',
            type: 'Input',
          },
          {
            name: '--FLOWISE_PASSWORD',
            description: 'Password to login',
            type: 'Input',
          },
          {
            name: '--FLOWISE_FILE_SIZE_LIMIT',
            description: 'Upload File Size Limit',
            type: 'Input',
            defaultValue: '50mb',
          },
        ],
      },
      {
        section: 'Logging',
        items: [
          {
            name: '--DEBUG',
            description: 'Print logs from components',
            type: 'CheckBox',
          },
          {
            name: '--LOG_PATH',
            description: 'Location where log files are stored',
            type: 'Input',
            defaultValue: 'your-path/Flowise/logs',
          },
          {
            name: '--LOG_LEVEL',
            description: 'Different levels of logs',
            type: 'DropDown',
            values: ['error', 'info', 'verbose', 'debug'],
            defaultValue: 'info',
          },
          {
            name: '--LOG_JSON_SPACES',
            description: 'Spaces to beautify JSON logs',
            type: 'Input',
            defaultValue: 2,
          },
        ],
      },
      {
        section: 'API Keys',
        items: [
          {
            name: '--APIKEY_STORAGE_TYPE',
            description: 'To store api keys on a JSON file or database. Default is `json`',
            type: 'DropDown',
            values: ['json', 'db'],
            defaultValue: 'json',
          },
          {
            name: '--APIKEY_PATH',
            description: 'Location where api keys are saved when `APIKEY_STORAGE_TYPE` is `json`',
            type: 'Input',
            defaultValue: 'your-path/Flowise/packages/server',
          },
        ],
      },
      {
        section: 'Tool Function Dependencies',
        items: [
          {
            name: '--TOOL_FUNCTION_BUILTIN_DEP',
            description: 'NodeJS built-in modules to be used for Tool Function',
            type: 'Input',
          },
          {
            name: '--TOOL_FUNCTION_EXTERNAL_DEP',
            description: 'External modules to be used for Tool Function',
            type: 'Input',
          },
        ],
      },
    ],
  },
  {
    category: 'Database',
    condition: 'DATABASE_TYPE === "sqlite"',
    sections: [
      {
        section: 'SQLite Configuration',
        items: [
          {
            name: '--DATABASE_TYPE',
            description: 'Type of database to store the flowise data',
            type: 'DropDown',
            values: ['sqlite', 'mysql', 'postgres'],
            defaultValue: 'sqlite',
          },
          {
            name: '--DATABASE_PATH',
            description: 'Location where database is saved (When DATABASE_TYPE is sqlite)',
            type: 'Input',
            defaultValue: 'your-home-dir/.flowise',
          },
        ],
      },
    ],
  },
  {
    category: 'Database',
    condition: 'DATABASE_TYPE !== "sqlite"',
    sections: [
      {
        section: 'Database Configuration',
        items: [
          {
            name: '--DATABASE_TYPE',
            description: 'Type of database to store the flowise data',
            type: 'DropDown',
            values: ['sqlite', 'mysql', 'postgres'],
            defaultValue: 'sqlite',
          },
          {
            name: '--DATABASE_HOST',
            description: 'Host URL or IP address (When DATABASE_TYPE is not sqlite)',
            type: 'Input',
          },
          {
            name: '--DATABASE_PORT',
            description: 'Database port (When DATABASE_TYPE is not sqlite)',
            type: 'Input',
          },
          {
            name: '--DATABASE_USER',
            description: 'Database username (When DATABASE_TYPE is not sqlite)',
            type: 'Input',
          },
          {
            name: '--DATABASE_PASSWORD',
            description: 'Database password (When DATABASE_TYPE is not sqlite)',
            type: 'Input',
          },
          {
            name: '--DATABASE_NAME',
            description: 'Database name (When DATABASE_TYPE is not sqlite)',
            type: 'Input',
          },
          {
            name: '--DATABASE_SSL_KEY_BASE64',
            description: 'Database SSL client cert in base64 (takes priority over DATABASE_SSL)',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Postgres Specific',
        items: [
          {
            name: '--DATABASE_SSL',
            description: 'Database connection overssl (When DATABASE_TYPE is postgre)',
            type: 'CheckBox',
          },
        ],
      },
    ],
  },

  {
    category: 'Encryption',
    sections: [
      {
        section: 'Encryption Key',
        items: [
          {
            name: '--SECRETKEY_PATH',
            description: 'Location where encryption key (used to encrypt/decrypt credentials) is saved',
            type: 'Input',
            defaultValue: 'your-path/Flowise/packages/server',
          },
          {
            name: '--FLOWISE_SECRETKEY_OVERWRITE',
            description: 'Encryption key to be used instead of the key stored in SECRETKEY_PATH',
            type: 'Input',
          },
        ],
      },
    ],
  },
  {
    category: 'Telemetry',
    sections: [
      {
        section: 'Telemetry',
        items: [
          {
            name: '--DISABLE_FLOWISE_TELEMETRY',
            description: 'Turn off telemetry',
            type: 'CheckBox',
          },
        ],
      },
    ],
  },
  {
    category: 'Models',
    sections: [
      {
        section: 'Model Configuration',
        items: [
          {
            name: '--MODEL_LIST_CONFIG_JSON',
            description: 'File path to load list of models from your local config file',
            type: 'Input',
            defaultValue: '/your_model_list_config_file_path',
          },
        ],
      },
    ],
  },
  {
    category: 'Storage',
    sections: [
      {
        section: 'Storage Configuration',
        items: [
          {
            name: '--STORAGE_TYPE',
            description: 'Type of storage for uploaded files. default is `local`',
            type: 'DropDown',
            values: ['s3', 'local'],
            defaultValue: 'local',
          },
        ],
      },
      {
        section: 'Local Storage',
        items: [
          {
            name: '--BLOB_STORAGE_PATH',
            description: 'Local folder path where uploaded files are stored when `STORAGE_TYPE` is `local`',
            type: 'Input',
            defaultValue: 'your-home-dir/.flowise/storage',
          },
        ],
      },
      {
        section: 'S3 Storage',
        items: [
          {
            name: '--S3_STORAGE_BUCKET_NAME',
            description: 'Bucket name to hold the uploaded files when `STORAGE_TYPE` is `s3`',
            type: 'Input',
          },
          {
            name: '--S3_STORAGE_ACCESS_KEY_ID',
            description: 'AWS Access Key',
            type: 'Input',
          },
          {
            name: '--S3_STORAGE_SECRET_ACCESS_KEY',
            description: 'AWS Secret Key',
            type: 'Input',
          },
          {
            name: '--S3_STORAGE_REGION',
            description: 'Region for S3 bucket',
            type: 'Input',
          },
          {
            name: '--S3_ENDPOINT_URL',
            description: 'Custom Endpoint for S3',
            type: 'Input',
          },
          {
            name: '--S3_FORCE_PATH_STYLE',
            description: 'Set this to true to force the request to use path-style addressing',
            type: 'CheckBox',
          },
        ],
      },
    ],
  },

  {
    category: 'Nodes',
    sections: [
      {
        section: 'Node Visibility',
        items: [
          {
            name: '--SHOW_COMMUNITY_NODES',
            description: 'Show nodes created by community',
            type: 'CheckBox',
          },
          {
            name: '--DISABLED_NODES',
            description: 'Hide nodes from UI (comma separated list of node names)',
            type: 'Input',
          },
        ],
      },
    ],
  },
];

export default flowiseArguments;
