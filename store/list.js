/*
 * List Store
 * @Author: xiaoming.bai
 * @Date: 2020-04-29 23:09:44
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-03 13:27:49
 */

export const state = () => ({
  test: 'Here is the list store!',

  classesList: [],
})

export const mutations = {
  setClassesList(state, payload) {
    state.classesList = payload
  },
}

export const actions = {
  async fetchClassesList({ commit }) {
    const { status, data } = await this.$axios.get('/list/search', {
      params: { pageSize: 20 },
    })

    if (status === 200 && data) {
      commit('setClassesList', data.data)
    }
  },
}
