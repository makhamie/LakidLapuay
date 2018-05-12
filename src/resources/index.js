import AdminProvider from './AdminProvider'
import SubordinateProvider from './SubordinateProvider'
import SupervisorProvider from './SupervisorProvider'

export const adminService = new AdminProvider()
export const subordinateService = new SubordinateProvider()
export const supervisorService = new SupervisorProvider()
