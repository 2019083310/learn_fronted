const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
  entry:'./src/main.ts',
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        use:['ts-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'./index.html')
    })
  ],
  resolve:{
    extensions:['.ts','.js','.cjs','.json']
  },
  devServer:{
    hot:true,
    compress:true
  },
  mode:'development'
}