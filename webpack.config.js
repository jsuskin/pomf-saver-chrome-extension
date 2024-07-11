const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    popup: "./popup.js",
    background: "./background.js",
    content: "./content.js",
    firebase: "./firebase.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  devtool: "inline-source-map", // Use inline-source-map instead of eval
};
