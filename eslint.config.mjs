// eslint.config.mjs
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import astroPlugin from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser"; // Import the Astro parser
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default [
  // **Global Configuration and JavaScript Defaults**
  {
    ignores: ["dist/**", ".astro/**", "**/*.d.ts"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,

  // **TypeScript Configuration**
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs["recommended"].rules,
      ...tsPlugin.configs["eslint-recommended"].rules, // Optional but recommended
      // ...tsPlugin.configs["recommended-type-checked"].rules, // Uncomment if you want type-checked rules

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "error",
    },
  },

  // **Astro Configuration**
  // This is the crucial part for `.astro` files.
  {
    files: ["**/*.astro"],
    parser: astroParser, // Use the astro-eslint-parser for .astro files
    languageOptions: {
      parserOptions: {
        // The parser astro-eslint-parser will use for the script and style tags.
        // Use tsParser if you have TypeScript in your Astro scripts.
        // If you only use plain JS in Astro scripts, you can use "espree" (ESLint's default)
        parser: tsParser,
        // Make sure to include this for the Astro parser
        extraFileExtensions: [".astro"],
        // If you're using TypeScript in Astro, ensure project is set correctly
        project: "./tsconfig.json",
        sourceType: "module", // Essential for module syntax in Astro scripts
        ecmaVersion: 2020, // Or higher, depending on your target environment
      },
    },
    plugins: {
      astro: astroPlugin, // Register the Astro plugin
    },
    rules: {
      ...astroPlugin.configs["recommended"].rules, // Astro recommended rules
      // Add any specific Astro rules here if needed
      // "astro/no-set-html-directive": "error",
    },
  },

  // **Astro Script Specific Configuration**
  // This override handles the *internal* JavaScript/TypeScript within <script> tags in .astro files.
  // astro-eslint-parser treats these as virtual files, and we can apply specific rules.
  {
    // Apply to JavaScript/TypeScript inside Astro files
    files: ["**/*.astro/*.js", "**/*.astro/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser, // Client-side globals for scripts
        // Add any specific client-side globals needed for your scripts
      },
      parserOptions: {
        // Ensure sourceType is module if you use import/export in script tags
        sourceType: "module",
        ecmaVersion: 2020, // Or higher
      },
    },
    rules: {
      // It's common to turn off "prettier/prettier" here because
      // prettier-plugin-astro already handles the formatting of the script block.
      "prettier/prettier": "off",
      // You can add other JS/TS rules here that apply specifically to client-side scripts
      // For example, if you want different `no-unused-vars` behavior for client scripts:
      // "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    },
  },

  // **React Configuration (for .jsx/.tsx files, or if you use React in Astro islands)**
  {
    files: ["**/*.{jsx,tsx}"], // Apply only to files with JSX
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // You might want to extend recommended rules here if this applies to
      // freestanding React components
      // ...reactPlugin.configs.recommended.rules,
      "react/jsx-max-props-per-line": ["error", { maximum: 2, when: "multiline" }],
      // Add other React specific rules
    },
  },

  // **Prettier Configuration (Must be last)**
  // `eslint-config-prettier` disables ESLint rules that conflict with Prettier.
  prettierConfig,
  // `eslint-plugin-prettier` runs Prettier as an ESLint rule, reporting differences as errors.
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // Enforce Prettier formatting
    },
  },
];
