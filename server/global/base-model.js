/*
 * 数据模型基类
 * @Author: xiaoming.bai
 * @Date: 2020-05-03 11:49:09
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-03 12:01:11
 */

const Http = require('./http')
const config = require('../../config')

class BaseModel {
  constructor(ctx) {
    if (!ctx || !ctx.req || !ctx.res) {
      throw new Error('No ctx, please add ctx with req and res!') // 创建对象错误
    }

    this.http = new Http(config.api, ctx)
  }
}

module.exports = BaseModel
