# music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---------------------------------------------------------------------
- 项目准备工作
  - 搭建`vue-cli`脚手架
  - 将`src`文件夹删除重新组织一个目录结构
  - 在`src/api`下放一个`.gitkeep`文件是因为  
    - git无法追踪一个空的文件夹，当用户需要追踪(track)一个空的文件夹时，会增加`.gitkep`文件
    - `.gitkeep`相当于一个占位符
  - `src/api` 是放置向后端请求代码
  - `src/common` 是通用静态资源
    - `src/common/stylus` 是通用样式
    - 使用stylus时别忘记安装stylus`npm install stylus --save` 
    - `npm install stylus-loader --save`
  - ES6的render函数
    - Vue推荐在绝大多数情况下使用`<template>`来创建HTML
      - 在使用`<template>`实现代码冗长时可以使用`render函数`
      - `render:function(createElement){ return createElement(App)}`的缩写`render: h => h(App)`
  - 在`.eslint.js`中配置`'eol-last':0,'space-before-function-paren':0`
    - 禁止函数圆括号之前有一个空格(space-before-function-paren)和文件末尾保留一行空行(eol-last)这两个规则

- 页面骨架开发
  - 安装babel-runtime `npm install babel-runtime --save`
  - 安装fastclick `npm install fastclick --save`
    - 在main.js引入`import fastclick from 'fastclick'`
    - 然后 `fastclick.attach(document.body)` 推荐写法
  - 安装babel-polyfill `npm install babel-polyfill --save-dev` 
    - 在main.js引入`import 'babel-polyfill'`
  
  - `font-size: 0` 解决两者之间空隙问题
  - CSS样式`&.router-link-active` &表示当前元素
    - `a{}  &.b{}` 如果没有& 就是`a.b{}`
  - `<router-link to=">` 会匹配`.router-link-active` 可以设置被点击后样式
  - 路由默认
    - 在`router/index.js`的routes中增加`path:'/',redirect:'***'` 当打开首页时会重定向到***页面

---------------------------------------------------------------------
- 推荐页面开发
  - JSONP原理
    - 在github上查看`https://github.com/webmodules/jsonp`
    - 安装第三方插件JSONP `npm install jsonp --save`
    - 在`common/js/jsonp.js`封装JSONP  具体看jsonp.js内容