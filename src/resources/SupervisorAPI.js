import HttpRequest from './HttpRequest'

class SupervisorAPI extends HttpRequest {
  getSubordinates () {
    let test = this.fetch('relations/get-subordinates')
    return test
  }

  getTasks () {
    let test = this.fetch('tasks')
    return test
  }

  createTask (newTask) {
    let test = this.create('tasks/', newTask)
    return test
  }
}
export default SupervisorAPI
