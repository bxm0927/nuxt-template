/*
 * Routers
 * @See https://www.expressjs.com.cn/guide/routing.html
 * @Author: xiaoming.bai
 * @Date: 2020-04-30 15:35:29
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-03 12:08:03
 */

// const commonService = require('../controller/common')
const ListController = require('../controller/list')

module.exports = (app) => {
  app.get('/list/search', ListController.search) // 获取列表查询数据
}
