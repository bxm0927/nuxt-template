/*
 * Vuex Store
 * 什么样的数据建议放到 Vuex Store 中集中管理：
 *    1. 多个视图依赖的同一个状态
 *    2. 来自不同视图的行为需要变更同一个状态
 *    3. 多层嵌套的组件、兄弟组件间的状态传递
 * @Author: xiaoming.bai
 * @Date: 2020-04-29 23:09:44
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-04-30 02:06:25
 */

export const state = () => ({
  test: 'Here is the Root store!',

  count: 0,
})

export const getters = {
  doubleCount(state) {
    return state.count * 2
  },
}

export const mutations = {
  setCount(state, payload) {
    state.count = payload
  },
}

export const actions = {
  async fetchCount({ commit }) {
    // mock request
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        const count = new Date().getHours()
        resolve(count)
      }, 300)
    })

    commit('setCount', result)
  },
}
