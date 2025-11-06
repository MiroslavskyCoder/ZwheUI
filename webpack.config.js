const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const isProduction = process.env.NODE_ENV === 'production';

// The base path for GitHub Pages. Corresponds to the repository name.
const publicPath = '/';

module.exports = {
  mode: 'production',
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
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.optimize.SplitChunksPlugin({
      chunks: 'all',
      minSize: 30000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        zwheui: {
          test: /[\\/]ZwheUI.*[\\/]/,
          priority: -5,
          reuseExistingChunk: true,
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight((item) => item)
              .replace(/[\\]/g, '_');
            const allChunksNames = chunks.map((item) => item.name).join('~');
            const crypto = require('crypto');
            const hash = crypto.createHash('sha256');
            hash.update(`${cacheGroupKey}.${moduleFileName}.${allChunksNames}`);
            const hex = hash.digest('hex').slice(0, 8);
            return `lib.ZWHEUI.${hex}`;
          },
          chunks: 'all',
        },
      },
    }),
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
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

