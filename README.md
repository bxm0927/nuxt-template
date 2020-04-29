# nuxt-template

> My sublime Nuxt.js project

## Build Setup

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

## Project Init

本项目是使用 `create-nuxt-app` 新建的一个纯净的、没有附加插件的项目，然后渐进式（Progressive）增加所需功能。

![](https://user-gold-cdn.xitu.io/2020/4/29/171c3f7f555f156f?w=870&h=458&f=png&s=62053)

```
create-nuxt-app v2.15.0
✨ Generating Nuxt.js project in nuxt-template
? Project name `nuxt-template`
? Project description `My sublime Nuxt.js project`
? Author name `bxm0927`

? Choose programming language `JavaScript`
> JavaScript
> TypeScript

? Choose the package manager (Use arrow keys) `Npm`
  Yarn
> Npm

? Choose UI framework `None`
> None
  Ant Design Vue
  Bootstrap Vue
  Buefy
  Bulma
  Element
  Framevuerk
  iView
  Tachyons
  Tailwind CSS
  Vuesax
  Vuetify.js

? Choose custom server framework (Use arrow keys) `None (Recommended)`
> None (Recommended)
  AdonisJs
  Express
  Fastify
  Feathers
  hapi
  Koa
  Micro

? Choose Nuxt.js modules (Press <space> to select, <a> to toggle all, <i> to invert selection)
  ( ) Axios
  ( ) Progressive Web App (PWA) Support
  ( ) DotEnv

? Choose linting tools (Press <space> to select, <a> to toggle all, <i> to invert selection)
  ( ) ESLint
  ( ) Prettier
  ( ) Lint staged files
  ( ) StyleLint

? Choose test framework (Use arrow keys) `None`
> None
  Jest
  AVA

? Choose rendering mode (Use arrow keys) `Universal (SSR)`
> Universal (SSR)
  Single Page App

? Choose development tools (Press <space> to select, <a> to toggle all, <i> to invert selection)
  ( ) jsconfig.json (Recommended for VS Code)
  ( ) Semantic Pull Requests
```

### Introduce the UI framework

- https://element.eleme.io/#/zh-CN/component/quickstart
- https://zh.nuxtjs.org/api/configuration-build/#babel

全局引入 Element-UI 会使打包后的 vendors.js 变得异常的大，所以需要进行按需加载。

```
npm install --save element-ui
```

在 nuxt.config.js 中设置 babel：

```js
build: {
  babel: {
    plugins: [['component', { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' }]],
  },
}
```

### Introduce the server framework

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

### Introduce the Nuxt.js modules

```
"@nuxtjs/axios": "^5.3.6",
"@nuxtjs/pwa": "^3.0.0-0"
"@nuxtjs/style-resources": "^1.0.0",
```

Axios

PWA

Style Resources

### Introduce the linting tools

前段项目引入静态校验工具（Linting tools）可以帮助我们提前发现错误和美化代码。本项目采用 ESLint + Prettier。

- ESLint 注重于代码质量（Code-quality rules）
- Prettier 注重于格式化规则（Formatting rules）

ESLint 配置：`.prettierrc`、`.prettierignore`

Prettier 配置：`.prettierrc`、`.prettierignore`

ESLint

Prettier

Lint staged files

### Introduce the development tools

jsconfig.json (Recommended for VS Code)

### Introduce the CSS Preprocessor

如果要使用 sass 就必须要安装 node-sass 和 sass-loader 。

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
