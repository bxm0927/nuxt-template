/*
 * Routers
 * @See https://www.expressjs.com.cn/guide/routing.html
 * @Author: xiaoming.bai
 * @Date: 2020-04-30 15:35:29
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-01 02:13:54
 */

// const commonService = require('../service/common')
const ListService = require('../service/list')
// ...

module.exports = (app) => {
  app.get('/list/search', ListService.search) // 获取房源搜索数据
}
