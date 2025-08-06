import react from "eslint-plugin-react";
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import {globalIgnores} from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import pluginImport from 'eslint-plugin-import';

export default tseslint.config([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
        ],
        plugins: {
            import: pluginImport,
            "@typescript-eslint": typescriptEslint,
            react,
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        ignores: [
            "dist/**",
            "dev-dist/**",
            "coverage/**",
            "*.min.js",
            "node_modules/**",
        ],
        settings: {
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
                alias: {
                    map: [
                        ["@assets", "./src/assets"],
                        ["@modules", "./src/modules"],
                        ["@appComponents", "./src/modules/app/components"],
                        ["@utils", "./src/utils"],
                        ["@", "./src"],
                    ],
                    extensions: [".js", ".jsx", ".ts", ".tsx", ".jpg"],
                },
            },
        },
        rules: {
            "jsx-quotes": ["warn", "prefer-single"],
            "no-debugger": "warn",
            // "import/order": [
            //     "warn",
            //     {
            //         groups: [
            //             ["builtin", "external"],
            //             "internal",
            //             ["parent", "sibling"],
            //             "index",
            //         ],
            //         "newlines-between": "always",
            //     },
            // ],
            // "import/named": "warn",
            // "import/namespace": "off",
            // "import/default": "error",
            // "import/export": "error",
            "no-useless-return": "warn",
            "no-duplicate-imports": "warn",
            semi: ["warn", "always"],
            quotes: ["warn", "single"],
            indent: [
                "warn",
                4,
                {
                    SwitchCase: 1,
                },
            ],
            "react/jsx-no-duplicate-props": "warn",
            "react/react-in-jsx-scope": "off",
            "no-unused-vars": [
                "warn",
                {
                    varsIgnorePattern: "^React$",
                },
            ],
            eqeqeq: ["warn", "always"],
            "no-trailing-spaces": "warn",
            "react/no-array-index-key": "warn",
            complexity: [
                "warn",
                {
                    max: 10,
                },
            ],
            "prefer-const": "warn",
            "no-console": "error",
            "object-curly-spacing": ["warn", "never"],
            "array-bracket-spacing": ["warn", "never"],
            "space-in-parens": ["warn", "never"],
            "react/jsx-no-target-blank": "off",
            "react-refresh/only-export-components": [
                "warn",
                {
                    allowConstantExport: true,
                },
            ],
            "testing-library/await-async-queries": "error",
            "testing-library/no-await-sync-queries": "error",
            "testing-library/no-debugging-utils": "warn",
            "testing-library/no-dom-import": "off",
            "testing-library/no-container": "warn",
        },
    },
]);
