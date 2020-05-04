# 🎓 nuxt-template

> My praiseworthy Nuxt.js project

一个基于 Vue + Node.js 的前后端分离架构，前端使用 Nuxt.js，服务端使用 Express。

脚手架功能完整，SEO 完美支持，开箱即用，你也可以选择性地进行插拔，unbelievable 🚀🚀🚀

## 📦 Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 📖 项目技术架构

本项目采用前后端分离架构，并全面拥抱 Vue 优良的生态系统！

开发流程为：

1. 前端负责视图层（Nuxt.js）和路由控制（Node.js）
2. 后端负责控制层（Restful API）、服务层以及数据访问层
3. 前后端只需要通过指定 API 进行交互即可

宏观上的前后端分离架构：

![](https://user-gold-cdn.xitu.io/2020/5/4/171e00c05b010d30?w=590&h=611&f=png&s=78341)

更具体的：

![](https://user-gold-cdn.xitu.io/2020/5/4/171e0507f25c2597?w=1280&h=720&f=png&s=69223)

## 📝 And so...

所以你应该了解以下技术，并熟知它们的文档，以便更好地进行协同开发！

前端（Vue）部分：

- [vue](https://github.com/vuejs/vue)：一个渐进式的、用于构建用户界面的前端 MVVM 框架，核心是响应的数据绑定和组系统件
- [vue-router](https://github.com/vuejs/vue-router)：一个专为 Vue.js 应用程序开发的路由管理器
- [vuex](https://github.com/vuejs/vuex)：一个专为 Vue.js 应用程序开发的集中式状态管理库
- [Nuxt](https://github.com/nuxt/nuxt.js)：一个基于 Vue.js 的通用应用框架
- [axios](https://github.com/axios/axios)：一个基于 Promise 的 HTTP request client
- [Sass](https://github.com/sass/sass)：CSS 预编译处理器
- [ES6](http://es6.ruanyifeng.com/)：ECMAScript 的下一代语法标准，模块化、解构赋值、Promise、Class 等新特性非常好用
- [element-ui](https://github.com/ElemeFE/element)：基于 Vue 2.0 的桌面端组件库

服务端（Node.js）部分：

- [Node.js](https://github.com/nodejs/node)：Node.js JavaScript runtime
- [Express](https://github.com/nuxt/nuxt.js)：一个基于 Node.js 的轻量级 Web 应用程序框架。核心是路由和中间件。
- [request-promise](https://github.com/request/request-promise)：HTTP request client，类似于 axios
- [winston](https://github.com/winstonjs/winston)：Node.js 日志服务
- [node-cache](https://github.com/node-cache/node-cache)：Node.js 内存缓存

工具&部署部分：

- [ESLint](https://github.com/eslint/eslint)：一个语法规则和代码风格的 JavaScript 语言检查工具，可以用来保证写出语法正确、风格统一的代码。
- [Prettier](https://github.com/prettier/prettier)：一个优秀的代码格式化工具，与 ESLint 配合使用
- [Babel](https://github.com/babel/babel)：一个 JavaScript 语法编译器，它将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 代码，使我们的 JavaScript 代码能够实现跨浏览器兼容。
- [Webpack](https://github.com/webpack/webpack)：前端模块打包工具
- [PM2](https://github.com/Unitech/pm2)：一个带有负载均衡功能的 Node.js 应用的进程管理器
- Jenkins
- Docker

## 🍀 License

The code is available under the MIT license.
