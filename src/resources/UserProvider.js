import HttpRequest from './HttpRequest'

class UserProvider extends HttpRequest {
  getRole () {
    return this.fetch('/user-role')
  }
  getUserData () {
    return this.fetch('/get-user')
  }
  updateUser (data) {
    return this.update('/user-update', data)
  }
}
export default UserProvider
