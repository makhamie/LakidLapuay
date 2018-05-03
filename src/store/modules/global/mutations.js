import * as types from './mutationTypes'

export default {
  [types.IS_LOADING] (state, isLoading) {
    if (isLoading) {
      state.isLoading++
    } else {
      state.isLoading--
    }
  },
  [types.IS_AUTH] (state, status) {
    state.isAuth = status
  },
  [types.ALL_SUBORDINATE] (state, subs) {
    state.allSubordinates = subs
  },
  [types.ALL_TASK] (state, tasks) {
    state.allTasks = tasks
  }

}
