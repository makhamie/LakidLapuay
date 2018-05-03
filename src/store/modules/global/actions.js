import * as types from './mutationTypes'
import {SupervisorService} from '../../../resources'

export default {
  updateAction ({commit}, payload) {
    commit(types.IS_LOADING, true)
    commit(types.IS_AUTH, payload)
    commit(types.IS_LOADING, false)
  },
  async getAllSubordinator ({commit}) {
    commit(types.IS_LOADING, true)
    let subordinates = await SupervisorService.getSubordinates()
    commit(types.ALL_SUBORDINATE, subordinates.data.result)
    commit(types.IS_LOADING, false)
  },
  async createTask ({commit}, payload) {
    commit(types.IS_LOADING, true)
    let subordinates = await SupervisorService.createTask(payload)
    commit(types.IS_LOADING, false)
  },
  async getAllTask ({commit}) {
    commit(types.IS_LOADING, true)
    let tasks = await SupervisorService.getTasks()
    commit(types.ALL_TASK, tasks.data.result)
    commit(types.IS_LOADING, false)
  }
}
