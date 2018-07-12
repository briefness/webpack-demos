正式使用Webpack
webpack可以在终端中使用，在基本的使用方法如下：

# {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
# {destination for bundled file}处填写打包文件的存放路径
# 填写路径的时候不用添加{}
# webpack {entry file} --output {destination for bundled file}
webpack app/main.js --output dist/bundle.js
指定入口文件后，webpack将自动识别项目所依赖的其它文件，不过需要注意的是如果你的webpack不是全局安装的，那么当你在终端中使用此命令时，需要额外指定其在node_modules中的地址，继续上面的例子，在终端中输入如下命令

# webpack非全局安装的情况
node_modules/.bin/webpack app/main.js --output dist/bundle.js
