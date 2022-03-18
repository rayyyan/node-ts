const path = require("path")
const Dotenv = require("dotenv-webpack")

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist/dist"),
    publicPath: "./dist/dist",
  },
  plugins: [new Dotenv()],
}
