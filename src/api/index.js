import {users, departments, roles} from './const'

export default {
  login (email, password) {
    console.log(users, email, password)
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        console.log(users[i])
        return users[i]
      }
    }
    return null
  },
  allRole () {
    return roles
  },
  allDepartment () {
    return departments
  }

}
