import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: '',
    isLoading: 0
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    }
  },
  mutations: {
    setRole (state, newRole) {
      state.role = newRole
    },
    clearRole (state) {
      state.role = ''
    },
    increseLoading (state) {
      state.isLoading = state.isLoading + 1
    },
    decreaseLoading (state) {
      if (state.isLoading > 0) state.isLoading = state.isLoading - 1
    },
    clearLoading (state) {
      state.isLoading = 0
    }
  },
  actions: {
    setRole ({ commit }, newRole) {
      commit('setRole', newRole)
    },
    logout ({commit}) {
      commit('clearRole')
    },
    startLoad ({commit}) {
      commit('increseLoading')
    },
    finishLoad ({commit}) {
      commit('decreaseLoading')
    }
  }
})
