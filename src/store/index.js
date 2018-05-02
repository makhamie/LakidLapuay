import Vue from 'vue'
import Vuex from 'vuex'
import Global from './modules/global/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Global
  }
  // strict: true
})
