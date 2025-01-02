import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  ...compat.extends(
    "next",
    "next/core-web-vitals",
    "plugin:storybook/recommended",
  ),
  {
    plugins: {
      perfectionist,
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",

      "perfectionist/sort-interfaces": ["error"],

      "perfectionist/sort-objects": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "react-hooks/exhaustive-deps": "error",
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^react", "^@?\\w"],
            ["^(@|src)(/.*|$)"],
            ["^\\u0000"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.?(css)$"],
          ],
        },
      ],
    },
  },
];
