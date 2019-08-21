'use strict';

let path = require('path');
let webpack = require('webpack');
let fs = require('fs');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let buildPath = path.join(__dirname, '/../dist/');
let copyfiles = [{
  from: path.join(__dirname, '../src/public'),
  to: path.join(buildPath, '/public/'),
  toType: 'dir',
  force: true,
}];

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin(copyfiles),
    function() {
      this.plugin('done', stats => {
        if (stats.hash) {
            const htmlFile = 'index.html';
            let html = fs.readFileSync(path.join(buildPath, htmlFile), 'utf8');
            let newHtmlPath = '/app.js?v=' + stats.hash;
            let newHtml = html.replace('/app.js', newHtmlPath);
            fs.writeFileSync(path.join(buildPath, htmlFile), newHtml);
        }
      })
    }
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
