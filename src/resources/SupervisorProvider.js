import HttpRequest from './HttpRequest'

class SupervisorProvider extends HttpRequest {
  getSubordinators () {
    return this.fetch('/get-subordinates')
  }
  createTask (subordinateId, name, startedAt, finishedAt, description) {
    return this.create('/task', {
      subordinate_id: subordinateId,
      name,
      started_at: startedAt,
      finished_at: finishedAt,
      description
    })
  }
  getLeaveRequest (type, page) {
    return this.fetch('/get-leave-requests', {
      request: type,
      page: page
    })
  }
  getLeaveRequestDetail (id, page) {
    return this.fetch('/leave-tasks-by-leave-request', {
      id,
      page
    })
  }
  responseLeaveRequest (id, action) {
    return this.update('/response-leave-request', {
      leave_request_id: id,
      action
    })
  }
  getSupervisorTask (page) {
    return this.fetch('/tasks/get-supervisor-tasks', {
      page
    })
  }
  getCurrentTask (page) {
    return this.fetch('/tasks/get_current_tasks', {
      page
    })
  }
}

export default SupervisorProvider
