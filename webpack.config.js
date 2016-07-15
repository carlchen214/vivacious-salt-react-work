module.exports = {
  entry: './client/app.js',
  output: {
    path: './client',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './client',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}