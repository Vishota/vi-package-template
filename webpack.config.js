const { fileURLToPath } = require("url");
const { dirname, resolve } = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = [
  {
    entry: "./src/main.ts",
    externals: [nodeExternals()],
    output: {
      filename: "main.js",
      path: resolve(__dirname, "dist"),
      libraryTarget: "commonjs",
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    mode: "production",
    target: "node",
  },
  {
    entry: "./src/main.ts",
    externals: [nodeExternals()],
    output: {
      filename: "bundle.js",
      path: resolve(__dirname, "dist"),
      libraryTarget: "umd",
      library: "UMDNAME",
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    mode: "production",
  },
];
