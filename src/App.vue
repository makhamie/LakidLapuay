<template>
  <div id="app">
    <admin-navbar v-if="userType ==='admin'" :userType="userType" :activeRoute="activeRoute" @logout="onLogout"/>
    <router-view/>
  </div>
</template>

<script>
import { getAuth, clearAuth } from './libraries/helper'
import AdminNavbar from '@/components/AdminNavbar'

import NavBar from '@/components/parts/NavBar'

export default {
  data () {
    return {

    }
  },
  components: {
    NavBar,
    AdminNavbar
  },
  computed: {
    userType () {
      if (getAuth()) {
        return getAuth().role
      } else {
        return null
      }
    },
    activeRoute () {
      return this.$route.name
    }
    // userType () {
    //   const auth = getAuth()
    //   console.log('current token', auth)
    //   if (auth && auth.data) return auth.data.role
    //   return ''
    // },
    // currentUserToken () {
    //   const auth = getAuth()
    //   console.log('current token', auth)
    //   if (auth && auth.data) return auth.data.token
    //   return ''
    // }
  },
  methods: {
    async onLogout () {
      await clearAuth()
      // console.log('LOGOUT', getAuth())
      this.$router.push('/')
      // this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.navbar {
  background-color: aquamarine;
}
.el-menu .navbar-brand {
    color: #fff;
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0px 60px 0px 20px;
    font-size: 26px;
  }
.pull-right { float: right !important; }

</style>
