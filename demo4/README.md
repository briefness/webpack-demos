# 在demo2的基础上修改配置

# 在demo2执行打包是在终端执行webpack（非全局安装需使用node_modules/.bin/webpack）

# 为了更加便捷，我们换一种方式实现。

# 不过值得庆幸的是npm可以引导任务执行，
# 对npm进行配置后可以在命令行中使用简单的npm start命令来替代上面略微繁琐的命令。

# 在package.json中的scripts中增加"start"命令，利用npm start代替执行
# webpack（非全局安装需使用node_modules/.bin/webpack）


{
  "name": "demotest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack"  // 改变的地方
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.16.0"
  }
}
在运行npm start的过程中需要webpack-cli，

# 在运行之前先安装webpack-cli，执行：npm install -D webpack-cli


# 总结
修改完成后，在终端执行以下操作
# npm install -D webpack-cli
# npm start
