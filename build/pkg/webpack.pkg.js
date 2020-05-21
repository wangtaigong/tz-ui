const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  entry: {
    tzui: './packages/tzui/index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|less)$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
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
    path: path.resolve(__dirname, '../../packages/tzui/dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
