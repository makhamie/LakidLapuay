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

  getAllDepartments () {
    return this.fetch('/admin/departments')
  }

  getAllUser () {
    return this.fetch('/admin/users')
  }
}

export default AdminProvider
