import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactImport from "eslint-plugin-react-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import security from "eslint-plugin-security";
import regexp from "eslint-plugin-regexp";
import reactPerf from "eslint-plugin-react-perf";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "eslint.config.js"] },
  {
    extends: [
      js.configs.recommended,
      security.configs.recommended,
      regexp.configs["flat/recommended"],
      ...tseslint.configs.recommended,
    ],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      "react-perf/jsx-no-new-object-as-prop":"off",
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: reactImport,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      security,
      regexp,
      "react-perf": reactPerf,
    },
    rules: {
      "no-prototype-builtins":"off",
      "@typescript-eslint/no-explicit-any":"off",
      "@typescript-eslint/no-unused-expressions": "off",
      // simple-import-sort
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // unused-imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      // react-perf
      "react-perf/jsx-no-new-object-as-prop": [
        "error",
        {
          nativeAllowList: ["style"],
        },
      ],
    },
  }
);
