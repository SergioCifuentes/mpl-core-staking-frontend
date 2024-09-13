const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');

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

      // Set symlinks outside fallback
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
    presets: ['@babel/preset-env', '@babel/preset-react'],

    plugins: [
      // Conditionally include 'react-refresh/babel' only in development mode
      ...(process.env.NODE_ENV === 'development' ? [['react-refresh/babel', { skipEnvCheck: true }]] : []),
    ],
  },
};