var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'cheap-source-map',
  entry: ['./src'],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    ]
  }
};
