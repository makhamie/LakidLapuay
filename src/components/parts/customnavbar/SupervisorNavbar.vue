<template>
  <div>
  <!--
  <el-menu
    :default-active="activeRoute"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b" router> -->
      <div class="navbar-brand">LakidLapuay</div>
      <el-menu-item index="Supervisor" :route="{name: 'Supervisor'}">Create Task</el-menu-item>
      <!-- <el-menu-item index="ManageUser" :route="{name: 'ManageUser'}">Manage User Account</el-menu-item> -->
      <!-- <el-menu-item index="CreateDepartment" :route="{name: 'CreateDepartment'}">Create Department</el-menu-item> -->
      <el-menu-item @click="$emit('logout')" v-if="isLogin" index="Login" :route="{name: 'Login'}" class="pull-right">Logout</el-menu-item>
  <!-- /el-menu -->
  </div>
</template>

<script>
export default {
  props: ['isLogin', 'activeRoute']
}
</script>

<style scoped>

</style>
