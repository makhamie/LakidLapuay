<template>
  <div id="app">
    <nav-bar @logout="onLogout"/>
    <!-- <admin-navbar v-if="userType ==='admin'" :userType="userType" :activeRoute="activeRoute" @logout="onLogout"/> -->
    <router-view v-if="!isLoading"/>
  </div>
</template>

<script>
import { getAuth, clearAuth } from './libraries/helper'
import { UserService } from '@/resources'
import NavBar from '@/components/parts/NavBar'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  async mounted () {
    if (getAuth()) {
      // start load
      this.isLoading = true
      try {
        let userRole = await UserService.getRole()
        console.log(userRole)
        if (userRole.data.success) {
          this.$store.dispatch('setRole', userRole.data.results)
        }
        this.isLoading = false
      // stop load
      } catch (error) {
        this.isLoading = false
        //stop load
        console.log(error)
      }
    }
  },
  components: {
    NavBar
  },
  methods: {
    async onLogout () {
      // localStorage.clear()
      await clearAuth()
      this.$store.dispatch('logout')
      // this.$router.push({name: 'Login'})
    
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
