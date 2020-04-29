# integration

本项目是使用 `create-nuxt-app` 新建的一个纯净的、没有附加插件的项目，然后渐进式地集成（Integration）一些所需功能。

![](https://user-gold-cdn.xitu.io/2020/4/29/171c3f7f555f156f?w=870&h=458&f=png&s=62053)

## 集成 UI framework

- https://element.eleme.io/#/zh-CN/component/quickstart
- https://zh.nuxtjs.org/api/configuration-build/#babel

全局引入 Element-UI 会使打包后的 vendors.js 变得异常的大，所以需要进行按需加载。

```bash
npm install --save element-ui
npm install --save-dev babel-plugin-component
```

在 nuxt.config.js 中设置 babel：

```js
build: {
  babel: {
    plugins: [['component', { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' }]],
  },
}
```

## 集成 server framework

我们需要使用 Node.js 后端服务来进行拦截过滤、API 代理等操作，这里使用 Express：

```bash
# nodemon 提供了 Node.js 热更新
# cross-env 为不同平台正确设置或使用环境变量
npm install --save express
npm install --save-dev cross-env nodemon
```

新建 `server/index.js` 文件，这里是 server 的启动目录（Entry Point）。

目前只是启动了一个 HTTP 服务，具体的中间件和路由等功能后续用到了再添加。

最后，修改 NPM Scripts，通过 Node.js 来启动项目：

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server",
  "build": "nuxt build",
  "start": "cross-env NODE_ENV=production node server/index.js",
  "analyze": "nuxt build --analyze",
  "generate": "nuxt generate"
},
```

## 集成 Nuxt.js modules

通过 axios 进行 HTTP 请求，Nuxt.js 的 `@nuxtjs/axios` 模块对 axios 进行了封装，更好用了。

https://zh.nuxtjs.org/guide/modules

https://github.com/nuxt-community/axios-module

```bash
npm install --save @nuxtjs/axios
```

在 `nuxt.config.js` 中进行模块配置：

```js
module.exports = {
  modules: ['@nuxtjs/axios'],
  axios: {
    // options
  },
}
```

## 集成 linting tools

前端项目引入静态校验工具（Linting tools），可以帮助我们提升代码的规范和质量。

本项目采用如下组合：

- [ESLint](https://github.com/eslint/eslint): ESLint 注重于代码质量（Code-quality rules）
- [Prettier](https://github.com/prettier/prettier): Prettier 注重于格式化规则（Formatting rules）
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/blob/v6.2.2/docs/user-guide): 解析 Vue

ESLint 配置：`.eslintrc.js`、`.eslintignore`

Prettier 配置：`.prettierrc`、`.prettierignore`

```
npm install --save-dev eslint prettier babel-eslint eslint-loader eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue@6.2.2
```

TODO: Lint staged files

## 集成 development tools

1. [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)

在 VS Code 中，解决点击 webpack 别名开头的路径不跳转的问题

2. [.editorconfig](https://editorconfig.org/)

EditorConfig 有助于维护跨多个编辑器和 IDE 从事同一项目的多个开发人员的一致编码风格。

## 集成 CSS Preprocessor

如果要使用 [sass](https://www.sass.hk/) 就必须要安装 node-sass 和 sass-loader 。

```bash
npm install --save-dev node-sass sass-loader
```

然后在组建中你就可以这样使用：

```vue
<style lang="scss" scoped>
.page-list {
  color: red;
  .container {
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
```

## 集成 Icon font

https://www.iconfont.cn/
