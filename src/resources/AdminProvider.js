import HttpRequest from './HttpRequest'

class AdminProvider extends HttpRequest {
  createUser(email, password) {
    this.create('/register', {
      email: email,
      password: password
    })
  }
}

export default AdminProvider