import Vue from 'vue'
import Router from 'vue-router'
import Supervisor from '@/layouts/Supervisor'
import Login from '@/components/Login'
import Admin from '@/layouts/admin/Admin'
import Subordinate from '@/layouts/Subordinate'

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
    }
  ]
})
