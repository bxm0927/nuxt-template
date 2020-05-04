/*
 * Routers
 * 如果你明确你的路由由哪些模块组成，你可以对该文件进行拆分
 * @See https://www.expressjs.com.cn/guide/routing.html
 * @Author: xiaoming.bai
 * @Date: 2020-04-30 15:35:29
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-04 13:19:22
 */

// const commonService = require('../controller/common')
const ListController = require('../controller/list')

module.exports = (app) => {
  app.get('/list/search', ListController.search) // 获取列表查询数据
}
