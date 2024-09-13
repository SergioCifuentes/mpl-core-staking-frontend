const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules'];

      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'),
      };

      webpackConfig.resolve.symlinks = true;

      webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new NodePolyfillPlugin(),
      ];

      // Only add ReactRefreshWebpackPlugin in development mode
      if (isDevelopment) {
        webpackConfig.plugins.push(new ReactRefreshWebpackPlugin());
      }

      return webpackConfig;
    },
  },
  babel: {
    // Only add react-refresh/babel in development mode, ensure no duplicates
    plugins: [
      isDevelopment && ['react-refresh/babel', { skipEnvCheck: true }],
    ].filter(Boolean),
  },
};