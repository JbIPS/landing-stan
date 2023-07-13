module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: "./tsconfig.json",
    extraFileExtensions: [".vue"],
    vueFeatures: {
      filter: true,
      interpolationAsNonHTML: true,
      styleCSSVariableInjection: true,
    },
  },
  globals: {
    defineProps: "readonly",
  },
  plugins: ["plugin:vue/vue3-recommended", "@typescript-eslint", "import"],
  rules: {},
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
