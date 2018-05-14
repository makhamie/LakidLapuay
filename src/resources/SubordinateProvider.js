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
}
export default SubordinateProvider
