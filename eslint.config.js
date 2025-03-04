import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import reactplugin from 'eslint-plugin-react';
import css from '@eslint/css';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint,
      'react': reactplugin
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        document: true,
        window: true,
        console: true,
        process: true,
        setTimeout: true,
        clearTimeout: true,
        setInterval: true,
        clearInterval: true,
        HTMLElement: true,
        HTMLDivElement: true,
        Event: true,
        PointerEvent: true,
        WebKitCSSMatrix: true,
        React: true,
        test: true,
        expect: true,
        RefObject: true
      }
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }],
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.css'],
    plugins: {
      css
    },
    language: 'css/css',
    ...css.configs.recommended
  },
  {
    files: ['vite.config.ts', 'env.d.ts'],
    languageOptions: {
      globals: {
        process: true
      }
    }
  }
]; 