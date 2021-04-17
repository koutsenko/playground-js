const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'source', 'js', 'EP.js')
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build')
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },
  devtool: "source-map",
  module: {
    rules: [{
      test : /\.jsx?/,
      loader : 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};