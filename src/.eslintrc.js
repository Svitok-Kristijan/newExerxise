module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "babel/no-unused-expressions": "off",
    "babel/decorators-before-export": "off",
  },
};
