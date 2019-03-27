const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getBaseConfig = env => ({
  //If we don't specify entry and output webpack takes default values. It is an example configuration below
  /*entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },*/
  mode: (env && env.NODE_ENV) || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          env && env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ]
});

const prodConfig = {
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin(),
    new Visualizer({ filename: './statistics.html' })
  ],
};

module.exports = env => env && env.NODE_ENV === 'production' ? merge(getBaseConfig(env), prodConfig) : getBaseConfig(env);