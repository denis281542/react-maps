const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            },
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          title: "Шины, диски, масла, аккумуляторы - купить в Екатеринбурге, интернет-магазин Express-Шина",
        })
    ],
}; 