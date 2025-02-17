const path = require('path');

module.exports = (on, config) => {
  on('file:preprocessor', require('@cypress/webpack-preprocessor')({
    webpackOptions: {
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
          },
        ],
      },
    },
  }));

  return config;
};
