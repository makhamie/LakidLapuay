<template>
  <el-menu
    :default-active="activeRoute"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b" router>
    <div class="navbar-brand">LakidLapuay</div>
    <!-- Admin navbar, use v-if="isAdmin" to check role-->
    <el-menu-item index="Admin" :route="{name: 'Admin'}" v-if="isAdmin">Create User</el-menu-item>
    <el-menu-item index="ManageUser" :route="{name: 'ManageUser'}" v-if="isAdmin">Manage User Account</el-menu-item>
    <el-menu-item index="CreateDepartment" :route="{name: 'CreateDepartment'}" v-if="isAdmin">Create Department</el-menu-item>
    <el-menu-item @click="$emit('logout')" v-if="isLogin" index="Login" :route="{name: 'Login'}" class="pull-right">Logout</el-menu-item>
    <!-- sSupervisor navbar, use v-if="isSupervisor" to check role-->
    <!-- Admin navbar, use v-if="isSubordinator" to check role-->
  </el-menu>
</template>

<script>
import AdminNavbar from '@/components/parts/customnavbar/AdminNavbar'
import SupervisorNavbar from '@/components/parts/customnavbar/SupervisorNavbar'

export default {
  components: {
    AdminNavbar,
    SupervisorNavbar
  },
  computed: {
    isLogin () {
      return this.$store.getters.isLogin
    },
    isAdmin () {
      return this.$store.getters.isAdmin
    },
    isSupervisor () {
      return this.$state.getters.isSupervisor
    },
    isSubordinator () {
      return this.$store.getters.isSubordinator
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
