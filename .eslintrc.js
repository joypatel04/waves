module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'react/display-name': ['off', {ignoreTranspilerName: true}],
  },
};
