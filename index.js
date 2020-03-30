module.exports = {
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'plugin:vue/essential'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-len': 'off',
    // allow debugger during development
    'no-debugger': 'warn',
    'no-mixed-operators': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
    'quote-props': ['warn', 'consistent-as-needed'],
    'radix': 'off',
  },
};
