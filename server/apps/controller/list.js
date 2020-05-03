/*
 * List Controller
 * @Author: xiaoming.bai
 * @Date: 2020-05-03 11:27:18
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-03 12:32:01
 */

const ListModel = require('../model/list')

const search = (req, res, next) => {
  return req
    .ctx(ListModel)
    .search(req.query)
    .then((result) => res.send(result))
    .catch(next)
}

module.exports = {
  search,
}
