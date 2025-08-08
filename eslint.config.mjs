import {defineConfig, globalIgnores} from 'eslint/config';
import {fixupConfigRules, fixupPluginRules} from '@eslint/compat';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores([
        '*/__tests__/**/',
        'dist/**',
        'dev-dist/**',
        'coverage/**',
        'src/types/global.d.ts'
    ]),
    {
        files: ['*/.js', '*/.jsx', '*/.ts', '*/.tsx'],
        extends: fixupConfigRules(
            compat.extends(
                'plugin:jsx-a11y/recommended',
                'plugin:react/recommended',
                'eslint:recommended',
                'plugin:import/errors',
                'plugin:import/warnings'
            )
        ),
        plugins: {
            'jsx-a11y': fixupPluginRules(jsxA11Y)
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.commonjs
            }
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                },
                alias: {
                    map: [
                        ['@modules', './src/modules'],
                        ['@appComponents', './src/modules/app/components'],
                        ['@constants', './src/modules/app/constants'],
                        ['@utils', './src/utils']
                    ],
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
                }
            },
            react: {
                version: 'detect'
            }
        },
        rules: {
            indent: ['error', 4, {SwitchCase: 1}],
            'no-console': 'error',
            'padding-line-between-statements': ['error', {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'if', 'while', 'for', 'switch', 'try', 'class', 'function']
            }],

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
            'react/no-deprecated': ['off'],
            'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
            'react/jsx-no-bind': ['off'],
            'react/jsx-uses-vars': ['error'],
            'react/jsx-uses-react': 'error',
            'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],
            'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],
            'react/jsx-no-target-blank': ['error', {enforceDynamicLinks: 'always'}],
            'react/jsx-pascal-case': 'error',
            'react/jsx-fragments': ['warn'],
            'react/no-danger': 'error',
            'react/no-redundant-should-component-update': 'error',
            'react/prefer-es6-class': 'error',

            // JSX A11Y
            'jsx-a11y/anchor-is-valid': 'off',
            'jsx-a11y/label-has-associated-control': 'off',
            'jsx-a11y/label-has-for': 'warn',
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-noninteractive-element-interactions': 'off',
            'jsx-a11y/no-autofocus': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',

            'comma-dangle': ['warn', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'only-multiline',
                functions: 'never'
            }],
            'jsx-quotes': ['warn', 'prefer-single'],
            'comma-style': ['warn', 'last'],
            semi: ['warn', 'always'],
            'eol-last': ['warn', 'always'],
            'semi-style': ['warn', 'last'],
            'no-extra-semi': 'warn',
            'no-debugger': 'warn',
            'no-trailing-spaces': 'warn',

            quotes: ['warn', 'single', {avoidEscape: true}]
        }
    },
    {
        files: ['scripts/*'],
        rules: {
            'no-console': 'off'
        }
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended
]);
