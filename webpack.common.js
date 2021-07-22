/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, './source'),
  build: path.resolve(__dirname, './build'),
};
module.exports = {
  entry: `${PATHS.src}/js/index.tsx`,
  output: {
    filename: 'js/index.js',
    path: PATHS.build,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        resolve: {
          extensions: ['.ts', '.tsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        'js/',
        '!fonts',
        '!img',
      ],
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: `${PATHS.src}/index.html`,
    }),
  ],
};
