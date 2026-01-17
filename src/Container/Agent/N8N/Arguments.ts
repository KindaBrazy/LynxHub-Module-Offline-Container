import {ArgumentsData} from '../../../../../src/cross/types/plugins/module';

/* eslint max-len: 0 */

// TODO: Support command line conditional configuration
const n8nArguments: ArgumentsData = [
  {
    category: 'Environment Variables',
    sections: [
      {
        section: 'Nodes',
        items: [
          {
            name: 'N8N_COMMUNITY_PACKAGES_ENABLED',
            type: 'CheckBox',
            description:
              'Enables (true) or disables (false) the functionality to install and load community nodes. If set to false, neither verified nor unverified community packages will be available, regardless of their individual settings.',
          },
          {
            name: 'N8N_COMMUNITY_PACKAGES_PREVENT_LOADING',
            type: 'CheckBox',
            description:
              'Prevents (true) or allows (false) loading installed community nodes on instance startup. Use this if a faulty node prevents the instance from starting.',
          },
          {
            name: 'N8N_COMMUNITY_PACKAGES_REGISTRY',
            type: 'Input',
            defaultValue: 'https://registry.npmjs.org',
            description: 'NPM registry URL to pull community packages from (license required).',
          },
          {
            name: 'N8N_CUSTOM_EXTENSIONS',
            type: 'Input',
            description: 'Specify the path to directories containing your custom nodes.',
          },
          {
            name: 'N8N_PYTHON_ENABLED',
            type: 'CheckBox',
            description: 'Whether to enable Python execution on the Code node.',
          },
          {
            name: 'N8N_UNVERIFIED_PACKAGES_ENABLED',
            type: 'CheckBox',
            description:
              'When N8N_COMMUNITY_PACKAGES_ENABLED is true, this variable controls whether to enable the installation and use of unverified community nodes from an NPM registry (true) or not (false).',
          },
          {
            name: 'N8N_VERIFIED_PACKAGES_ENABLED',
            type: 'CheckBox',
            description:
              'When N8N_COMMUNITY_PACKAGES_ENABLED is true, this variable controls whether to show verified community nodes in the nodes panel for installation and use (true) or to hide them (false).',
          },
          {
            name: 'NODE_FUNCTION_ALLOW_BUILTIN',
            type: 'Input',
            description:
              'Permit users to import specific built-in modules in the Code node. Use * to allow all. n8n disables importing modules by default.',
          },
          {
            name: 'NODE_FUNCTION_ALLOW_EXTERNAL',
            type: 'Input',
            description:
              'Permit users to import specific external modules (from n8n/node_modules) in the Code node. n8n disables importing modules by default.',
          },
          {
            name: 'NODES_ERROR_TRIGGER_TYPE',
            type: 'Input',
            defaultValue: 'n8n-nodes-base.errorTrigger',
            description: 'Specify which node type to use as Error Trigger.',
          },
          {
            name: 'NODES_EXCLUDE',
            type: 'Input',
            description:
              'Specify which nodes not to load. For example, to block nodes that can be a security risk if users aren\'t trustworthy: NODES_EXCLUDE: "["n8n-nodes-base.executeCommand", "@n8n/n8n-nodes-langchain.lmChatDeepSeek"]"',
          },
          {name: 'NODES_INCLUDE', type: 'Input', description: 'Specify which nodes to load.'},
        ],
      },
      {
        section: 'User management SMTP, and two-factor authentication',
        items: [
          {name: 'N8N_EMAIL_MODE', type: 'Input', defaultValue: 'smtp', description: 'Enable emails.'},
          {name: 'N8N_SMTP_HOST', type: 'Input', description: 'your_SMTP_server_name'},
          {name: 'N8N_SMTP_PORT', type: 'Input', description: 'your_SMTP_server_port'},
          {name: 'N8N_SMTP_USER', type: 'Input', description: 'your_SMTP_username'},
          {name: 'N8N_SMTP_PASS', type: 'Input', description: 'your_SMTP_password'},
          {
            name: 'N8N_SMTP_OAUTH_SERVICE_CLIENT',
            type: 'Input',
            description: 'If using 2LO with a service account this is your client ID',
          },
          {
            name: 'N8N_SMTP_OAUTH_PRIVATE_KEY',
            type: 'Input',
            description: 'If using 2LO with a service account this is your private key',
          },
          {
            name: 'N8N_SMTP_SENDER',
            type: 'Input',
            description:
              'Sender email address. You can optionally include the sender name. Example with name: N8N <contact@n8n.com>',
          },
          {name: 'N8N_SMTP_SSL', type: 'CheckBox', description: 'Whether to use SSL for SMTP (true) or not (false).'},
          {
            name: 'N8N_SMTP_STARTTLS',
            type: 'CheckBox',
            description: 'Whether to use STARTTLS for SMTP (true) or not (false).',
          },
          {
            name: 'N8N_UM_EMAIL_TEMPLATES_INVITE',
            type: 'Input',
            description:
              'Full path to your HTML email template. This overrides the default template for invite emails.',
          },
          {
            name: 'N8N_UM_EMAIL_TEMPLATES_PWRESET',
            type: 'Input',
            description:
              'Full path to your HTML email template. This overrides the default template for password reset emails.',
          },
          {
            name: 'N8N_UM_EMAIL_TEMPLATES_WORKFLOW_SHARED',
            type: 'Input',
            description:
              'Overrides the default HTML template for notifying users that a workflow was shared. Provide the full path to the template.',
          },
          {
            name: 'N8N_UM_EMAIL_TEMPLATES_CREDENTIALS_SHARED',
            type: 'Input',
            description:
              'Overrides the default HTML template for notifying users that a credential was shared. Provide the full path to the template.',
          },
          {
            name: 'N8N_UM_EMAIL_TEMPLATES_PROJECT_SHARED',
            type: 'Input',
            description:
              'Overrides the default HTML template for notifying users that a project was shared. Provide the full path to the template.',
          },
          {
            name: 'N8N_USER_MANAGEMENT_JWT_SECRET',
            type: 'Input',
            description: 'Set a specific JWT secret. By default, n8n generates one on start.',
          },
          {
            name: 'N8N_USER_MANAGEMENT_JWT_DURATION_HOURS',
            type: 'Input',
            defaultValue: 168,
            description: 'Set an expiration date for the JWTs in hours.',
          },
          {
            name: 'N8N_USER_MANAGEMENT_JWT_REFRESH_TIMEOUT_HOURS',
            type: 'Input',
            defaultValue: 0,
            description:
              'How many hours before the JWT expires to automatically refresh it. 0 means 25% of N8N_USER_MANAGEMENT_JWT_DURATION_HOURS. -1 means it will never refresh, which forces users to log in again after the period defined in N8N_USER_MANAGEMENT_JWT_DURATION_HOURS.',
          },
          {
            name: 'N8N_MFA_ENABLED',
            type: 'CheckBox',
            description:
              'Whether to enable two-factor authentication (true) or disable (false). n8n ignores this if existing users have 2FA enabled.',
          },
        ],
      },
      {
        section: 'Workflows',
        items: [
          {
            name: 'N8N_ONBOARDING_FLOW_DISABLED',
            type: 'CheckBox',
            description: 'Whether to disable onboarding tips when creating a new workflow (true) or not (false).',
          },
          {
            name: 'N8N_WORKFLOW_ACTIVATION_BATCH_SIZE',
            type: 'Input',
            defaultValue: 1,
            description: 'How many workflows to activate simultaneously during startup.',
          },
          {
            name: 'N8N_WORKFLOW_CALLER_POLICY_DEFAULT_OPTION',
            type: 'Input',
            defaultValue: 'workflowsFromSameOwner',
            description:
              'Which workflows can call a workflow. Options are: any, none, workflowsFromAList, workflowsFromSameOwner. This feature requires Workflow sharing.',
          },
          {
            name: 'N8N_WORKFLOW_TAGS_DISABLED',
            type: 'CheckBox',
            description: 'Whether to disable workflow tags (true) or enable tags (false).',
          },
          {
            name: 'WORKFLOWS_DEFAULT_NAME',
            type: 'Input',
            defaultValue: 'My workflow',
            description: 'The default name used for new workflows.',
          },
        ],
      },
      {
        section: 'Task runner environment variables',
        items: [
          {name: 'N8N_RUNNERS_ENABLED', type: 'CheckBox', description: 'Are task runners enabled.'},
          {
            name: 'N8N_RUNNERS_MODE',
            type: 'DropDown',
            defaultValue: 'internal',
            values: ['internal', 'external'],
            description:
              'How to launch and run the task runner. `internal` means n8n will launch a task runner as child process. `external` means an external orchestrator will launch the task runner.',
          },
          {
            name: 'N8N_RUNNERS_AUTH_TOKEN',
            type: 'Input',
            defaultValue: 'Random string',
            description:
              'Shared secret used by a task runner to authenticate to n8n. Required when using `external` mode.',
          },
          {
            name: 'N8N_RUNNERS_BROKER_PORT',
            type: 'Input',
            defaultValue: 5679,
            description: 'Port the task broker listens on for task runner connections.',
          },
          {
            name: 'N8N_RUNNERS_BROKER_LISTEN_ADDRESS',
            type: 'Input',
            defaultValue: '127.0.0.1',
            description: 'Address the task broker listens on.',
          },
          {
            name: 'N8N_RUNNERS_MAX_PAYLOAD',
            type: 'Input',
            defaultValue: 1073741824,
            description: 'Maximum payload size in bytes for communication between a task broker and a task runner.',
          },
          {
            name: 'N8N_RUNNERS_MAX_OLD_SPACE_SIZE',
            type: 'Input',
            description:
              'The --max-old-space-size option to use for a task runner (in MB). By default, Node.js will set this based on available memory.',
          },
          {
            name: 'N8N_RUNNERS_MAX_CONCURRENCY',
            type: 'Input',
            defaultValue: 5,
            description: 'The number of concurrent tasks a task runner can execute at a time.',
          },
          {
            name: 'N8N_RUNNERS_TASK_TIMEOUT',
            type: 'Input',
            defaultValue: 60,
            description:
              'How long (in seconds) a task can take to complete before the task aborts and the runner restarts. Must be greater than 0.',
          },
          {
            name: 'N8N_RUNNERS_HEARTBEAT_INTERVAL',
            type: 'Input',
            defaultValue: 30,
            description:
              'How often (in seconds) the runner must send a heartbeat to the broker, else the task aborts and the runner restarts. Must be greater than 0.',
          },
          {
            name: 'N8N_RUNNERS_INSECURE_MODE',
            type: 'CheckBox',
            description:
              'Whether to disable all security measures in the task runner, for compatibility with modules that rely on insecure JS features. **Discouraged for production use.**',
          },
          {
            name: 'N8N_RUNNERS_LAUNCHER_LOG_LEVEL',
            type: 'DropDown',
            defaultValue: 'info',
            values: ['debug', 'info', 'warn', 'error'],
            description: 'Which log messages to show.',
          },
          {
            name: 'N8N_RUNNERS_AUTO_SHUTDOWN_TIMEOUT',
            type: 'Input',
            defaultValue: 15,
            description: 'The number of seconds to wait before shutting down an idle runner.',
          },
          {
            name: 'N8N_RUNNERS_TASK_BROKER_URI',
            type: 'Input',
            defaultValue: 'http://127.0.0.1:5679',
            description: 'The URI of the task broker server (n8n instance).',
          },
          {
            name: 'N8N_RUNNERS_LAUNCHER_HEALTH_CHECK_PORT',
            type: 'Input',
            defaultValue: 5680,
            description: "Port for the launcher's health check server.",
          },
          {name: 'NODE_OPTIONS', type: 'Input', description: 'Options for Node.js.'},
          {
            name: 'N8N_RUNNERS_GRANT_TOKEN',
            type: 'Input',
            defaultValue: 'Random string',
            description:
              'Token the runner uses to authenticate with the task broker. This is automatically provided by the launcher.',
          },
          {
            name: 'N8N_RUNNERS_ALLOW_PROTOTYPE_MUTATION',
            type: 'CheckBox',
            description:
              'Whether to allow prototype mutation for external libraries. Set to `true` to allow modules that rely on runtime prototype mutation (for example, `puppeteer`) at the cost of relaxing security.',
          },
          {
            name: 'GENERIC_TIMEZONE',
            type: 'Input',
            defaultValue: 'America/New_York',
            description: 'The same default timezone as configured for the n8n instance.',
          },
        ],
      },
      {
        section: 'Logs environment variables',
        items: [
          {
            name: 'N8N_LOG_LEVEL',
            type: 'DropDown',
            defaultValue: 'info',
            values: ['info', 'warn', 'error', 'debug'],
            description: 'Log output level. Refer to Log levels for details.',
          },
          {
            name: 'N8N_LOG_OUTPUT',
            type: 'DropDown',
            defaultValue: 'console',
            values: ['console', 'file'],
            description: 'Where to output logs. Provide multiple values as a comma-separated list.',
          },
          {
            name: 'N8N_LOG_FORMAT',
            type: 'DropDown',
            defaultValue: 'text',
            values: ['text', 'json'],
            description:
              'The log format to use. `text` prints human readable messages. `json` prints one JSON object per line containing the message, level, timestamp, and all metadata. This is useful for production monitoring as well as debugging.',
          },
          {
            name: 'N8N_LOG_CRON_ACTIVE_INTERVAL',
            type: 'Input',
            defaultValue: 0,
            description: 'Interval in minutes to log currently active cron jobs. Set to 0 to disable.',
          },
          {
            name: 'N8N_LOG_FILE_COUNT_MAX',
            type: 'Input',
            defaultValue: 100,
            description: 'Max number of log files to keep.',
          },
          {
            name: 'N8N_LOG_FILE_SIZE_MAX',
            type: 'Input',
            defaultValue: 16,
            description: 'Max size of each log file in MB.',
          },
          {
            name: 'N8N_LOG_FILE_LOCATION',
            type: 'Input',
            defaultValue: '<n8n-directory-path>/logs/n8n.log',
            description: 'Log file location. Requires N8N_LOG_OUTPUT set to `file`.',
          },
          {name: 'DB_LOGGING_ENABLED', type: 'CheckBox', description: 'Whether to enable database-specific logging.'},
          {
            name: 'DB_LOGGING_OPTIONS',
            type: 'DropDown',
            defaultValue: 'error',
            values: ['query', 'error', 'schema', 'warn', 'info', 'log'],
            description:
              'Database log output level. To enable all logging, specify `all`. Refer to TypeORM logging options',
          },
          {
            name: 'DB_LOGGING_MAX_EXECUTION_TIME',
            type: 'Input',
            defaultValue: 1000,
            description:
              'Maximum execution time (in milliseconds) before n8n logs a warning. Set to 0 to disable long running query warning.',
          },
          {
            name: 'CODE_ENABLE_STDOUT',
            type: 'CheckBox',
            description:
              "Set to `true` to send Code node logs to process's stdout for debugging, monitoring, or logging purposes.",
          },
          {
            name: 'NO_COLOR',
            type: 'Input',
            defaultValue: 'undefined',
            description:
              'Set to any value to output logs without ANSI colors. For more information, see the no-color.org website.',
          },
          {
            name: 'N8N_EVENTBUS_CHECKUNSENTINTERVAL',
            type: 'Input',
            defaultValue: 0,
            description:
              'How often (in milliseconds) to check for unsent event messages. Can in rare cases send message twice. Set to 0 to disable it.',
          },
          {
            name: 'N8N_EVENTBUS_LOGWRITER_SYNCFILEACCESS',
            type: 'CheckBox',
            description: 'Whether all file access happens synchronously within the thread (true) or not (false).',
          },
          {
            name: 'N8N_EVENTBUS_LOGWRITER_KEEPLOGCOUNT',
            type: 'Input',
            defaultValue: 3,
            description: 'Number of event log files to keep.',
          },
          {
            name: 'N8N_EVENTBUS_LOGWRITER_MAXFILESIZEINKB',
            type: 'Input',
            defaultValue: 10240,
            description: 'Maximum size (in kilo-bytes) of an event log file before a new one starts.',
          },
          {
            name: 'N8N_EVENTBUS_LOGWRITER_LOGBASENAME',
            type: 'Input',
            defaultValue: 'n8nEventLog',
            description: 'Basename of the event log file.',
          },
        ],
      },
      {
        section: 'License environment variables',
        items: [
          {name: 'N8N_HIDE_USAGE_PAGE', type: 'CheckBox', description: 'Hide the usage and plans page in the app.'},
          {
            name: 'N8N_LICENSE_ACTIVATION_KEY',
            type: 'Input',
            defaultValue: '',
            description:
              'Activation key to initialize license. Not applicable if the n8n instance was already activated.',
          },
          {
            name: 'N8N_LICENSE_AUTO_RENEW_ENABLED',
            type: 'CheckBox',
            description:
              'Enables (true) or disables (false) autorenewal for licenses. If disabled, you need to manually renew the license every 10 days by navigating to **Settings** > **Usage and plan**, and pressing `F5`. Failure to renew the license will disable all licensed features.',
          },
          {
            name: 'N8N_LICENSE_DETACH_FLOATING_ON_SHUTDOWN',
            type: 'CheckBox',
            description:
              'Controls whether the instance releases floating entitlements back to the pool upon shutdown. Set to `true` to allow other instances to reuse the entitlements, or `false` to retain them. For production instances that must always keep their licensed features, set this to `false`.',
          },
          {
            name: 'N8N_LICENSE_SERVER_URL',
            type: 'Input',
            defaultValue: 'https://license.n8n.io/v1',
            description: 'Server URL to retrieve license.',
          },
          {
            name: 'N8N_LICENSE_TENANT_ID',
            type: 'Input',
            defaultValue: 1,
            description:
              'Tenant ID associated with the license. Only set this variable if explicitly instructed by n8n.',
          },
          {
            name: 'https_proxy_license_server',
            type: 'Input',
            defaultValue: 'https://user:pass@proxy:port',
            description:
              'Proxy server URL for HTTPS requests to retrieve license. This variable name needs to be lowercase.',
          },
        ],
      },
      {
        section: 'Queue mode environment variables',
        items: [
          {
            name: 'OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS',
            type: 'CheckBox',
            description: 'Set to `true` if you want manual executions to run on the worker rather than on main.',
          },
          {name: 'QUEUE_BULL_PREFIX', type: 'Input', description: 'Prefix to use for all queue keys.'},
          {name: 'QUEUE_BULL_REDIS_DB', type: 'Input', defaultValue: 0, description: 'The Redis database used.'},
          {name: 'QUEUE_BULL_REDIS_HOST', type: 'Input', defaultValue: 'localhost', description: 'The Redis host.'},
          {name: 'QUEUE_BULL_REDIS_PORT', type: 'Input', defaultValue: 6379, description: 'The Redis port used.'},
          {
            name: 'QUEUE_BULL_REDIS_USERNAME',
            type: 'Input',
            description:
              "The Redis username (needs Redis version 6 or above). Don't define it for Redis < 6 compatibility",
          },
          {name: 'QUEUE_BULL_REDIS_PASSWORD', type: 'Input', description: 'The Redis password.'},
          {
            name: 'QUEUE_BULL_REDIS_TIMEOUT_THRESHOLD',
            type: 'Input',
            defaultValue: 10000,
            description: 'The Redis timeout threshold (in ms).',
          },
          {
            name: 'QUEUE_BULL_REDIS_CLUSTER_NODES',
            type: 'Input',
            description:
              'Expects a comma-separated list of Redis Cluster nodes in the format `host:port`, for the Redis client to initially connect to. If running in queue mode (`EXECUTIONS_MODE = queue`), setting this variable will create a Redis Cluster client instead of a Redis client, and n8n will ignore `QUEUE_BULL_REDIS_HOST` and `QUEUE_BULL_REDIS_PORT`.',
          },
          {name: 'QUEUE_BULL_REDIS_TLS', type: 'CheckBox', description: 'Enable TLS on Redis connections.'},
          {
            name: 'QUEUE_BULL_REDIS_DUALSTACK',
            type: 'CheckBox',
            description: 'Enable dual-stack support (IPv4 and IPv6) on Redis connections.',
          },
          {
            name: 'QUEUE_WORKER_TIMEOUT',
            type: 'Input',
            defaultValue: 30,
            description:
              '**Deprecated** Use `N8N_GRACEFUL_SHUTDOWN_TIMEOUT` instead. How long should n8n wait (seconds) for running executions before exiting worker process on shutdown.',
          },
          {
            name: 'QUEUE_HEALTH_CHECK_ACTIVE',
            type: 'CheckBox',
            description: 'Whether to enable health checks (true) or disable (false).',
          },
          {
            name: 'QUEUE_HEALTH_CHECK_PORT',
            type: 'Input',
            defaultValue: 5678,
            description:
              'The port to serve health checks on. If you experience a port conflict error when starting a worker server using its default port, change this.',
          },
          {
            name: 'QUEUE_WORKER_LOCK_DURATION',
            type: 'Input',
            defaultValue: 60000,
            description: 'How long (in ms) is the lease period for a worker to work on a message.',
          },
          {
            name: 'QUEUE_WORKER_LOCK_RENEW_TIME',
            type: 'Input',
            defaultValue: 10000,
            description: 'How frequently (in ms) should a worker renew the lease time.',
          },
          {
            name: 'QUEUE_WORKER_STALLED_INTERVAL',
            type: 'Input',
            defaultValue: 30000,
            description: 'How often should a worker check for stalled jobs (use 0 for never).',
          },
          {
            name: 'QUEUE_WORKER_MAX_STALLED_COUNT',
            type: 'Input',
            defaultValue: 1,
            description: 'Maximum amount of times a stalled job will be re-processed.',
          },
          {
            name: 'N8N_MULTI_MAIN_SETUP_ENABLED',
            type: 'CheckBox',
            description: 'Whether to enable multi-main setup for queue mode (license required).',
          },
          {
            name: 'N8N_MULTI_MAIN_SETUP_KEY_TTL',
            type: 'Input',
            defaultValue: 10,
            description: 'Time to live (in seconds) for leader key in multi-main setup.',
          },
          {
            name: 'N8N_MULTI_MAIN_SETUP_CHECK_INTERVAL',
            type: 'Input',
            defaultValue: 3,
            description: 'Interval (in seconds) for leader check in multi-main setup.',
          },
        ],
      },
      {
        section: 'Source control environment variables',
        items: [
          {
            name: 'N8N_SOURCECONTROL_DEFAULT_SSH_KEY_TYPE',
            type: 'Input',
            defaultValue: 'ed25519',
            description: 'Set to `rsa` to make RSA the default SSH key type for Source control setup.',
          },
        ],
      },
      {
        section: 'Timezone and localization environment variables',
        items: [
          {
            name: 'GENERIC_TIMEZONE',
            type: 'Input',
            defaultValue: 'America/New_York',
            description: 'The n8n instance timezone. Important for schedule nodes (such as Cron).',
          },
          {
            name: 'N8N_DEFAULT_LOCALE',
            type: 'Input',
            defaultValue: 'en',
            description:
              "A locale identifier, compatible with the Accept-Language header. n8n doesn't support regional identifiers, such as `de-AT`. When running in a locale other than the default, n8n displays UI strings in the selected locale, and falls back to `en` for any untranslated strings.",
          },
        ],
      },
      {
        section: 'Security environment variables',
        items: [
          {
            name: 'N8N_BLOCK_ENV_ACCESS_IN_NODE',
            type: 'CheckBox',
            description:
              'Whether to allow users to access environment variables in expressions and the Code node (false) or not (true).',
          },
          {
            name: 'N8N_BLOCK_FILE_ACCESS_TO_N8N_FILES',
            type: 'CheckBox',
            description:
              'Set to `true` to block access to all files in the .n8n directory and user defined configuration files.',
          },
          {
            name: 'N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS',
            type: 'CheckBox',
            description:
              'Set to `true` to try to set 0600 permissions for the settings file, giving only the owner read and write access.',
          },
          {
            name: 'N8N_RESTRICT_FILE_ACCESS_TO',
            type: 'Input',
            description:
              'Limits access to files in these directories. Provide multiple files as a colon-separated list (":").',
          },
          {
            name: 'N8N_SECURITY_AUDIT_DAYS_ABANDONED_WORKFLOW',
            type: 'Input',
            defaultValue: 90,
            description: "Number of days to consider a workflow abandoned if it's not executed.",
          },
          {
            name: 'N8N_SECURE_COOKIE',
            type: 'CheckBox',
            description: 'Ensures that cookies are only sent over HTTPS, enhancing security.',
          },
          {
            name: 'N8N_SAMESITE_COOKIE',
            type: 'DropDown',
            defaultValue: 'lax',
            values: ['strict', 'lax', 'none'],
            description:
              'Controls cross-site cookie behavior:\n- strict: Sent only for first-party requests.\n- lax (default): Sent with top-level navigation requests.\n- none: Sent in all contexts (requires HTTPS).',
          },
        ],
      },
      {
        section: 'External hooks environment variables',
        items: [
          {
            name: 'EXTERNAL_HOOK_FILES',
            type: 'Input',
            description:
              'Files containing backend external hooks. Provide multiple files as a colon-separated list (":").',
          },
          {
            name: 'EXTERNAL_FRONTEND_HOOKS_URLS',
            type: 'Input',
            description:
              'URLs to files containing frontend external hooks. Provide multiple URLs as a colon-separated list (":").',
          },
        ],
      },
      {
        section: 'External secrets environment variables',
        items: [
          {
            name: 'N8N_EXTERNAL_SECRETS_UPDATE_INTERVAL',
            type: 'Input',
            defaultValue: 300,
            description: 'How often (in seconds) to check for secret updates.',
          },
        ],
      },
      {
        section: 'Deployment environment variables',
        items: [
          {
            name: 'HTTP_PROXY',
            type: 'Input',
            description:
              'A URL to proxy unencrypted HTTP requests through. When set, n8n proxies all unencrypted HTTP traffic from nodes through the proxy URL.',
          },
          {
            name: 'HTTPS_PROXY',
            type: 'Input',
            description:
              'A URL to proxy TLS/SSL encrypted HTTP requests through. When set, n8n proxies all TLS/SSL encrypted HTTP traffic from nodes through the proxy URL.',
          },
          {
            name: 'ALL_PROXY',
            type: 'Input',
            description:
              "A URL to proxy both unencrypted and encrypted HTTP requests through. When set, n8n uses this value when more specific variables (`HTTP_PROXY` or `HTTPS_PROXY`) aren't present.",
          },
          {
            name: 'NO_PROXY',
            type: 'Input',
            description:
              'A comma-separated list of hostnames or URLs that should bypass the proxy. When using `HTTP_PROXY`, `HTTPS_PROXY`, or `ALL_PROXY`, n8n will connect directly to the URLs or hostnames defined here instead of using the proxy.',
          },
          {
            name: 'N8N_EDITOR_BASE_URL',
            type: 'Input',
            description:
              'Public URL where users can access the editor. Also used for emails sent from n8n and the redirect URL for SAML based authentication.',
          },
          {
            name: 'N8N_CONFIG_FILES',
            type: 'Input',
            description: 'Use to provide the path to any JSON configuration file.',
          },
          {name: 'N8N_DISABLE_UI', type: 'CheckBox', description: 'Set to `true` to disable the UI.'},
          {name: 'N8N_PREVIEW_MODE', type: 'CheckBox', description: 'Set to `true` to run in preview mode.'},
          {
            name: 'N8N_TEMPLATES_ENABLED',
            type: 'CheckBox',
            description: 'Enables workflow templates (true) or disable (false).',
          },
          {
            name: 'N8N_TEMPLATES_HOST',
            type: 'Input',
            defaultValue: 'https://api.n8n.io',
            description:
              "Change this if creating your own workflow template library. Note that to use your own workflow templates library, your API must provide the same endpoints and response structure as n8n's. Refer to Workflow templates for more information.",
          },
          {
            name: 'N8N_ENCRYPTION_KEY',
            type: 'Input',
            defaultValue: 'Random key generated by n8n',
            description:
              'Provide a custom key used to encrypt credentials in the n8n database. By default n8n generates a random key on first launch.',
          },
          {
            name: 'N8N_USER_FOLDER',
            type: 'Input',
            defaultValue: 'user-folder',
            description:
              'Provide the path where n8n will create the .n8n folder. This directory stores user-specific data, such as database file and encryption key.',
          },
          {name: 'N8N_PATH', type: 'Input', defaultValue: '/', description: 'The path n8n deploys to.'},
          {name: 'N8N_HOST', type: 'Input', defaultValue: 'localhost', description: 'Host name n8n runs on.'},
          {name: 'N8N_PORT', type: 'Input', defaultValue: 5678, description: 'The HTTP port n8n runs on.'},
          {
            name: 'N8N_LISTEN_ADDRESS',
            type: 'Input',
            defaultValue: '::',
            description: 'The IP address n8n should listen on.',
          },
          {
            name: 'N8N_PROTOCOL',
            type: 'DropDown',
            defaultValue: 'http',
            values: ['http', 'https'],
            description: 'The protocol used to reach n8n.',
          },
          {name: 'N8N_SSL_KEY', type: 'Input', description: 'The SSL key for HTTPS protocol.'},
          {name: 'N8N_SSL_CERT', type: 'Input', description: 'The SSL certificate for HTTPS protocol.'},
          {
            name: 'N8N_PERSONALIZATION_ENABLED',
            type: 'CheckBox',
            description: 'Whether to ask users personalisation questions and then customise n8n accordingly.',
          },
          {
            name: 'N8N_VERSION_NOTIFICATIONS_ENABLED',
            type: 'CheckBox',
            description: 'When enabled, n8n sends notifications of new versions and security updates.',
          },
          {
            name: 'N8N_VERSION_NOTIFICATIONS_ENDPOINT',
            type: 'Input',
            defaultValue: 'https://api.n8n.io/versions/',
            description: 'The endpoint to retrieve where version information.',
          },
          {
            name: 'N8N_VERSION_NOTIFICATIONS_INFO_URL',
            type: 'Input',
            defaultValue: 'https://docs.n8n.io/getting-started/installation/updating.html',
            description: 'The URL displayed in the New Versions panel for more information.',
          },
          {
            name: 'N8N_DIAGNOSTICS_ENABLED',
            type: 'CheckBox',
            description:
              "Whether to share selected, anonymous telemetry with n8n. Note that if you set this to `false`, you can't enable Ask AI in the Code node.",
          },
          {
            name: 'N8N_DIAGNOSTICS_CONFIG_FRONTEND',
            type: 'Input',
            defaultValue: '1zPn9bgWPzlQc0p8Gj1uiK6DOTn;https://telemetry.n8n.io',
            description: 'Telemetry configuration for the frontend.',
          },
          {
            name: 'N8N_DIAGNOSTICS_CONFIG_BACKEND',
            type: 'Input',
            defaultValue: '1zPn7YoGC3ZXE9zLeTKLuQCB4F6;https://telemetry.n8n.io/v1/batch',
            description: 'Telemetry configuration for the backend.',
          },
          {
            name: 'N8N_PUSH_BACKEND',
            type: 'Input',
            defaultValue: 'websocket',
            description:
              'Choose whether the n8n backend uses server-sent events (`sse`) or WebSockets (`websocket`) to send changes to the UI.',
          },
          {
            name: 'VUE_APP_URL_BASE_API',
            type: 'Input',
            defaultValue: 'http://localhost:5678/',
            description:
              'Used when building the n8n-editor-ui package manually to set how the frontend can reach the backend API. Refer to Configure the Base URL.',
          },
          {
            name: 'N8N_HIRING_BANNER_ENABLED',
            type: 'CheckBox',
            description: 'Whether to show the n8n hiring banner in the console (true) or not (false).',
          },
          {
            name: 'N8N_PUBLIC_API_SWAGGERUI_DISABLED',
            type: 'CheckBox',
            description: 'Whether the Swagger UI (API playground) is disabled (true) or not (false).',
          },
          {
            name: 'N8N_PUBLIC_API_DISABLED',
            type: 'CheckBox',
            description: 'Whether to disable the public API (true) or not (false).',
          },
          {
            name: 'N8N_PUBLIC_API_ENDPOINT',
            type: 'Input',
            defaultValue: 'api',
            description: 'Path for the public API endpoints.',
          },
          {
            name: 'N8N_GRACEFUL_SHUTDOWN_TIMEOUT',
            type: 'Input',
            defaultValue: 30,
            description:
              'How long should the n8n process wait (in seconds) for components to shut down before exiting the process.',
          },
          {
            name: 'N8N_DEV_RELOAD',
            type: 'CheckBox',
            description:
              'When working on the n8n source code, set this to `true` to automatically reload or restart the application when changes occur in the source code files.',
          },
          {
            name: 'N8N_REINSTALL_MISSING_PACKAGES',
            type: 'CheckBox',
            description: 'If set to `true`, n8n will automatically attempt to reinstall any missing packages.',
          },
          {
            name: 'N8N_TUNNEL_SUBDOMAIN',
            type: 'Input',
            description: 'Specifies the subdomain for the n8n tunnel. If not set, n8n generates a random subdomain.',
          },
          {
            name: 'N8N_PROXY_HOPS',
            type: 'Input',
            defaultValue: 0,
            description: 'Number of reverse-proxies n8n is running behind.',
          },
        ],
      },
      {
        section: 'Database environment variables',
        items: [
          {
            name: 'DB_TYPE',
            type: 'DropDown',
            defaultValue: 'sqlite',
            values: ['sqlite', 'postgresdb'],
            description: 'The database to use.',
          },
          {name: 'DB_TABLE_PREFIX', type: 'Input', description: 'Prefix to use for table names.'},
          {
            name: 'DB_PING_INTERVAL_SECONDS',
            type: 'Input',
            defaultValue: 2,
            description:
              'The interval, in seconds, between pings to the database to check if the connection is still alive.',
          },
          {
            name: 'DB_POSTGRESDB_DATABASE',
            type: 'Input',
            defaultValue: 'n8n',
            description: 'The name of the PostgreSQL database.',
          },
          {name: 'DB_POSTGRESDB_HOST', type: 'Input', defaultValue: 'localhost', description: 'The PostgreSQL host.'},
          {name: 'DB_POSTGRESDB_PORT', type: 'Input', defaultValue: 5432, description: 'The PostgreSQL port.'},
          {name: 'DB_POSTGRESDB_USER', type: 'Input', defaultValue: 'postgres', description: 'The PostgreSQL user.'},
          {name: 'DB_POSTGRESDB_PASSWORD', type: 'Input', description: 'The PostgreSQL password.'},
          {
            name: 'DB_POSTGRESDB_POOL_SIZE',
            type: 'Input',
            defaultValue: 2,
            description:
              'Control how many parallel open Postgres connections n8n should have. Increasing it may help with resource utilization, but too many connections may degrade performance.',
          },
          {
            name: 'DB_POSTGRESDB_CONNECTION_TIMEOUT',
            type: 'Input',
            defaultValue: 20000,
            description: 'Postgres connection timeout (ms).',
          },
          {
            name: 'DB_POSTGRESDB_IDLE_CONNECTION_TIMEOUT',
            type: 'Input',
            defaultValue: 30000,
            description: 'Amount of time before an idle connection is eligible for eviction for being idle.',
          },
          {name: 'DB_POSTGRESDB_SCHEMA', type: 'Input', defaultValue: 'public', description: 'The PostgreSQL schema.'},
          {
            name: 'DB_POSTGRESDB_SSL_ENABLED',
            type: 'CheckBox',
            description:
              'Whether to enable SSL. Automatically enabled if DB_POSTGRESDB_SSL_CA, DB_POSTGRESDB_SSL_CERT or DB_POSTGRESDB_SSL_KEY is defined.',
          },
          {name: 'DB_POSTGRESDB_SSL_CA', type: 'Input', description: 'The PostgreSQL SSL certificate authority.'},
          {name: 'DB_POSTGRESDB_SSL_CERT', type: 'Input', description: 'The PostgreSQL SSL certificate.'},
          {name: 'DB_POSTGRESDB_SSL_KEY', type: 'Input', description: 'The PostgreSQL SSL key.'},
          {
            name: 'DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED',
            type: 'CheckBox',
            description: 'If n8n should reject unauthorized SSL connections (true) or not (false).',
          },
          {
            name: 'DB_SQLITE_POOL_SIZE',
            type: 'Input',
            defaultValue: 0,
            description:
              'Controls whether to open the SQLite file in WAL mode or rollback journal mode. Uses rollback journal mode when set to zero. When greater than zero, uses WAL mode with the value determining the number of parallel SQL read connections to configure. WAL mode is much more performant and reliable than the rollback journal mode.',
          },
          {
            name: 'DB_SQLITE_VACUUM_ON_STARTUP',
            type: 'CheckBox',
            description:
              'Runs VACUUM operation on startup to rebuild the database. Reduces file size and optimizes indexes. This is a long running blocking operation and increases start-up time.',
          },
        ],
      },
      {
        section: 'Executions environment variables',
        items: [
          {
            name: 'EXECUTIONS_MODE',
            type: 'DropDown',
            defaultValue: 'regular',
            values: ['regular', 'queue'],
            description: 'Whether executions should run directly or using queue.',
          },
          {
            name: 'EXECUTIONS_TIMEOUT',
            type: 'Input',
            defaultValue: -1,
            description:
              'Sets a default timeout (in seconds) to all workflows after which n8n stops their execution. Users can override this for individual workflows up to the duration set in EXECUTIONS_TIMEOUT_MAX. Set EXECUTIONS_TIMEOUT to -1 to disable.',
          },
          {
            name: 'EXECUTIONS_TIMEOUT_MAX',
            type: 'Input',
            defaultValue: 3600,
            description: 'The maximum execution time (in seconds) that users can set for an individual workflow.',
          },
          {
            name: 'EXECUTIONS_DATA_SAVE_ON_ERROR',
            type: 'DropDown',
            defaultValue: 'all',
            values: ['all', 'none'],
            description: 'Whether n8n saves execution data on error.',
          },
          {
            name: 'EXECUTIONS_DATA_SAVE_ON_SUCCESS',
            type: 'DropDown',
            defaultValue: 'all',
            values: ['all', 'none'],
            description: 'Whether n8n saves execution data on success.',
          },
          {
            name: 'EXECUTIONS_DATA_SAVE_ON_PROGRESS',
            type: 'CheckBox',
            description: 'Whether to save progress for each node executed (true) or not (false).',
          },
          {
            name: 'EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS',
            type: 'CheckBox',
            description: 'Whether to save data of executions when started manually.',
          },
          {
            name: 'EXECUTIONS_DATA_PRUNE',
            type: 'CheckBox',
            description: 'Whether to delete data of past executions on a rolling basis.',
          },
          {
            name: 'EXECUTIONS_DATA_MAX_AGE',
            type: 'Input',
            defaultValue: 336,
            description: "The execution age (in hours) before it's deleted.",
          },
          {
            name: 'EXECUTIONS_DATA_PRUNE_MAX_COUNT',
            type: 'Input',
            defaultValue: 10000,
            description: 'Maximum number of executions to keep in the database. 0 = no limit',
          },
          {
            name: 'EXECUTIONS_DATA_HARD_DELETE_BUFFER',
            type: 'Input',
            defaultValue: 1,
            description:
              'How old (hours) the finished execution data has to be to get hard-deleted. By default, this buffer excludes recent executions as the user may need them while building a workflow.',
          },
          {
            name: 'EXECUTIONS_DATA_PRUNE_HARD_DELETE_INTERVAL',
            type: 'Input',
            defaultValue: 15,
            description: 'How often (minutes) execution data should be hard-deleted.',
          },
          {
            name: 'EXECUTIONS_DATA_PRUNE_SOFT_DELETE_INTERVAL',
            type: 'Input',
            defaultValue: 60,
            description: 'How often (minutes) execution data should be soft-deleted.',
          },
          {
            name: 'N8N_CONCURRENCY_PRODUCTION_LIMIT',
            type: 'Input',
            defaultValue: -1,
            description:
              'Max production executions allowed to run concurrently, in both regular and scaling modes. -1 to disable in regular mode.',
          },
        ],
      },
      {
        section: 'Credentials environment variables',
        items: [
          {name: 'CREDENTIALS_OVERWRITE_DATA', type: 'Input', description: 'Overwrites for credentials.'},
          {
            name: 'CREDENTIALS_OVERWRITE_ENDPOINT',
            type: 'Input',
            description: 'The API endpoint to fetch credentials.',
          },
          {
            name: 'CREDENTIALS_DEFAULT_NAME',
            type: 'Input',
            defaultValue: 'My credentials',
            description: 'The default name for credentials.',
          },
        ],
      },
      {
        section: 'Insights environment variables',
        items: [
          {
            name: 'N8N_DISABLED_MODULES',
            type: 'Input',
            description: 'Set to `insights` to disable the feature and metrics collection for an instance.',
          },
          {
            name: 'N8N_INSIGHTS_COMPACTION_BATCH_SIZE',
            type: 'Input',
            defaultValue: 500,
            description: 'The number of raw insights data to compact in a single batch.',
          },
          {
            name: 'N8N_INSIGHTS_COMPACTION_DAILY_TO_WEEKLY_THRESHOLD_DAYS',
            type: 'Input',
            defaultValue: 180,
            description: 'The maximum age (in days) of daily insights data to compact.',
          },
          {
            name: 'N8N_INSIGHTS_COMPACTION_HOURLY_TO_DAILY_THRESHOLD_DAYS',
            type: 'Input',
            defaultValue: 90,
            description: 'The maximum age (in days) of hourly insights data to compact.',
          },
          {
            name: 'N8N_INSIGHTS_COMPACTION_INTERVAL_MINUTES',
            type: 'Input',
            defaultValue: 60,
            description: 'Interval (in minutes) at which compaction should run.',
          },
          {
            name: 'N8N_INSIGHTS_FLUSH_BATCH_SIZE',
            type: 'Input',
            defaultValue: 1000,
            description: 'The maximum number of insights data to keep in the buffer before flushing.',
          },
          {
            name: 'N8N_INSIGHTS_FLUSH_INTERVAL_SECONDS',
            type: 'Input',
            defaultValue: 30,
            description: 'The interval (in seconds) at which the insights data should be flushed to the database.',
          },
        ],
      },
      {
        section: 'Binary data environment variables',
        items: [
          {
            name: 'N8N_AVAILABLE_BINARY_DATA_MODES',
            type: 'Input',
            defaultValue: 'filesystem',
            description: 'A comma separated list of available binary data modes.',
          },
          {
            name: 'N8N_BINARY_DATA_STORAGE_PATH',
            type: 'Input',
            defaultValue: 'N8N_USER_FOLDER/binaryData',
            description: 'The path where n8n stores binary data.',
          },
          {
            name: 'N8N_DEFAULT_BINARY_DATA_MODE',
            type: 'Input',
            defaultValue: 'default',
            description:
              'The default binary data mode. `default` keeps binary data in memory. Set to `filesystem` to use the filesystem, or `s3` to AWS S3. Note that binary data pruning operates on the active binary data mode. For example, if your instance stored data in S3, and you later switched to filesystem mode, n8n only prunes binary data in the filesystem. This may change in future.',
          },
        ],
      },
      {
        section: 'External data storage environment variables',
        items: [
          {
            name: 'N8N_EXTERNAL_STORAGE_S3_HOST',
            type: 'Input',
            description:
              'Host of the n8n bucket in S3-compatible external storage. For example, `s3.us-east-1.amazonaws.com`',
          },
          {
            name: 'N8N_EXTERNAL_STORAGE_S3_BUCKET_NAME',
            type: 'Input',
            description: 'Name of the n8n bucket in S3-compatible external storage.',
          },
          {
            name: 'N8N_EXTERNAL_STORAGE_S3_BUCKET_REGION',
            type: 'Input',
            description: 'Region of the n8n bucket in S3-compatible external storage. For example, `us-east-1`',
          },
          {
            name: 'N8N_EXTERNAL_STORAGE_S3_ACCESS_KEY',
            type: 'Input',
            description: 'Access key in S3-compatible external storage',
          },
          {
            name: 'N8N_EXTERNAL_STORAGE_S3_ACCESS_SECRET',
            type: 'Input',
            description: 'Access secret in S3-compatible external storage.',
          },
          {
            name: 'N8N_EXTERNAL_STORAGE_S3_AUTH_AUTO_DETECT',
            type: 'CheckBox',
            description:
              'Use automatic credential detection to authenticate S3 calls for external storage. This will ignore the access key and access secret and use the default credential provider chain.',
          },
        ],
      },
      {
        section: 'Endpoints environment variables',
        items: [
          {
            name: 'N8N_PAYLOAD_SIZE_MAX',
            type: 'Input',
            defaultValue: 16,
            description: 'The maximum payload size in MiB.',
          },
          {
            name: 'N8N_FORMDATA_FILE_SIZE_MAX',
            type: 'Input',
            defaultValue: 200,
            description: 'Max payload size for files in form-data webhook payloads in MiB.',
          },
          {name: 'N8N_METRICS', type: 'CheckBox', description: 'Whether to enable the /metrics endpoint.'},
          {
            name: 'N8N_METRICS_PREFIX',
            type: 'Input',
            defaultValue: 'n8n_',
            description: 'Optional prefix for n8n specific metrics names.',
          },
          {
            name: 'N8N_METRICS_INCLUDE_DEFAULT_METRICS',
            type: 'CheckBox',
            description: 'Whether to expose default system and node.js metrics.',
          },
          {
            name: 'N8N_METRICS_INCLUDE_CACHE_METRICS',
            type: 'CheckBox',
            description: 'Whether to include metrics (true) for cache hits and misses, or not include them (false).',
          },
          {
            name: 'N8N_METRICS_INCLUDE_MESSAGE_EVENT_BUS_METRICS',
            type: 'CheckBox',
            description: 'Whether to include metrics (true) for events, or not include them (false).',
          },
          {
            name: 'N8N_METRICS_INCLUDE_WORKFLOW_ID_LABEL',
            type: 'CheckBox',
            description: 'Whether to include a label for the workflow ID on workflow metrics.',
          },
          {
            name: 'N8N_METRICS_INCLUDE_NODE_TYPE_LABEL',
            type: 'CheckBox',
            description: 'Whether to include a label for the node type on node metrics.',
          },
          {
            name: 'N8N_METRICS_INCLUDE_CREDENTIAL_TYPE_LABEL',
            type: 'CheckBox',
            description: 'Whether to include a label for the credential type on credential metrics.',
          },
          {
            name: 'N8N_METRICS_INCLUDE_API_ENDPOINTS',
            type: 'CheckBox',
            description: 'Whether to expose metrics for API endpoints.',
          },
          {
            name: 'N8N_METRICS_INCLUDE_API_PATH_LABEL',
            type: 'CheckBox',
            description: 'Whether to include a label for the path of API invocations.',
          },
          {
            name: 'N8N_METRICS_INCLUDE_API_METHOD_LABEL',
            type: 'CheckBox',
            description: 'Whether to include a label for the HTTP method (GET, POST, ...) of API invocations.',
          },
          {
            name: 'N8N_METRICS_INCLUDE_API_STATUS_CODE_LABEL',
            type: 'CheckBox',
            description: 'Whether to include a label for the HTTP status code (200, 404, ...) of API invocations.',
          },
          {
            name: 'N8N_METRICS_INCLUDE_QUEUE_METRICS',
            type: 'CheckBox',
            description: 'Whether to include metrics for jobs in scaling mode. Not supported in multi-main setup.',
          },
          {
            name: 'N8N_METRICS_QUEUE_METRICS_INTERVAL',
            type: 'Input',
            defaultValue: 20,
            description: 'How often (in seconds) to update queue metrics.',
          },
          {
            name: 'N8N_ENDPOINT_REST',
            type: 'Input',
            defaultValue: 'rest',
            description: 'The path used for REST endpoint.',
          },
          {
            name: 'N8N_ENDPOINT_WEBHOOK',
            type: 'Input',
            defaultValue: 'webhook',
            description: 'The path used for webhook endpoint.',
          },
          {
            name: 'N8N_ENDPOINT_WEBHOOK_TEST',
            type: 'Input',
            defaultValue: 'webhook-test',
            description: 'The path used for test-webhook endpoint.',
          },
          {
            name: 'N8N_ENDPOINT_WEBHOOK_WAIT',
            type: 'Input',
            defaultValue: 'webhook-waiting',
            description: 'The path used for waiting-webhook endpoint.',
          },
          {
            name: 'WEBHOOK_URL',
            type: 'Input',
            description: 'Used to manually provide the Webhook URL when running n8n behind a reverse proxy.',
          },
          {
            name: 'N8N_DISABLE_PRODUCTION_MAIN_PROCESS',
            type: 'CheckBox',
            description:
              'Disable production webhooks from main process. This helps ensure no HTTP traffic load to main process when using webhook-specific processes.',
          },
        ],
      },
    ],
  },
];

export default n8nArguments;
