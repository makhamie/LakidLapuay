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
}

export default SupervisorProvider
