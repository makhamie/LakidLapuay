<template>
  <el-menu
    :default-active="activeRoute"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b" router>
      <div class="navbar-brand">LakidLapuay</div>
      <el-menu-item index="Admin" :route="{name: 'Admin'}">Create User</el-menu-item>
      <el-menu-item index="ManageUser" :route="{name: 'ManageUser'}">Manage User Account</el-menu-item>
      <el-menu-item index="CreateDepartment">Create Department</el-menu-item>
      <el-menu-item v-if="userType" index="4" class="pull-right">Logout</el-menu-item>
    <!-- <el-menu-item v-else class="pull-right">Login</el-menu-item> -->
  </el-menu>
</template>
<script>
export default {
  props: ['userType', 'activeRoute'],
  methods: {
    clickLogout () {
      this.$emit('logout')
    }
  }
}
</script>
<style scoped>

</style>
