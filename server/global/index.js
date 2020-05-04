/*
 * Bind variables to `global.app`
 * @Author: xiaoming.bai
 * @Date: 2020-05-01 01:37:16
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-03 16:54:28
 */

const Http = require('./http')
const Logger = require('./logger')
const BaseModel = require('./base-model')
const config = require('../../config')

class Lib {
  constructor() {
    this.config = config
    this.Logger = Logger
    this.Http = Http
    this.BaseModel = BaseModel
  }
}

const SuperGlobal = {
  /**
   * 为了方便后需操作，在全局对象(`global.app`)上绑定一些变量。
   * 然后，你可以这样使用他们：`golbal.app.BaseModel` ...
   */
  registerGlobal() {
    global.app = this.init()
  },
  init() {
    return new Lib()
  },
}

module.exports = SuperGlobal
