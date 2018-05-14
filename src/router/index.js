import Vue from 'vue'
import Router from 'vue-router'
import Route from '../Route'
import Supervisor from '@/views/Supervisors/Supervisor'
import Login from '@/views/Global/Login'
import Admin from '@/views/Admin/Admin'
import Subordinate from '@/views/Subordinates/Subordinate'
import Profile from '@/views/Global/Profile'
import ManageUser from '@/views/Admin/ManageUser'
import CreateDepartment from '@/views/Admin/CreateDepartment'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login,
      name: 'Login'
    },
    {
      path: '/admin',
      component: Route,
      children: [
        {
          path: '',
          component: Admin,
          name: 'Admin'
        },
        {
          path: 'create-department',
          component: CreateDepartment,
          name: 'CreateDepartment'
        },
        {
          path: 'manage-user',
          component: ManageUser,
          name: 'ManageUser'
        }
      ]
    },
    {
      path: '/subordinate',
      component: Route,
      children: [
        {
          path: '',
          component: Subordinate,
          name: 'Subordinate'
        }
      ]
    },
    {
      path: '/supervisor',
      component: Route,
      children: [
        {
          path: '',
          component: Supervisor,
          name: 'Supervisor'
        }
      ]
    },
    {
      path: '/profile',
      component: Profile,
      name: 'Profile'
    }
  ]
})
