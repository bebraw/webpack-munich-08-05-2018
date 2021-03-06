const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const parts = require("./webpack.parts");

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo"
      })
    ]
  },
  parts.extractCSS({
    use: "css-loader"
  })
]);

const productionConfig = merge([
  {
    output: {
      filename: "[name].[contenthash].js"
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      },
      runtimeChunk: {
        name: "manifest"
      }
    }
  }
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  })
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
