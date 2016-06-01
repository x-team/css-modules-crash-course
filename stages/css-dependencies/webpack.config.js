var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var path = require('path')
var fs = require('fs')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },

  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true })
  ]
}
