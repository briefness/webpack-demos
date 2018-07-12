# 在demo2的基础上修改配置

# 入口为多文件

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

# 总结

页面并没有正常显示，但是webpack打包正常
