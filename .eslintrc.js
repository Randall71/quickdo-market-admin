module.exports = {
    root: true,
    extends: ['universe/native'],
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      'prettier/prettier': ['warn', { endOfLine: 'lf' }],
      'import/export': 'off',
    },
  }
  