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
}
export default SubordinateProvider
