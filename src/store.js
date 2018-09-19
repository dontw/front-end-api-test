import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, value) {
      state.token = value;
    }
  },
  actions: {
    getToken({commit}) {
      setTimeout(() => {
        commit('setToken', 'tokendesuyo')
      }, Math.random() * 3000)
    }
  }
})
