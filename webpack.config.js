// webpack v4
const path = require('path');
// update from 23.12.2018
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: { main: './src/app.js' },
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    filename: 'main.js'
  },
  target: 'node', // update from 23.12.2018
  externals: [nodeExternals()], // update from 23.12.2018
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      }
    ]
  }, 
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new ExtractTextPlugin("styles.css"),
  ]
};