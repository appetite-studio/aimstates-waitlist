import js from "@eslint/js";
import typescript from "typescript-eslint";

export default [
  {
    ignores: [".next/**", "node_modules/**", "out/**", ".turbo/**"],
  },
  js.configs.recommended,
  ...typescript.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
