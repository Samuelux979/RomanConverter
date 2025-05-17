export default [
  {
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly'
      }
    },
    rules: {
      'no-cond-assign': ['error', 'always'],
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'off',
      semi: ['error', 'always']
    }
  }
];
