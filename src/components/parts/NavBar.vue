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
    <!-- Supervisor navbar, use v-if="isSupervisor" to check role-->
    <el-menu-item index="SupervisorHome" :route="{name: 'SupervisorHome'}" v-if="isSupervisor">Home</el-menu-item>
    <el-menu-item index="Supervisor" :route="{name: 'Supervisor'}" v-if="isSupervisor">Create Task</el-menu-item>
    <!-- Subordinator navbar, use v-if="isSubordinator" to check role-->
    <el-menu-item index="SubordinateHome" :route="{name: 'SubordinateHome'}" v-if="isSubordinator">Home</el-menu-item>
    <el-menu-item index="Subordinate" :route="{name: 'Subordinate'}" v-if="isSubordinator">Create Leave Request</el-menu-item>
    <el-submenu index="9" class="pull-right" v-if="isLogin">
      <template slot="title">
        {{ currentUser.name }}
        <img class="nav-img pull-left" :src="currentUser.profile_picture">
      </template>
      <el-menu-item index="Profile" :route="{name: 'Profile'}">Edit profile</el-menu-item>
      <el-menu-item @click="$emit('logout')" v-if="isLogin" index="Login" :route="{name: 'Login'}">Logout</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
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
.nav-img {
  border-radius: 2px;
  max-height: 75%;
  margin: 5px;
}
</style>
