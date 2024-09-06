// module.exports = require("eslint-config-mantine/.prettierrc.js");
/** @type {import("prettier").Config} */
const config = {
  plugins: ["./node_modules/prettier-plugin-sort-imports/dist/index.3.js"],
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  sortingMethod: "alphabetical",
  importTypeOrder: ["NPMPackages", "localImportsValue", "localImportsType"],
  stripNewlines: true,
  newlineBetweenTypes: false,
};

export default config;
