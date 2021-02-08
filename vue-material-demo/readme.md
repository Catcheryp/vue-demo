### vue-material 依赖

```
npm install vue-material --save

# 安装scss依赖
npm install sass-loader@7.3.1 --save-dev
npm install node-sass@4.14.1 --save
npm install style-loader --save

# 接下来，在build/webpack.base.config.js中添加：
{
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
```

<br>

###  运行

运行本项目直接执行下面命令即可

```
npm install

npm run dev
```

