const PATH = require("path");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    "vue-scroll-animator": "./src/index.ts",
    "vue-scroll-animator.min": "./src/index.ts"
  },
  output: {
    path: PATH.resolve(__dirname, "dist/"),
    filename: "[name].js",
    library: "VueScrollAnimator",
    libraryExport: "default",
    libraryTarget: "assign"
  },
  resolve: {
    extensions: [".js", ".ts"],
    alias: { "@": PATH.resolve("src") }
  },
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({ include: /\.min.js$/ })]
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
