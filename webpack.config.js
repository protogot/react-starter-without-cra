const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  return {
    entry: "./index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index_bundle.js",
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
            }
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "assets/",
              },
            },
          ],
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                "@babel/preset-env",
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread",
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: "./index.html",
      }),
    ],
  };
};