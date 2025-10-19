const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

// The base path for GitHub Pages. Corresponds to the repository name.
const publicPath = '/';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist_demo'),
    filename: 'static/js/[name].[contenthash:8].js',
    publicPath: publicPath,
    clean: true,
  },
  devtool: isProduction ? false : 'cheap-module-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [ 
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist_demo'),
    },
    compress: true,
    port: 3000,
    hot: true,
    // For react-router-dom, ensures client-side routing works on refresh
    historyApiFallback: true, 
  },
};

