const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配 css 文件
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        options:{
          presets:['@babel/preset-env'],
          cacheDirectory:true
        }
      }
    ]
  },
  mode: 'development',
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port:8088,
    host:'localhost',
    // hot:true
  },
  devtool: 'eval-source-map'
}
