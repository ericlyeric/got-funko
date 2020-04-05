/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const serviceConfig = require('./config/urlConfig');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: serviceConfig.clientPort,
    overlay: true,
    historyApiFallback: true,
    headers: { 'Allow-Control-Allow-Origin': '*' },
    https: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(serviceConfig.serviceUrl),
    }),
  ],
  module: {
    rules: [
      {
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
