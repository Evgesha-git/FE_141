const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development', // development || production
  // entry: path.resolve(__dirname, 'src', 'index.js') // как у людей
  entry: path.resolve(__dirname, 'scripts', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'production'),
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  devServer: {
    port: 5400
  },
  module: {
    rules: [
      {
        test: /.(c|sa|sc)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.tsx?$/i,
        use: 'ts-loader'
      }
    ]
  }
}