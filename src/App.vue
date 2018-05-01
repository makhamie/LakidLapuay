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
        <div class="navbar-start">
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
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a v-if="!currentUser" class="bd-tw-button button" href="/">
                  <span>Login</span>
                </a>
                <a v-else class="bd-tw-button button" @click="onLogout">
                  <span>Logout</span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="/admin">
                  <span>Admin</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
          {{userType}}
      {{currentUser}}
    <router-view/>
  </div>
</template>

<script>
export default {
  computed:{
    userType(){
      console.log(this.$store.state.userType);
      return this.$store.state.userType
    },
    currentUser(){
      return this.$store.state.user
    }
  },
  methods:{
    onClickSubbordinator() {
      this.$router.push('/sub')
    },
    onLogout(){
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
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background-color: aquamarine;
}
</style>
