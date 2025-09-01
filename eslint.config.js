import eslintPluginAstro from "eslint-plugin-astro";
import reactPlugin from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser"; // Note: we'll use this directly in languageOptions

export default [
  // Base configuration (applies to most files, including .js and non-TS parts of .astro)
  {
    files: [ "**/*.{js,jsx,mjs,cjs,astro}" ], // Apply this config to these files
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      // No 'parser' here initially for .js files.
      // The Astro plugin will handle its own parsing.
    },
    rules: {
      // Your existing JavaScript and React rules
      "quotes": [ "error", "double", { "avoidEscape": true, "allowTemplateLiterals": true } ],
      "semi": [ "error", "always" ],
      "indent": [ "error", 2 ],
      "prefer-const": "error",
      "no-var": "error",
      "no-multiple-empty-lines": [ "error", { "max": 1 } ],
      "space-infix-ops": "error",
      "space-before-blocks": [ "error", "always" ],
      "react/jsx-max-props-per-line": [ "error", { maximum: 2, when: "multiline" } ],
      "object-curly-spacing": [ "error", "always" ],
      "array-bracket-spacing": [ "error", "always" ],
      // You might also want to add React specific rules if you use `plugin:react/recommended`
      // For instance: ...reactPlugin.configs.recommended.rules if you want to be explicit
    },
    settings: {
      react: {
        version: "detect", // For react plugin
      },
    },
  },

  // Astro-specific configuration (extends recommended Astro rules)
  ...eslintPluginAstro.configs.recommended,

  // TypeScript-specific configuration
  {
    files: [ "**/*.{ts,tsx}" ], // Apply this config ONLY to .ts and .tsx files
    extends: [
      // If you want all recommended TypeScript rules:
      // typescriptEslint.configs.recommended,
      // typescriptEslint.configs.stylistic, // Optional: for stylistic TS rules
    ],
    plugins: {
      "@typescript-eslint": typescriptEslint, // Register the TypeScript plugin
    },
    languageOptions: {
      parser: typescriptParser, // **Crucial: Use the TypeScript parser for these files**
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // **Important: Point to your tsconfig.json for type information**
      },
    },
    rules: {
      // Override standard ESLint rules with TypeScript-aware versions
      "no-unused-vars": "off", // Disable default ESLint rule
      "@typescript-eslint/no-unused-vars": [ "warn", { "argsIgnorePattern": "^_" } ], // Use TS version
      "no-redeclare": "off", // Disable default ESLint rule
      "@typescript-eslint/no-redeclare": "error", // Use TS version

      // You can add more specific TypeScript rules here if needed
      // ...typescriptEslint.configs.recommended.rules // If not using extends, you can manually spread rules
    },
  },

  // Configuration for TypeScript code inside Astro files
  {
    // Process .astro files with the Astro parser, and then use the TypeScript parser for scripts.
    files: [ "**/*.astro" ],
    languageOptions: {
      parserOptions: {
        // This is important for Astro's integration with TypeScript
        parser: typescriptParser, // Use the TypeScript parser inside Astro script tags
      },
    },
    // No explicit 'plugins' or 'extends' here, as they are handled by the main Astro config
  }
];
