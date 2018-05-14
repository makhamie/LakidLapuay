<template>
  <admin-navbar v-if="isAdmin" :isLogin="isLogin" :activeRoute="activeRoute" @logout="handleLogout"></admin-navbar>
  <supervisor-navbar v-else-if="isLogin === 'supervisor'" :isLogin="isLogin" :activeRoute="activeRoute" @logout="handleLogout"></supervisor-navbar>
  <!-- <el-menu
    :default-active="null"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <div class="navbar-brand">LakidLapuay</div>
    <el-menu-item index="Admin" :route="{name: 'Admin'}" v-if="isAdmin">Create User</el-menu-item>
    <el-menu-item index="ManageUser" :route="{name: 'ManageUser'}" v-if="isAdmin">Manage User Account</el-menu-item>
    <el-menu-item index="CreateDepartment" v-if="isAdmin">Create Department</el-menu-item>
    <el-menu-item v-if="isLogin" index="logout" class="pull-right">Logout</el-menu-item>
  </el-menu> -->
</template>

<script>
import AdminNavbar from '../AdminNavbar'
import SupervisorNavbar from '../SupervisorNavbar'

export default {
  components: {
    AdminNavbar,
    SupervisorNavbar
  },
  computed: {
    isLogin () {
      return this.$store.state.role
    },
    isAdmin () {
      console.log(this.$store.state.role)
      return this.$store.state.role === 'admin'
    },
    activeRoute () {
      return this.$route.name
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
