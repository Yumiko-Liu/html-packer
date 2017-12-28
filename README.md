# html-packer

利用webpack使传统html项目在node服务器运行并打包的小玩意，主要的功能：

> * 可以使用ES6，CommonJS语法来开发项目
> * 页面修改后实时同步，无需刷新浏览器
> * 对项目进行打包（代码压缩，图片压缩）

### 目录结构

```
├── dist                                打包后的项目文件
├── config                              webpack配置目录
│   ├── utils.js                        相关工具方法
│   ├── webpack.config.dev.js           wabpack开发环境配置
│   └── webpack.config.js               wabpack生产环境配置
├── src                                 源码目录
│   ├── assets                          项目相关资源
│   │   ├── css                         项目公用css
│   │   ├── image                       项目图片
│   │   └── js                          项目公用js
│   └── pages                           页面目录
│       ├── pageOne                     “pageOne”页面目录
│       │   ├── index.js                页面入口文件
│       │   ├── pageOne.css             页面样式文件
│       │   └── pageOne.html            页面html模版
│       └── pagetwo
│           ├── index.js                
│           └── pageTwo.html            
└── package.json
```

### 创建页面

创建一个pageOne页面
首先在`src/pages`下创建一个名为pageOne的目录，并在该目录中创建入口文件index.js和pageOne.html
在index.js引入html模版和页面相关资源
```javascript
require('./pageOne.html');
require('./pageOne.css');
```

启动node服务器
```bash
npm run dev
```

在浏览器打开`http://localhost:8080/pageOne.html`即可访问
页面修改后会自动同步到浏览器，无需手动刷新

### 项目打包

执行命令
```bash
npm run build
```

即可对项目进行打包

* 对代码进行压缩
* 对小于1kb的图片转换成base64
* 对其余图片进行压缩

### 关于
* 做工粗糙
* 仅供娱乐
* 没有卵用
