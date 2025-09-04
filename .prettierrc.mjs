/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  semi: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
