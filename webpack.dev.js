/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    // host: 'localhost',
    host: '192.168.1.67',
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  target: 'web',
  devtool: 'inline-source-map',
});
