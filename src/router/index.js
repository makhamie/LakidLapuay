import Vue from 'vue'
import Router from 'vue-router'
import Supervisor from '@/views/Supervisors/Supervisor'
import Login from '@/views/Global/Login'
import Admin from '@/views/Admin/Admin'
import Subordinate from '@/views/Subordinates/Subordinate'
import Profile from '@/views/Global/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/subordinate',
      component: Subordinate
    },
    {
      path: '/supervisor',
      component: Supervisor
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
