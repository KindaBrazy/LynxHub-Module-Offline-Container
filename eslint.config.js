import eslint from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsEslint from 'typescript-eslint';

const MAX_LINE_LENGTH = 120;

export default [
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,

  ...tsEslint.configs.recommended,
  {
    plugins: {
      perfectionist,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',

      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          groups: ['multiline', 'unknown', 'shorthand'],
        },
      ],

      'max-len': ['error', {code: MAX_LINE_LENGTH}],

      'prettier/prettier': [
        'error',
        {
          proseWrap: 'always',
          singleQuote: true,
          printWidth: MAX_LINE_LENGTH,
          bracketSpacing: false,
          bracketSameLine: true,
          arrowParens: 'avoid',
        },
      ],
    },
  },
];
