import HttpRequest from './HttpRequest'

class UserProvider extends HttpRequest {
  getRole () {
    return this.fetch('/user-role')
  }
}
export default UserProvider
