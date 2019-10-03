const path = require('path');

const MODE = 'development';
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: 'dist',
    open: true
  },

  module: {
    rules: [
      {
        test: /\.scss/, // 拡張子 .scss の場合
        use: [
          'style-loader', // linkタグに出力する機能
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
      },
      {
        test: /\.js$/, // 拡張子 .js の場合
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-proposal-object-rest-spread'],
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }]
            ]
          }
        }
      }
    ]
  }
};
