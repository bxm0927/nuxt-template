/*
 * Server Utils
 * @Author: xiaoming.bai
 * @Date: 2020-05-01 02:35:05
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-03 01:13:53
 */

const get = require('lodash/get')

/**
 * 获取客户端 IP 地址
 * @param {Object} req request
 */
const getIP = (req) => {
  const forwardedIpsStr = req.get('x-forwarded-for')
  if (forwardedIpsStr) return forwardedIpsStr
  return req.connection.remoteAddress
}

/**
 * 从请求头中获取访客 UA
 * @param {*} req request
 */
const getUserAgent = (req) => {
  return encodeURIComponent(get(req, 'headers.user-agent', ''))
}

module.exports = {
  getIP,
  getUserAgent,
}
