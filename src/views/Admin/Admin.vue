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
          <el-dropdown @command="onDropdownDepartmentClick">
            <el-button type="primary">{{this.registerForm.department}}<i class="el-icon-arrow-down"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(department, index) in departments" :key="index" :command="department">{{department}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
        <el-form-item label="Role">
          <el-dropdown @command="onDropdownRoleClick">
            <el-button type="primary">{{this.registerForm.role}}<i class="el-icon-arrow-down"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(role, index) in roles" :key="index" :command="role">{{role}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
        <el-form-item style="text-align: left;">
          <el-button type="primary" @click="onRegister">Register</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { AdminService } from '../../resources'
export default {
  data () {
    return {
      registerForm: {
        name: '',
        email: '',
        password: '',
        department: 1,
        role: 'admin'
      },
      departments: [1],
      roles: ['admin', 'supervisor', 'subordinate']
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
    async onRegister () {
      await AdminService.createUser(this.registerForm.email, this.registerForm.password, this.registerForm.name, this.registerForm.department, this.registerForm.role)
      console.log('Successfully register')
    },
    onDropdownRoleClick (role) {
      console.log('dropdown click')
      console.log(role)
      this.registerForm.role = role
    },
    onDropdownDepartmentClick (department) {
      this.registerForm.department = department
    }
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
