import AdminProvider from './AdminProvider'
import SubordinateProvider from './SubordinateProvider'
import SupervisorProvider from './SupervisorProvider'

export const AdminService = new AdminProvider()
export const SubordinateService = new SubordinateProvider()
export const SupervisorService = new SupervisorProvider()
