/*
 * List Model
 * @Author: xiaoming.bai
 * @Date: 2020-05-03 11:27:48
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-03 13:29:22
 */

const { BaseModel } = global.app

class ListModel extends BaseModel {
  search(queryData) {
    return this.http.get('/inter/getClasses.php', queryData)
  }
}

module.exports = ListModel
