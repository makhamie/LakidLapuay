import API from '@/api/index'
import * as types from './mutationTypes'

export default {
  updateAction ({commit}, payload) {
    commit(types.IS_LOADING, true)
    commit(types.IS_AUTH, payload)
    commit(types.IS_LOADING, false)
  }
}
