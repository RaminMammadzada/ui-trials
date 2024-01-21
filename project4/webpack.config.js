const path = require("path");
var PrettierPlugin = require("webpack-prettier-plugin");

module.exports = {
  entry: "./src/index.js", // entry point of your application
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.join(__dirname, "./src"),
    },
    compress: true,
    client: {
      logging: "verbose",
      overlay: true,
    },
  },
  plugins: [new PrettierPlugin()],
};
