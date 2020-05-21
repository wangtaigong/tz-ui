const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  entry: {
    tzui: './packages/tzui.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf|ico)\??.*$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../lib')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
