import HttpRequest from './HttpRequest'

class SubordinateProvider extends HttpRequest {
  getAvailableColleague (start, finish) {
    return this.fetch('/get-collations-by-range', {
      start,
      finish
    })
  }
  getTaskInRange (start, finish) {
    return this.fetch('/tasks/get-tasks-in-range', {
      start,
      finish
    })
  }
  createLeaveRequest (reason, start, finish) {
    return this.create('/leave-request', {
      reason,
      started_at: start,
      finished_at: finish
    })
  }
  createLeaveTasks (taskArray) {
    return this.create('/leave-task', {
      leave_task_array: taskArray
    })
  }
  getLeaveTask (type, page) {
    return this.fetch('get-leave-tasks-by-substitute', {
      request: type,
      page: page
    })
  }
  responseLeaveTask (leaveTaskId, response) {
    return this.update('response-leave-task', {
      leave_task_id: leaveTaskId,
      action: response
    })
  }
  getSubordinateTasks (action, page) {
    return this.fetch('tasks', {
      page: page,
      action: action
    })
  }
}
export default SubordinateProvider
