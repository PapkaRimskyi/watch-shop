const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.resolve(__dirname, './source'),
  docs: path.resolve(__dirname, './docs'),
  assets: 'assets/',
};

module.exports = {
  entry: {
    index: `${PATHS.src}/js/index.js`,
    catalog: `${PATHS.src}/js/catalog.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: `${PATHS.docs}`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: `${__dirname}/postcss.config.js`,
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: `${PATHS.assets}img`,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              optipng: {
                enabled: true,
              },
              pngquant: {
                strip: true,
                quality: [0.65, 0.90],
                speed: 5,
              },
              mozjpeg: {
                quality: 70,
                progressive: true,
              },
              webp: {
                quality: 70,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: `${PATHS.src}/index.html`,
      inject: false,
    }),
    new HtmlWebpackPlugin({
      hash: false,
      filename: './catalog.html',
      template: `${PATHS.src}/catalog.html`,
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/style.css`,
    }),
    new CopyPlugin([
      { from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
    ]),
  ],
  devServer: {
    contentBase: 'docs/',
    port: 8081,
    open: true,
  },
  devtool: 'eval',
}
