export default [
  {
    languageOptions: {
      globals: {
        // Ejemplo: si usas 'window' o 'document' globalmente, añade aquí:
        window: "readonly",
        document: "readonly"
      },
    },
    rules: {
      'no-cond-assign': ['error', 'always'],
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'off',
      semi: ['error', 'always'],
    },
  },
];
