var path = require('path');
var pkg = require('../package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEBUG = process.env.NODE_ENV === 'development';
var TEST = process.env.NODE_ENV === 'test';

var jsxLoader;
var cssLoader;
var fileLoader = 'file-loader?name=[path][name].[ext]';
var htmlLoader = [
  'file-loader?name=[path][name].[ext]',
  'template-html-loader?' + [
    'raw=true',
    'engine=lodash',
    'version=' + pkg.version,
    'title=' + pkg.name,
    'debug=' + DEBUG
  ].join('&')
].join('!');
var jsonLoader = ['json-loader'];

if (DEBUG || TEST) {
  jsxLoader = [];
  if (!TEST) {
    jsxLoader.push('react-hot');
    jsxLoader.push('babel-loader?optional[]=runtime&stage=0');
  } else {
    jsxLoader.push('babel-loader?optional[]=runtime&stage=0&plugins=rewire');
  }
  cssLoader = [
    'style-loader',
    'css-loader?sourceMap',
    'postcss-loader'
  ].join('!');
} else {
  jsxLoader = ['babel-loader?optional[]=runtime&stage=0&plugins=rewire'];

  cssLoader = ExtractTextPlugin.extract('style-loader', [
    'css-loader',
    'postcss-loader',
    'style-loader'
  ].join('!'));
}

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: jsxLoader
  },
  {
    test: /\.css$/,
    "loader": "style!css"
  },
  {
    test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.ttf$/,
    loader: fileLoader
  },
  {
    test: /\.json$/,
    exclude: /node_modules/,
    loaders: jsonLoader
  },
  {
    test: /\.html$/,
    loader: htmlLoader
  }
];

module.exports = loaders;
