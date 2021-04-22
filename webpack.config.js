const PACKAGE = require("./package.json");

const PATH = require("path");
const WEBPACK = require("webpack");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const BANNER = `
/*!
 * Vue Scroll Animator v${PACKAGE.version} (https://byloth.github.io/vue-scroll-animator)
 *
 *  -> Copyright © 2019 - 2021, Matteo Bilotta
 *  -> Licensed under GPL v3 (https://github.com/Byloth/vue-scroll-animator/blob/master/LICENSE)
 */
`;

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
  },
  plugins: [
    new WEBPACK.BannerPlugin({
      banner: BANNER,
      raw: true
    })
  ]
};
