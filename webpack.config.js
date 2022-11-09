const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    // filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    static: [
      {
        directory: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
      },
      {
        directory: __dirname,
        publicPath: '/',
      },
    ],
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
