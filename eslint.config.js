import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ignores: ['coverage/*', 'node_modules/*'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      vue: vuePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // Regras recomendadas do TypeScript
      ...vuePlugin.configs['vue3-recommended'].rules, // Regras recomendadas do Vue 3
      'prettier/prettier': 'error', // Regras do Prettier aplicadas como erro
      'vue/attributes-order': 'error', // Garantir que a ordem dos atributos seja corrigida
      'vue/multi-word-component-names': 'off',
    },
  },
];
