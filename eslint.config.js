import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules', 'public']),

  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // ── Possible errors ──────────────────────────────────────
      'no-console':            ['warn', { allow: ['warn', 'error'] }],
      'no-debugger':           'error',
      'no-duplicate-imports':  'error',

      // ── Variables ────────────────────────────────────────────
      'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      }],
      'prefer-const':          ['error', { destructuring: 'all' }],
      'no-var':                'error',

      // ── Code quality ─────────────────────────────────────────
      'eqeqeq':                ['error', 'always', { null: 'ignore' }],
      'no-param-reassign':     ['warn', { props: false }],
      'object-shorthand':      ['warn', 'always'],
      'prefer-template':       'warn',

      // ── React ────────────────────────────────────────────────
      'react/jsx-key':              ['error', { checkFragmentShorthand: true }],
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-array-index-key':   'off',
      'react/no-danger':            'error',
      'react/self-closing-comp':    ['warn', { component: true, html: true }],
      'react/prop-types':           'off',
      'react/react-in-jsx-scope':   'off',
      'react/display-name':         'off',

      // ── React hooks ──────────────────────────────────────────
      'react-hooks/rules-of-hooks':  'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ── Accessibility ────────────────────────────────────────
      'jsx-a11y/alt-text':              'error',
      'jsx-a11y/anchor-is-valid':       'warn',
      'jsx-a11y/no-autofocus':          'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    },
  },

  // Prettier must be last — disables all formatting rules that conflict
  prettier,
])
