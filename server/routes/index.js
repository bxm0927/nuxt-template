/*
 * @Author: xiaoming.bai
 * @Date: 2020-04-30 15:35:29
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-04-30 18:24:20
 */

// service
const ListService = require('../service/list')

// middleware
const logger = require('../middleware/logger')

module.exports = (app) => {
  app.get('/list/search', logger, ListService.search) // 获取房源搜索数据
}
