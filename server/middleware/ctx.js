/*
 * 通过 `req.ctx(Model)` 来创建一个 Model
 * @Author: xiaoming.bai
 * @Date: 2020-05-03 11:31:09
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-03 12:26:23
 */

module.exports = () => (req, res, next) => {
  const ctx = { req, res }
  req.ctx = (Model) => new Model(ctx)
  next()
}
