module.exports = {
  devtool: 'eval-source-map', // 这个可以选择适合自己的配置

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: "./dist", //本地服务器所加载的页面所在的目录
    historyApiFallback: false, // 跳转
    inline: true //实时刷新
  }
}
