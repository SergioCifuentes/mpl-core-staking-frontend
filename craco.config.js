const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (env === 'development') {
        webpackConfig.plugins.push(new ReactRefreshWebpackPlugin());
      }

      webpackConfig.plugins.push(new NodePolyfillPlugin());

      return webpackConfig;
    },
  },
  babel: {
    plugins: [
      process.env.NODE_ENV === 'development' && 'react-refresh/babel',
    ].filter(Boolean),
  },
};