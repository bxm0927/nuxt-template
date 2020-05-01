/*
 * Server Utils
 * @Author: xiaoming.bai
 * @Date: 2020-05-01 02:35:05
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-01 02:36:51
 */

const get = require('lodash/get')

/**
 * 从请求头中获取访客 UA
 * @param {*} req request
 */
const getUserAgent = (req) => {
  return encodeURIComponent(get(req, 'headers.user-agent', ''))
}

module.exports = {
  getUserAgent,
}
