import Vue from 'vue'
import Router from 'vue-router'
import Supervisor from '@/views/Supervisors/Supervisor'
import Login from '@/views/Global/Login'
import Admin from '@/views/Admin/Admin'
import Subordinate from '@/views/Subordinates/Subordinate'
import Profile from '@/views/Global/Profile'
import ManageUser from '@/views/Admin/ManageUser'

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
      component: Admin,
      name: 'Admin'
    },
    {
      path: '/subordinate',
      component: Subordinate,
      name: 'Subordinate'
    },
    {
      path: '/supervisor',
      component: Supervisor,
      name: 'Supervisor'
    },
    {
      path: '/profile',
      component: Profile,
      name: 'Profile'
    },
    {
      path: '/manage-user',
      component: ManageUser,
      name: 'ManageUser'
    }
  ]
})
