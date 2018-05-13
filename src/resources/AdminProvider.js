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

  getAllUsers (page) {
    if (page < 1) {
      page = 1
    }
    console.log('Page:', page)
    return this.fetch(`/admin/users`, {
      page
    })
  }

  getAvailableSupervisor (departmentId) {
    return this.fetch(`/admin/get-available-supervisor`, {
      department_id: departmentId
    })
  }

  getUserSupervisor (userId) {
    return this.fetch('/admin/relations/get-user-supervisor', {
      id: userId
    })
  }

  editUser (id, departmentId, role) {
    return this.update(`/admin/user/${id}`, {
      department_id: departmentId,
      role
    })
  }

  editSupervisor (subordinateId, supervisorId) {
    return this.update(`/admin/update-user-relation`, {
      subordinate_id: subordinateId,
      supervisor_id: supervisorId
    })
  }
}

export default AdminProvider
