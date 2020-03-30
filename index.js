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
    'max-len': 0,
    // allow debugger during development
    'no-debugger': ['warn'],
    'no-mixed-operators': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'quote-props': ['warn', 'consistent-as-needed'],
    'radix': 0,
  },
};
