const path = require('path');
const Dotenv = require('dotenv-webpack');

const config = {
  entry: { index: './src/index.ts' },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts'],
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    new Dotenv(),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //
  }

  return config;
};
