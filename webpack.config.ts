const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/main.ts',
  externals: [nodeExternals()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // library: 'vigen',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production',
  target: 'node',
};