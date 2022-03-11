module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // Runs Prettier as an ESLint rule and reports differences
  },
}
