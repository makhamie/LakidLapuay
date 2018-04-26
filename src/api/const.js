export const roles = [
  {
    id: 1,
    role: 'subordinator'
  },
  {
    id: 2,
    role: 'supervisor'
  }
]

export const departments = [
  {
    id: 1,
    name: 'engineering'
  },
  {
    id: 2,
    name: 'science'
  },
  {
    id: 3,
    name: 'human'
  }
]

export const users = [
  {
    id: 1,
    email: 'admin',
    password: 'admin',
    role: 'admin',
    department: departments[0]
  },
  {
    id: 2,
    email: 'user1',
    password: 'user1',
    role: roles[0],
    department: departments[1]
  },
  {
    id: 2,
    email: 'user2',
    password: 'user2',
    role: roles[1],
    department: departments[2]
  }
]
