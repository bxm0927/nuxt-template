module.exports = {
  // 后端接口地址
  api: 'http://imoocnote.calfnote.com',

  // 发布目录，使用 CDN 时需修改此处
  publicPath: '/_nuxt/',

  // 服务器配置
  server: {
    port: 9000,
    host: 'localhost',
  },

  // Node.js 日志服务配置项
  logger: {
    console: {
      level: 'debug',
      colorize: 'all',
      prettyPrint: true,
      handleExceptions: true,
    },
  },
}
