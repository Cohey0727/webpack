const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const outputPath = path.resolve(__dirname, 'dist');
console.debug(outputPath);

module.exports = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true,
        }
      }
    })],
  },
};
