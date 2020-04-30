const devConfig = require('./config.dev')
const prodConfig = require('./config.prod')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = isDev ? devConfig : prodConfig
