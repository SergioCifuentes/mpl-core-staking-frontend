const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ensure Webpack resolves modules correctly
      webpackConfig.resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules'];

      // Set fallbacks for Node.js core modules no longer polyfilled in Webpack 5
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'),
      };

      webpackConfig.resolve.symlinks = true;

      // Add Node polyfills for Webpack 5
      webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new NodePolyfillPlugin(),
      ];

      return webpackConfig;
    },
  },
  babel: {
    // Only include react-refresh plugin in development mode and avoid duplicates
    plugins: isDevelopment
      ? [
          // Check for existing babel plugins to avoid duplicates
          [require.resolve('react-refresh/babel')],
        ]
      : [],
  },
  plugins: isDevelopment
    ? [
        {
          plugin: require('@pmmmwh/react-refresh-webpack-plugin'),
        },
      ]
    : [],
};