import HttpRequest from './HttpRequest'

class AdminProvider extends HttpRequest {
  createUser (email, password, name, departmentId, role) {
    return this.create('/register', {
      email,
      password,
      name,
      department_id: departmentId,
      role
    })
  }
}

export default AdminProvider
