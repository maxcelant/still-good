module.exports = {
    env: {
        es6: true,
        node: true,
        'react-native/react-native': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
        jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-native',
    ],
    rules: {
        // Define your project's specific rules here
    },
    settings: {
        react: {
        version: 'detect',
        },
    },
};
  