# 在demo3的基础上增加 devtool配置（方便调试代码）
# 并增加  使用webpack构建本地服务器
   npm install --save-dev webpack-dev-server
# 修改webpack.config.js配置
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

# 修改package.json 配置，增加 "dev": "webpack-dev-server --open"

{
  "name": "demotest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",
    "dev": "webpack-dev-server --open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.16.0",
    "webpack-cli": "^3.0.8"
  }
}

# 总结
在终端执行 npm run dev
