const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'public/src');
const BUILD_DIR = path.resolve(__dirname, 'public/dist');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './public/src/index.jsx'
  ],
  // entry: path.resolve(SRC_DIR, 'index.jsx'),
  module: {
    rules: [

      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/
      //   // query: {
      //   //   presets: ['es2015', 'react', 'stage-3']
      //   // }
      //   // use: ['babel-loader']
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};  

// entry: path.resolve(SRC_DIR, 'index.jsx'),