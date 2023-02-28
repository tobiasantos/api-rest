module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    quotes: "off",
    "class-methods-use-this": "off",
    "import/first": "off",
    "import/no-extraneous-dependencies": "off",
    "comma-dangle": "off",
    "no-param-reassign": "off",
    camelcase: "off",
  },
};
