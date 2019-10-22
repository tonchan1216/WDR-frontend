/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const MODE = 'development';
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,
  entry: {
    main: './src/js/index.tsx',
    style: './src/sass/main.scss'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: 'dist',
    open: true
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
      minSize: 24000,
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { drop_console: true },
          output: {
            comments: false,
            beautify: false
          }
        }
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss/, // 拡張子 .scss の場合
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // CSSをバンドルするための機能
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader', // Sassファイルの読み込みとコンパイル
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
