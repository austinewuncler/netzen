const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    client: { overlay: { errors: true, warnings: false } },
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
