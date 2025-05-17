module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  rules: {
    'no-cond-assign': ['error', 'always'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-unused-vars': 'off',
    semi: ['error', 'always'],
  },
};
