module.exports = function (api) {
    // Cache the result of the environment check
    api.cache(true);
  
    const isDevelopment = api.env('development');
  
    return {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript', // if you're using TypeScript
      ],
      plugins: [
        isDevelopment && 'react-refresh/babel', // Only use React Refresh in development
      ].filter(Boolean), // Remove false values
    };
  };