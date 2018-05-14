<template>
  <div>
    <h1>Manage User</h1>
    <div class="login-container">
      <el-table
      :data="tableData"
      @row-click="onClickRow"
      style="width: 100%"
      :header-row-style="{'text-align': 'center'}">
        <el-table-column
          prop="id"
          label="ID"
          width="50"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="Name"
          >
        </el-table-column>
        <el-table-column
          prop="department.name"
          label="Department"
          >
        </el-table-column>
        <el-table-column
          prop="role"
          label="Role"
          >
        </el-table-column>
      </el-table>
      <el-row :gutter="0" class="table-footer">
        <el-col :sm="24" class="text-right">
          <div class="block">
            <el-pagination
              @current-change="handlePageChange"
              :current-page="currentPage"
              :page-size="perPage"
              layout="total, prev, pager, next"
              :total="allUserCount">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
      <el-form class="edit-form" v-if="userForm" ref="userForm" :model="userForm" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="userForm.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="Department">
          <el-select @change="fetchDepartmentSupervisor" v-model="userForm.department_id" :value-key="userForm.department.name" placeholder="Please Select a department">
            <el-option v-for="(department,index) in departments" :key="index" :label="department.name" :value="department.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Role">
          <el-select v-model="userForm.role">
            <el-option v-for="(role, index) in roles" :key="index" :label="role" :value="role"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="userForm.role === 'subordinate'" label="Supervisor">
          <el-select v-model="supervisor.id" placeholder="Please Select Supervisor">
            <el-option v-if="userForm.id !== supervisor.id" v-for="(supervisor, index) in availableSupervisor" :key="index" :value="supervisor.id" :label="supervisor.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="text-align: left;">
          <el-button type="primary" @click="onSave">Save</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { AdminService } from '@/resources'
import { PER_PAGE } from '@/libraries/const'

export default {
  data () {
    return {
      tableData: [],
      allUserCount: 0,
      currentPage: 1,
      userForm: null,
      supervisor: {},
      departments: [],
      roles: ['admin', 'supervisor', 'subordinate'],
      availableSupervisor: []
    }
  },
  async mounted () {
    try {
      console.log('mounted Manage User')
      let allUserResponse = await AdminService.getAllUsers(this.currentPage)
      let allDepartments = await AdminService.getAllDepartments()
      if (allUserResponse.data.success) {
        this.tableData = allUserResponse.data.results.users
        this.allUserCount = allUserResponse.data.results.count
      }
      if (allDepartments.data) {
        this.departments = allDepartments.data
      }
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async handlePageChange (page) {
      this.currentPage = page
      try {
        let allUserResponse = await AdminService.getAllUsers(this.currentPage)
        if (allUserResponse.data.success) {
          this.tableData = allUserResponse.data.results.users
          this.allUserCount = allUserResponse.data.results.count
        }
      } catch (error) {
        console.log(error)
      }
    },
    async onClickRow (user, mouseEvent, column) {
      try {
        let currentSupervisorResponse = await AdminService.getUserSupervisor(user.id)
        if (currentSupervisorResponse.data.success) {
          if(currentSupervisorResponse.data.results.id === -1) {
            this.supervisor = {}
          } else {
            this.supervisor = {
              id: currentSupervisorResponse.data.results.id,
              name: currentSupervisorResponse.data.results.name
            }
          }
        }
        let supervisorResponse = await AdminService.getAvailableSupervisor(user.department_id)
        if (supervisorResponse.data.success) {
          this.availableSupervisor = supervisorResponse.data.results.map((supervisor) => {
            return {
              id: supervisor.id,
              name: supervisor.name
            }
          })
        }
      } catch (error) {
        console.log(error)
      }
      this.userForm = user
    },
    async fetchDepartmentSupervisor (departmentId) {
      try {
        let supervisorResponse = await AdminService.getAvailableSupervisor(departmentId)
        if (supervisorResponse.data.success) {
          this.availableSupervisor = supervisorResponse.data.results.map((supervisor) => {
            return {
              id: supervisor.id,
              name: supervisor.name
            }
          })
          this.supervisor = {}
        }
      } catch (error) {
        console.log(error)
      }
    },
    async onSave () {
      try {
        await AdminService.editUser(this.userForm.id, this.userForm.department_id, this.userForm.role)
        await AdminService.editSupervisor(this.userForm.id, this.supervisor.id)
        console.log('Successfuly save user')
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    perPage () {
      return PER_PAGE
    }
  }

}
</script>
<style scoped>
  .table-footer {
    border: 1px solid #dfe6ec;
    border-top: none;
    padding: 5px;
  }
  .text-right { text-align: right; }
  .edit-form {
    margin-top: 30px;
  }
</style>
