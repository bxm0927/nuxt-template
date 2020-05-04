/*
 * List Store
 * @Author: xiaoming.bai
 * @Date: 2020-04-29 23:09:44
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-04 18:08:26
 */

export const state = () => ({
  test: 'Here is the detail store!',

  classChapter: [],
})

export const mutations = {
  setClassChapter(state, payload) {
    state.classChapter = payload
  },
}

export const actions = {
  async fetchClassChapter({ commit }, params) {
    const { status, data } = await this.$axios.get('/node/detail/classChapter', { params })

    if (status === 200 && data) {
      commit('setClassChapter', data)
    }
  },
}
