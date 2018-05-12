import * as types from './mutationTypes'

export default {
  [types.IS_LOADING] (state, isLoading) {
    if (isLoading) {
      state.isLoading++
    } else {
      state.isLoading--
    }
  }

}
