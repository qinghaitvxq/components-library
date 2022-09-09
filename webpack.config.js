const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

const getEntry = () => {
  let entryObj = {};
  let dir = fs.readdirSync(resolve("./src/components/"));
  dir.forEach((item) => {
    if (item === "index.js") {
      entryObj["index"] = resolve("./src/index.js");
    } else if (item === "commonStyle") {
      // do nothing
    } else {
      entryObj[item] = resolve(`./src/components/${item}`);
    }
  });
  return entryObj;
};

module.exports = {
  mode: devMode ? "development" : "production",
  // entry: "./src/index.js",
  entry: getEntry(),
  output: {
    filename: "[name].js",
    // filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    library: "MERCY",
    libraryTarget: "var",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
              },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "new page",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
    }),
    new CleanWebpackPlugin(),
    new EsmWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    open: true,
  },
};
