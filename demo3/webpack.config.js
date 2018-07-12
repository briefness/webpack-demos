module.exports = {
  entry: {
    'bundle2': __dirname + '/app/Greeter.js',
    'bundle1': __dirname + '/app/Greeter1.js'
  }, //入口文件
  output: {
    path: __dirname + '/dist',//打包后的文件存放的地方
    filename: "[name].js"//打包后输出文件的文件名
  }
}
