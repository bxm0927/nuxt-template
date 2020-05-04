module.exports = {
  api: 'http://imoocnote.calfnote.com',

  publicPath: '/_nuxt/',

  server: {
    port: 9000,
    host: 'localhost',
  },

  logger: {
    console: {
      level: 'info',
      colorize: 'all',
      prettyPrint: true,
      handleExceptions: true,
    },
    infoFile: {
      level: 'info',
      filename: 'logs/info/%DATE%.log',
      maxFiles: '14d',
      maxSize: '20m',
    },
    errorFile: {
      level: 'error',
      filename: 'logs/error/%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      maxFiles: '14d',
      maxSize: '20m',
      handleExceptions: true,
    },
  },
}
