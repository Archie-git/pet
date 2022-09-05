const fs = require('node:fs');
const path = require('node:path');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = dotenv.parse(fs.readFileSync(process.env.ENV_FILE));

module.exports = {
  mode: 'development',
  entry: {
    'index.bundle': './src/index.tsx',
    'worker.service': './public/worker.service.js',
    'worker.message': './public/worker.message.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: 'js/chunk.[hash:6].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.(png|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      excludeChunks: ['worker.service', 'worker.message'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './public/favicon.ico', to: './' },
        { from: './public/manifest.json', to: './' },
        { from: './public/img', to: './img' },
      ],
    }),
    new DefinePlugin({
      ENV: JSON.stringify(ENV),
    }),
  ],
  devServer: {
    port: 3000,
    static: 'dist',
    historyApiFallback: true,
  },
};
