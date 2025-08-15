import {defineConfig, globalIgnores} from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default defineConfig([
    globalIgnores([
        'build/**/*',
        '*/__tests__/**/',
        'dist/**',
        'dev-dist/**',
        'coverage/**',
        'vite.config.ts',
        'vitest.config.ts'
    ]),
    js.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        basePath: './src',
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.commonjs
            },
            parser: tslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            import: importPlugin,
            react: pluginReact,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            '@typescript-eslint': tslint
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                },
                alias: {
                    map: [
                        ['@*', '*'],
                        ['@sass', './src/sass'],
                        ['@assets', './src/assets'],
                        ['@modules', './src/modules'],
                        ['@appComponents', './src/modules/app/components'],
                        ['@constants', './src/modules/app/constants'],
                        ['@utils', './src/utils'],
                        ['@redux', './src/redux']
                    ],
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
                }
            },
            react: {
                version: 'detect'
            }
        },
        rules: {
            // General
            'padding-line-between-statements': ['warn', {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'if', 'while', 'for', 'switch', 'try', 'class', 'function']
            }],
            eqeqeq: 'error',
            semi: ['warn', 'always'],
            'no-unused-vars': 'warn',
            'prefer-const': ['warn', {ignoreReadBeforeAssign: true}],
            'no-console': 'error',
            'comma-dangle': ['warn', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'only-multiline',
                functions: 'never'
            }],
            'jsx-quotes': ['warn', 'prefer-double'],
            'comma-style': ['warn', 'last'],
            'eol-last': ['warn', 'always'],
            'semi-style': ['warn', 'last'],
            'no-extra-semi': 'warn',
            'no-debugger': 'warn',
            'no-trailing-spaces': 'warn',
            quotes: ['warn', 'single', {avoidEscape: true}],
            // Imports
            'import/no-unresolved': ['error', {commonjs: true, amd: true}],
            'import/named': 'warn',
            'import/namespace': 'warn',
            'import/default': 'error',
            'import/export': 'error',
            'import/order': ['warn', {
                groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
                'newlines-between': 'always'
            }],
            // React
            'react/no-deprecated': ['warn'],
            'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
            'react/jsx-uses-vars': ['error'],
            'react/jsx-uses-react': 'error',
            'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],
            'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],
            'react/jsx-no-target-blank': ['error', {enforceDynamicLinks: 'always'}],
            'react/jsx-pascal-case': 'error',
            'react/jsx-fragments': ['warn'],
            'react/no-danger': 'error',
            'react/prefer-es6-class': 'error',
            'react/no-unknown-property': 'error',
            'react/no-unused-state': 'warn',
            'react/no-unused-prop-types': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            // JSX A11Y
            'jsx-a11y/anchor-is-valid': ['warn', {aspects: ['noHref', 'invalidHref', 'preferButton']}],
            'jsx-a11y/label-has-associated-control': ['error', {
                labelComponents: [],
                labelAttributes: [],
                controlComponents: [],
                depth: 3
            }],
            'jsx-a11y/click-events-have-key-events': 'warn',
            'jsx-a11y/no-noninteractive-element-interactions': 'warn',
            'jsx-a11y/no-autofocus': ['warn', {ignoreNonDOM: true}],
            'jsx-a11y/no-static-element-interactions': 'warn',
            // Additional recommended rules
            'jsx-a11y/alt-text': 'error', // Require alt text on <img>
            'jsx-a11y/aria-role': 'error', // Ensure valid ARIA roles
            'jsx-a11y/aria-props': 'error', // Ensure valid ARIA props
            'jsx-a11y/tabindex-no-positive': 'warn', // Discourage tabindex > 0
            'jsx-a11y/no-redundant-roles': 'warn', // Avoid redundant ARIA roles
            'jsx-a11y/media-has-caption': 'warn', // Require captions on <video> / <audio>
            'jsx-a11y/mouse-events-have-key-events': 'warn', // Mouse events should have keyboard equivalents
            'jsx-a11y/html-has-lang': 'error', // <html> should have lang attribute
            'jsx-a11y/lang': 'error', // Lang attribute must be valid
        }
    }
]);
