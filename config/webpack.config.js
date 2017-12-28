var utils = require('./utils.js');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var page_path = path.join(__dirname, '../src/pages/');

var entries = utils.getMultiEntry(page_path);

var webpackConfig = {
  entry: entries,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'static/js/[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-withimg-loader?name=static/images/[hash].[name].[ext]']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          'url-loader?limit=1024&name=static/images/[hash].[name].[ext]',
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: []
}

for (let file in entries) {
  var conf = {
    filename: file + '.html',
    template: page_path + file + '/' + file + '.html',
    chunks: [file],
    minify: {
      removeComments: true,
      collapseWhitespace: true
    }
  };
  webpackConfig.plugins.push(new htmlWebpackPlugin(conf));
}

module.exports = webpackConfig;
