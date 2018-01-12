const vuxLoader = require('vux-loader')
const webpackConfig = {
  devtool: 'eval-source-map',
  
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "build.js"//打包后输出文件的文件名
  },
   module: {  
    rules: [  
      {  
        test: /\.vue$/,  
        loader: 'vue-loader',  
        options: vueLoaderConfig  
      },  
      // {  
      //   test: /\.js$/,  
      //   loader: 'babel-loader',  
      //   include: [resolve('src'), resolve('test')]  
      // }, 
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      ]
    },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
} // 原来的 module.exports 代码赋值给变量 webpackConfig

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})


// const webpackConfig  = {  
//   entry: {  
//     app: './src/main.js'  
//   },  
//   output: {  
//     path: config.build.assetsRoot,  
//     filename: '[name].js',  
//     publicPath: process.env.NODE_ENV === 'production'  
//       ? config.build.assetsPublicPath  
//       : config.dev.assetsPublicPath  
//   },  
//   resolve: {  
//     extensions: ['.js', '.vue', '.json','.less'],  
//     alias: {  
//       'vue$': 'vue/dist/vue.esm.js',  
//       '@': resolve('src'),  
//     }  
//   },  
//   module: {  
//     rules: [  
//       {  
//         test: /\.vue$/,  
//         loader: 'vue-loader',  
//         options: vueLoaderConfig  
//       },  
//       {  
//         test: /\.js$/,  
//         loader: 'babel-loader',  
//         include: [resolve('src'), resolve('test')]  
//       },  
//       {  
//         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,  
//         loader: 'url-loader',  
//         options: {  
//           limit: 10000,  
//           name: utils.assetsPath('img/[name].[hash:7].[ext]')  
//         }  
//       },  
//       {  
//         test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,  
//         loader: 'url-loader',  
//         options: {  
//           limit: 10000,  
//           name: utils.assetsPath('media/[name].[hash:7].[ext]')  
//         }  
//       },  
//       {  
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,  
//         loader: 'url-loader',  
//         options: {  
//           limit: 10000,  
//           name: utils.assetsPath('fonts/[name].[hash:7].[ext]')  
//         }  
//       }  
//     ]  
//   }  
// }  
