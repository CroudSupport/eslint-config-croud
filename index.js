module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': [2, 'never'],
    "indent": [2, 4],
    // "arrow-body-style": [2, "always"],
    "no-param-reassign": [2, {"props": false}],
    "max-len": [1, 100],
    "camelcase": 1,
    "no-undef": 1,
    "no-restricted-syntax": [1],
    "guard-for-in": [1],
  },
  'globals': {
    '$': false,
    'moment': false,
    'bus': false,
  }
}
