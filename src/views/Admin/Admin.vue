<template>
  <div class="container">
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
          <el-select v-model="registerForm.department.id" :value-key="registerForm.department.name" placeholder="Please Select a department">
            <el-option v-for="(department,index) in departments" :key="index" :label="department.name" :value="department.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Role">
          <el-select v-model="registerForm.role">
            <el-option v-for="(role, index) in roles" :key="index" :label="role" :value="role"></el-option>
          </el-select>
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
import { messageAlert, notificationAlert } from '@/libraries/helper'
export default {
  data () {
    return {
      registerForm: {
        name: '',
        email: '',
        password: '',
        department: {},
        role: 'admin'
      },
      departments: [],
      roles: ['admin', 'supervisor', 'subordinate']
    }
  },
  async mounted () {
    try {
      let allDepartmentResponse = await AdminService.getAllDepartments()
      if (allDepartmentResponse.data) {
        this.departments = allDepartmentResponse.data
      }
    } catch (error) {
      notificationAlert('Cannot contact server', 'error')
      console.log(error)
    }
  },
  methods: {
    async onRegister () {
      try {
        await AdminService.createUser(this.registerForm.email, this.registerForm.password, this.registerForm.name, this.registerForm.department.id, this.registerForm.role)
        messageAlert('Create new user successfully')
      } catch (error) {
        messageAlert('Fail to create user', 'error')
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  margin-top: 50px;
}

.login-container{
  margin-top: 30px;
}

h1 {
  font-size: 50px;
}
a {
  color: #42b983;
}
</style>
