const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  externalsPresets: {
    node: true,
  },
  entry: {
    index: "./src/index.ts",
  },
  optimization: {
    usedExports: true,
    sideEffects: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    libraryTarget: "umd",
    library: "@marsprotocol/wallet-connector",
    umdNamedDefine: true,
    globalObject: "this",
    publicPath: "",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/.+\.(test|spec)\.[tj]sx/],
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
}
