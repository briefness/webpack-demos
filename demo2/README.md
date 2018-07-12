在demo1的基础上修改配置

demo1的运行是手动执行webpack app/main.js --output dist/bundle.js，

需要手动指定入口和输出文件
而demo2是在demo1的基础上添加webpack.config.js配置文件，来快捷配置入口和输出文件

module.exports = {
  entry:  __dirname + '/app/main.js', //入口文件
  output: {
    path: __dirname + '/dist',//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}

在webpack中，执行webpack会优先默认执行webpack.config.js

所以只需在终端执行：
webpack
非全局安装需使用
node_modules/.bin/webpack
