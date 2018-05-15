<template>
  <el-menu
    :default-active="activeRoute"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b" router>
    <div class="navbar-brand">LakidLapuay</div>
    <el-menu-item index="Subordinate" :route="{name: 'Subordinate'}">Create Leave Request</el-menu-item>
    <el-submenu index="9" class="pull-right">
      <template slot="title">{{ currentUser.name }}</template>
      <el-menu-item index="Profile" :route="{name: 'Profile'}">Edit profile</el-menu-item>
      <el-menu-item @click="$emit('logout')" index="Login" :route="{name: 'Login'}">Logout</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  props: ['isLogin', 'activeRoute', 'currentUser']
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
