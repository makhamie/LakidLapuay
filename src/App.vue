<template>
  <div id="app">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item">
          <h1>LakidLapuay</h1>
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <!-- <div class="navbar-start">
        <a v-if="userType==='supervisor'" class="navbar-item" href="/sub">
        Subordinators
      </a>
      <a v-if="userType==='supervisor'"  class="navbar-item" href="/res">
      Tasks
    </a>
    <a v-if="userType==='supervisor'"  class="navbar-item" href="/permission">
    Leave Submission
  </a>
  <a v-if="userType==='subordinator'" class="navbar-item" href="/res">
  Responsibilities
</a>
<a v-if="userType==='subordinator'"  class="navbar-item" href="/permission">
Leave Submission
</a>
</div> -->
<!-- {{auth}} -->
<div class="navbar-end">
  <div class="navbar-item">
    <div class="field is-grouped">
      <p class="control">
        <a v-if="getAuth()" class="bd-tw-button button" @click="onLogout">
          <span>Logout</span>
        </a>
      </p>
    </div>
  </div>
</div>
</div>
</nav>
<router-view/>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {getAuth, clearAuth} from './libraries/helper'

export default {
  data () {
  },
  computed: {
    userType () {
      const auth = getAuth()
      console.log('current token', auth)
      if (auth && auth.data) return auth.data.role
      return ''
    },
    currentUserToken () {
      const auth = getAuth()
      console.log('current token', auth)
      if (auth && auth.data) return auth.data.token
      return ''
    }
  },
  methods: {
    ...mapActions({
      updateTypeAction: 'Global/updateAction'
    }),
    onClickSubbordinator () {
      this.$router.push('/sub')
    },
    async onLogout () {
      await clearAuth()
      console.log('LOGOUT', getAuth())
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
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background-color: aquamarine;
}
</style>
