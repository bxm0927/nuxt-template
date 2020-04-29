/*
 * Nuxt.js Configuration
 * @Author: xiaoming.bai
 * @Date: 2020-04-30 01:02:10
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-04-30 02:11:44
 */

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   ** @see https://github.com/nuxt/vue-meta
   */
  head: {
    htmlAttrs: { lang: 'zh-Hans' },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
