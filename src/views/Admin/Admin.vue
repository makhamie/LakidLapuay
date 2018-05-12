<template>
  <div>
    <h1>Create user</h1>
    <div class="login-container">
      <el-form ref="registerForm" :model="registerForm" label-width="120px">
        <el-form-item label="Email">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="registerForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="Name">
          <el-input v-model="registerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Department">
          <el-dropdown>
            <el-button type="primary">{{departments[0]}} <i class="el-icon-arrow-down"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(department, index) in departments" :key="index">{{department}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
        <el-form-item label="Role">
          <el-dropdown>
            <el-button type="primary">{{roles[0]}}<i class="el-icon-arrow-down"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(role, index) in roles" :key="index">{{role}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
        <el-form-item style="text-align: left;">
          <el-button type="primary">Register</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import API from '@/api/index'
export default {
  data () {
    return {
      registerForm : {
        name: '',
        email: '',
        password: '',
        department: 1,
        role: 'admin'
      },
      departments: ['Department 1', 'Department 2'],
      roles: ['admin']
    }
  },
  computed: {
    // roles () {
    //   return this.getRoles()
    // },
    // departments () {
    //   return this.getDepartments()
    // }
  },
  methods: {
    // getDepartments: API.allDepartment,
    // getRoles: API.allRole
  }
}
</script>

<style scoped>
.container {
  width: 50%;
  text-align: left;
}

.login-container{
  margin-top: 120px;
}

h1 {
  font-size: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
