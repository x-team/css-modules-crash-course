var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  }
}
