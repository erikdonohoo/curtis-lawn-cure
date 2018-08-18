module.exports = {
  entry: './index.js',
  devServer: {
    contentBase: '.',
    watchContentBase: true
  },
  devtool: 'eval-source-map',
  mode: 'development',
  output: {
    filename: './dist/main.js'
  }
}