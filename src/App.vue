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
      this.isLoading = true
      try {
        let userRole = await UserService.getRole()
        console.log(userRole)
        if (userRole.data.success) {
          this.$store.dispatch('setRole', userRole.data.results)
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
    }
  },
  components: {
    NavBar
  },
  methods: {
    async onLogout () {
      await clearAuth()
      this.$store.dispatch('logout')
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
