const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../_dist'),
    filename: '[name].bundle.js'
    //publicPath: '.',
  },
  devServer: {
    contentBase: path.join(__dirname, '../_dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.jsx$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "css-loader!style-loader"
      //   }
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Website',
      template: path.resolve(__dirname, '../_templates/client.html'),
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, `../_dist/bundle.html`),
    }),
    new Visualizer({
      filename: './visualizer.html',
    }),
    new CleanWebpackPlugin(),
  ]
};