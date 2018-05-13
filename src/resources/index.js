import AdminProvider from './AdminProvider'
import SubordinateProvider from './SubordinateProvider'
import SupervisorProvider from './SupervisorProvider'
import UserProvider from './UserProvider'

export const AdminService = new AdminProvider()
export const SubordinateService = new SubordinateProvider()
export const SupervisorService = new SupervisorProvider()
export const UserService = new UserProvider()