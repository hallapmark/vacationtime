import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      'better-tailwindcss': betterTailwindcss,
    },
    rules: {
      // JS/React rules
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      // React plugin rules you want
      'react/jsx-uses-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Tailwind rules
      'better-tailwindcss/no-unregistered-classes': 'error',
      'better-tailwindcss/no-conflicting-classes': 'warn',
    },
    settings: {
      react: { version: 'detect' },
      'better-tailwindcss': {
        entryPoint: 'src/App.css',
        tailwindConfig: 'tailwind.config.js',
      },
    },
  },
]);
