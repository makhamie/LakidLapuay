<template>
  <div>
  <!-- el-menu
    :default-active="activeRoute"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b" router -->
    <div class="navbar-brand">LakidLapuay</div>
    <el-menu-item index="Admin" :route="{name: 'Admin'}">Create User</el-menu-item>
    <el-menu-item index="ManageUser" :route="{name: 'ManageUser'}">Manage User Account</el-menu-item>
    <el-menu-item index="CreateDepartment" :route="{name: 'CreateDepartment'}">Create Department</el-menu-item>
    <el-menu-item @click="$emit('logout')" v-if="isLogin" index="Login" :route="{name: 'Login'}" class="pull-right">Logout</el-menu-item>
  <!-- /el-menu -->
  </div>
</template>
<script>
export default {
  props: ['isLogin', 'activeRoute']
  // methods: {
  //   // handleSelect (key, keyPath) {
  //   //   if (key === 'Login') {
  //   //     console.log('NavBar; methods; handleSelect; logout')
  //   //     this.$emit('logout')
  //   //   }
  //   // }
  // }
}
</script>
<style scoped>

</style>
