// craco.config.js
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'),
        // Add other fallbacks as needed
      };

      webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new NodePolyfillPlugin()
      ];

      return webpackConfig;
    }
  }
};