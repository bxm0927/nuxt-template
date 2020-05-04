/*
 * List Model
 * @Author: xiaoming.bai
 * @Date: 2020-05-03 11:27:48
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-04 17:59:36
 */

const { BaseModel } = global.app

class DetailModel extends BaseModel {
  classChapter(queryData) {
    return this.http.get('/inter/getClassChapter.php', queryData)
  }
}

module.exports = DetailModel
