/*
 * Server Configuration
 * @Author: xiaoming.bai
 * @Date: 2020-05-01 12:13:00
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-04 11:38:40
 */

const devConfig = require('./config.dev')
const prodConfig = require('./config.prod')
const isDev = process.env.NODE_ENV !== 'production'

const baseConfig = {
  // ...
}

const config = { ...baseConfig, ...(isDev ? devConfig : prodConfig) }

module.exports = config
