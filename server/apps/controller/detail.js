/*
 * Detail Controller
 * @Author: xiaoming.bai
 * @Date: 2020-05-04 17:57:53
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-04 17:58:29
 */

const DeatilModel = require('../model/detail')

const classChapter = (req, res, next) => {
  return req
    .ctx(DeatilModel)
    .classChapter(req.query)
    .then((result) => res.send(result))
    .catch(next)
}

module.exports = {
  classChapter,
}
