/*
 * List Store
 * @Author: xiaoming.bai
 * @Date: 2020-04-29 23:09:44
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-04 17:54:21
 */

import formatPage from '@/assets/javascripts/utils/formatPage'

export const state = () => ({
  test: 'Here is the list store!',

  classesData: null,
  searchParams: {
    curPage: 1,
  },
})

export const getters = {
  // 课程列表
  classesList(state) {
    if (!state.classesData) return []
    return state.classesData.data
  },
  // 构造分页数据
  paginationArr(state) {
    if (!state.classesData) return []
    const { curPage, pageCount } = state.classesData
    return formatPage(Number(curPage), pageCount)
  },
}

export const mutations = {
  setClassesData(state, payload) {
    state.classesData = payload
  },
}

export const actions = {
  async fetchClassesData({ state, commit }, payload) {
    const params = { ...state.searchParams, ...payload }
    const { status, data } = await this.$axios.get('/node/list/search', { params })

    if (status === 200 && data) {
      const pageSize = 6
      const pageCount = Math.ceil(data.totalCount / pageSize)
      commit('setClassesData', { ...data, pageSize, pageCount })
    }
  },
}
