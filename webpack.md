# webpack

## webpack.config.js
1.引入
```
const webpack = require('webpack')
```

2.输出配置对象
```
module.exports = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist')
    filename: 'main.js'
  }
}

```
2.1 封装一个输出绝对路径的方法
```
function resolve(path) {
  return Path.resolve(__dirname,path);
}

```
2.2 配置当前的运行环境
```
const isProd = process.env.NODE_ENV === 'production'

module.exports={
  mode: isProd? 'production':'development'
}

```


3.设置站点文件
```
//webpack.config.js

devServer:{
  contentBase:'', //默认开启站点的位置
  port:3000,
  host:'localhost'
}

```




6.热启动  webpack-dev-server

7.配置模版插件   html-webpack-plugin
```
cnpm i html-webpack-plugin --save-dev
```
```
/插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

____________________________________
plugins:[
  new HtmlWebpackPlugin({
      remplate: resolve('public/index.html'),
    })
]
```
8.解析css文件   css-loader |  style-loader  ||  postcss-loader  |  autoprefixed

```
module: {

  rules: [
    {
      test: /\.css$/,

    }
  ]
}

```
> 此时css打包到js中
```
{
  test: /\.css$/,
  loader:['style-loader','css-loader']
}

```
** tips
> 从右向左解析



9.解析图片  file-loader   url-loader
```
cnpm i file-loader url-loader  --save-dev
```

{
  test: /\.(png|jpeg|svg|gif|jpg)$/,
  loader:['file-loader'],
  <!-- loader:['url-loader'], -->

}
