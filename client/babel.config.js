/* eslint-disable global-require */

module.exports = function defaultExport(api) {
  const validEnv = ['development', 'test', 'production']
  const currentEnv = api.env()

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      'Please specify a valid `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        `"test", and "production". Instead, received: ${currentEnv}.`
    )
  }

  return {
    sourceType: 'unambiguous',
    presets: [
      [
        require('@babel/preset-env'),
        {
          forceAllTransforms: true,
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
          exclude: ['transform-typeof-symbol']
        }
      ],
      require('@babel/preset-react'),
      ['@babel/preset-typescript', { allExtensions: true, isTSX: true }]
    ].filter(Boolean),
    env: {
      test: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        sourceType: 'module'
      }
    }
  }
}
