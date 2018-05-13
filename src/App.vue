<template>
  <div id="app">
  <el-menu
    :default-active="null"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <div class="navbar-brand">LakidLapuay</div>
  </el-menu>
<router-view/>
</div>
</template>

<script>
import { clearAuth } from './libraries/helper'

export default {
  data () {
    return {

    }
  },
  computed: {
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
    },
    handleSelect () {

    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
