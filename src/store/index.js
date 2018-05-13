import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: ''
  },
  mutations: {
    setRole (state, newRole) {
      state.role = newRole
    },
    clearRole (state) {
      state.role = ''
    }
  },
  actions: {
    setRole ({ commit }, newRole) {
      commit('setRole', newRole)
    },
    logout ({commit}) {
      commit('clearRole')
    }
  }
})
