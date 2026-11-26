module.exports = [{
  files: ['**/*.js'],
  languageOptions: { ecmaVersion: 2022, sourceType: 'commonjs',
    globals: { process: 'readonly', test: 'readonly', expect: 'readonly', jest: 'readonly' } },
  rules: { 'no-undef': 'error', 'no-unused-vars': 'error', eqeqeq: 'error' }
}];
