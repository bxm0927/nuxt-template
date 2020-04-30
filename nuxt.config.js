/*
 * Nuxt.js Configuration
 * @Author: xiaoming.bai
 * @Date: 2020-04-30 01:02:10
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-01 00:20:14
 */
const config = require('./config')
const isDev = process.env.NODE_ENV !== 'production'
console.log('Nuxt.js Configuration isDev: ', isDev)

module.exports = {
  mode: 'universal',
  server: {
    port: config.server.port, // default: 3000
    host: config.server.host, // default: 'localhost'
  },

  /*
   ** Headers of the page
   ** @see https://github.com/nuxt/vue-meta
   */
  head: {
    htmlAttrs: { lang: 'zh-Hans' },
    title: 'nuxt-template',
    meta: [
      // Renderer
      { charset: 'utf-8' },
      { name: 'renderer', content: 'webkit' },
      { name: 'force-rendering', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'theme-color', content: '#ff4057' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

      // SEO
      { name: 'author', content: '80583600@qq.com' },
      { hid: 'keywords', name: 'keywords', content: 'Vue, Nuxt.js,Node.js' },
      { hid: 'description', name: 'description', content: 'My beautiful Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: '//api.map.baidu.com' },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],
  /*
   ** Axios module configuration
   ** @see https://zh.nuxtjs.org/guide/modules
   ** @see https://github.com/nuxt-community/axios-module
   */
  axios: {},

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/], // 防止重复打包
    extractCSS: !isDev, // 提取 CSS
    publicPath: config.publicPath, // 发布目录
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    /**
     * You can extend babel config here
     */
    babel: {
      // 按需加载 Element UI
      // @see https://element.eleme.io/#/zh-CN/component/quickstart
      // @see https://zh.nuxtjs.org/api/configuration-build/#babel
      plugins: [['component', { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' }]],
    },
  },
}
