const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    page1: "./src/page1/index.js",
    page2: "./src/page2/index.js",
    page3: "./src/page3/index.js",
    page4: "./src/page4/index.js"
  },
  output: {
    filename: "[name].[contenthash].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: {
      rewrites: [
        { from: /^\/page1/, to: "/page1.html" },
        { from: /^\/page2/, to: "/page2.html" },
        { from: /^\/page3/, to: "/page3.html" },
        { from: /^\/page4/, to: "/page4.html" }
      ]
    }
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|svg|png|jpe?g|woff|ttf|eot)$/,
        loader: "file-loader",
        options: { name: "[path][name].[ext]", context: "src" }
      }
    ]
  },
  optimization: {
    splitChunks: {
      minSize: 0,
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -5
        },
        common: {
          test: /[\\/]src[\\/]common[\\/]/,
          priority: -10
        },
        default: {
          priority: -20
        }
      }
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].[contenthash].map"
    }),
    new HtmlWebPackPlugin({
      template: "./src/page1/index.html",
      filename: "./page1.html",
      chunks: ["page1"]
    }),
    new HtmlWebPackPlugin({
      template: "./src/page2/index.html",
      filename: "./page2.html",
      chunks: ["page2"]
    }),
    new HtmlWebPackPlugin({
      template: "./src/page3/index.html",
      filename: "./page3.html",
      chunks: ["page3"]
    }),
    new HtmlWebPackPlugin({
      template: "./src/page4/index.html",
      filename: "./page4.html",
      chunks: ["page4"]
    })
  ],
  resolve: {
    modules: ["./src", "node_modules"]
  },
  stats: 'errors-warnings'
};
