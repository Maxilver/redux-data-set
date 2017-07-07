module.exports = {
  entry: [
    './src/example/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'example.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
