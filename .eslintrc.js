module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  globals: {
    ENV: true,
  },
  rules: {
    'no-new': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'global-require': 'off',
    'spaced-comment': 'off',
    'arrow-body-style': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-globals': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/no-unresolved': ['error', { ignore: ['react-dom/client'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
