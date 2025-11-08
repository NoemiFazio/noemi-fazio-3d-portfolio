import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
    globalIgnores(['dist', 'node_modules', 'coverage']),
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: globals.browser,
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier,
        },
        rules: {
            'no-console': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'prettier/prettier': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },
]);
