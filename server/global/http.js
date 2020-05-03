/*
 * HTTP request client for Node.js
 * @See https://github.com/axios/axios
 * @Author: xiaoming.bai
 * @Date: 2020-05-01 11:13:00
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-03 13:29:47
 */

/**
 * Usage:
 * 1. 在一个继承自 `BaseModel` 的类里面，你可以直接使用 `this.http.get(path, queryData)`
 * 2. 如果需要请求其他域名下的 API，你需要
 *   - `const { Http } =  global.app`
 *   - `const wechatHttp = new Http('https://api.weixin.qq.com')`
 *   - `wechatHttp.get(path, queryData)`
 * 3. 如果你需要频繁地请求多个域名下的 API，你可以修改 global/base-model.js，如
 *   - `this.pmsHttp = new Http(config.PMSApi, ctx)`
 *   - `this.crmHttp = new Http(config.CRMApi, ctx)`
 * 4. 具体请参考 middleware/ctx.js、global/base-model.js、global/http.js
 */

const set = require('lodash/set')
const qs = require('querystring')
const urlJoin = require('url-join')
const requestPromise = require('request-promise')
const Timer = require('../utils/timer')
const { getIP } = require('../utils')

class Request {
  constructor() {
    return (options, ctx) => {
      // 记录请求耗时
      const timer = new Timer()
      timer.start('getApi')

      // 拼接完整请求 URL
      const query = qs.stringify(options.qs || options.form)
      const url = query ? `${options.uri}?${query}` : options.uri

      // 获取 HTTP 请求头中的信息，并设置到 options 中
      if (ctx && ctx.req) {
        const cookie = ctx.req.get('Cookie')
        const clientIP = getIP(ctx.req)

        if (cookie) {
          set(options, 'headers.Cookie', cookie)
        }
        if (clientIP) {
          set(options, 'headers.x-forwarded-for', clientIP)
        }
      }

      // 发起请求
      return requestPromise(options)
        .then((result) => {
          const duration = timer.stop('getApi') // 停止计时
          const date = new Date().toLocaleString()
          const loggerInfo = `${date} ${duration} ${options.method} ${url}`

          if (result) {
            console.log(loggerInfo)
          } else {
            console.error(`${loggerInfo} ${result.msg}`)
            // TODO: logger
          }

          return result
        })
        .catch((reason) => {
          const duration = timer.stop('getApi') // 停止计时
          const date = new Date().toLocaleString()
          const loggerInfo = `Request failed: ${date} ${duration} ${options.method} ${url} ${reason}`
          console.error(loggerInfo)
          // TODO: logger

          const { statusCode, error } = reason
          ctx.res.status(statusCode).send(error)
        })
    }
  }
}

class Http {
  constructor(api, ctx) {
    const defaultOptions = {
      json: true, // Automatically parses the JSON string in the response
      timeout: 10000, // timeout 10s
      headers: {
        'User-Agent': 'Node.js Request-Promise',
      },
    }

    this.request = new Request()
    this.api = api
    this.ctx = ctx
    this.defaultOptions = defaultOptions

    if (!this.api) {
      throw new Error('The request API cannot be empty.')
    }
  }

  /**
   * GET method
   * @param {*} path 请求路径
   * @param {*} queryData 请求参数
   * @param {*} customOptions 自定义选项
   */
  get(path, queryData = {}, customOptions = {}) {
    const methodOptions = {
      method: 'GET',
      uri: urlJoin(this.api, path),
      qs: queryData,
    }
    const options = { ...this.defaultOptions, ...methodOptions, ...customOptions }

    // TODO: nodeCache
    // if (customOptions.cache) {
    //   // ...
    // }

    return this.request(options, this.ctx)
  }

  /**
   * POST method
   * @param {*} path 请求路径
   * @param {*} formData 请求体
   * @param {*} customOptions 自定义选项
   */
  post(path, formData = {}, customOptions = {}) {
    const methodOptions = {
      method: 'POST',
      uri: urlJoin(this.api, path),
      form: formData,
    }
    const options = { ...this.defaultOptions, ...methodOptions, ...customOptions }

    return this.request(options, this.ctx)
  }
}

module.exports = Http
