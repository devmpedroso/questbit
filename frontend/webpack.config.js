const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // Limpa a pasta dist antes do build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Usa seu HTML como base
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,  // Gzip para melhorar performance
    port: 3000,  // Pode alterar a porta se precisar
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Facilita importações sem extensão
  },
};