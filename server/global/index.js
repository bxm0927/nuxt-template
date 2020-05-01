/*
 * Bind variables to global.app
 * @Author: xiaoming.bai
 * @Date: 2020-05-01 01:37:16
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-01 12:10:31
 */

const http = require('./http')
const logger = require('./logger')
const config = require('../../config')

class Lib {
  constructor() {
    this.$http = http
    this.$logger = logger
    this.$config = config
  }
}

const SuperGlobal = {
  /**
   * 为了方便后需操作，在全局对象(`global.app`)上绑定一些变量
   */
  registerGlobal() {
    global.app = this.init()
  },
  init() {
    return new Lib()
  },
}

module.exports = SuperGlobal
