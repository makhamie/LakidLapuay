import Vue from 'vue'
import Vuex from 'vuex'
import API from '../api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userType: 'admin',
    user: null
  },
  getters: {
    userType: state => state.userType,
    user: state => state.user
  },
  mutations: {
    updateUser (state, user) {
      state.user = user
    },
    updateUserType (state, userType) {
      state.userType = userType
    }
  },
  actions: {
    login ({commit}, payload) {
      console.log('In action')
      const user = API.login(payload.email, payload.password)
      console.log('User', user)
      commit('updateUser', user)
      commit('updateUserType', user.role.role)
    },
    logout ({commit}) {
      commit('updateUser', null)
      commit('updateUserType', 'admin')
    }
  }
})
