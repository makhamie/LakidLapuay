<template>
  <admin-navbar v-if="isAdmin" :currentUser="currentUser" :isLogin="isLogin" :activeRoute="activeRoute" @logout="handleLogout"></admin-navbar>
  <supervisor-navbar v-else-if="isSupervisor" :currentUser="currentUser" :isLogin="isLogin" :activeRoute="activeRoute" @logout="handleLogout"></supervisor-navbar>
  <subordinate-navbar v-else-if="isSubordinator" :currentUser="currentUser" :isLogin="isLogin" :activeRoute="activeRoute" @logout="handleLogout"></subordinate-navbar>
</template>

<script>
import AdminNavbar from './customnavbar/AdminNavbar'
import SupervisorNavbar from './customnavbar/SupervisorNavbar'
import SubordinateNavbar from './customnavbar/SubordinateNavbar'

export default {
  components: {
    AdminNavbar,
    SupervisorNavbar,
    SubordinateNavbar
  },
  computed: {
    isLogin () {
      return this.$store.getters.isLogin
    },
    isAdmin () {
      return this.$store.getters.isAdmin
    },
    isSupervisor () {
      return this.$store.getters.isSupervisor
    },
    isSubordinator () {
      return this.$store.getters.isSubordinator
    },
    activeRoute () {
      return this.$route.name
    },
    currentUser () {
      return this.$store.getters.currentUser
    }
  },
  methods: {
    handleLogout () {
      this.$emit('logout')
    }
  }
}
</script>

<style lang="css">
</style>
