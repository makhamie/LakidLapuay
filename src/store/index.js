import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    role: '',
    isLoading: 0
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    isLogin (state) {
      if (state.role) return true
      return false
    },
    isAdmin (state) {
      return state.role === 'admin'
    },
    isSupervisor (state) {
      return state.role === 'supervisor'
    },
    isSubordinator (state) {
      return state.role === 'subordinator'
    },
    currentUser (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, newUser) {
      state.user = newUser
    },
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
      if (state.isLoading === 0) state.isLoading = state.isLoading - 1
    },
    clearLoading (state) {
      state.isLoading = 0
    }
  },
  actions: {
    setUser ({commit}, newUser) {
      commit('setUser', newUser)
      commit('setRole', newUser.role)
    },
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
