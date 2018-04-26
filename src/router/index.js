import Vue from 'vue'
import Router from 'vue-router'
import Responsibilities from '@/components/Responsibilities'
import Subordinator from '@/components/Subordinators'
import Login from '@/components/Login'
import Admin from '@/components/Admin'

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
      path: '/sub',
      component: Subordinator
    },
    {
      path: '/res',
      component: Responsibilities
    }
  ]
})
