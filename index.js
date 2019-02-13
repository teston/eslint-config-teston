module.exports = {
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'plugin:vue/essential'],
  rules: {
    'arrow-parens': ['as-needed'],
    'no-mixed-operators': 0,
    'max-len': 0,
    radix: 0,
    'no-param-reassign': [2, { props: false }],
    // allow i++ in for loops
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
