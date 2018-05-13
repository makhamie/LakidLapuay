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
              :current-page="1"
              :page-size="perPage"
              layout="total, prev, pager, next"
              :total="10">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
      <el-form class="edit-form" v-if="userForm" ref="userForm" :model="userForm" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="userForm.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="Department">
          <el-dropdown @command="onDropdownDepartmentClick">
            <el-button type="primary">{{this.userForm.department.name}}<i class="el-icon-arrow-down"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(department, index) in departments" :key="index" :command="department">{{department.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
        <el-form-item label="Role">
          <el-dropdown @command="onDropdownRoleClick">
            <el-button type="primary">{{this.userForm.role}}<i class="el-icon-arrow-down"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(role, index) in roles" :key="index" :command="role">{{role}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
        <el-form-item v-if="userForm.role === 'subordinate'" label="Supervisor">
          <el-dropdown @command="onDropdownSupervisorClick">
            <el-button type="primary">{{this.supervisor.name}}<i class="el-icon-arrow-down"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(supervisor, index) in availableSupervisor" :key="index" :command="supervisor">{{supervisor.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
      userForm: null,
      supervisor: {
        id: -1,
        name: 'test'
      },
      departments: [],
      roles: ['admin', 'supervisor', 'subordinate'],
      availableSupervisor: []
    }
  },
  async mounted () {
    try {
      let allUserResponse = await AdminService.getAllUsers()
      let allDepartments = await AdminService.getAllDepartments()
      if (allUserResponse.data) {
        this.tableData = allUserResponse.data
      }
      if (allDepartments.data) {
        this.departments = allDepartments.data
      }
    } catch (error) {

    }
  },
  methods: {
    handlePageChange () {
      console.log('Page Change')
    },
    async onClickRow (user, mouseEvent, column) {
      try {
        let currentSupervisorResponse = await AdminService.getUserSupervisor(user.id)
        if (currentSupervisorResponse.data.success) {
          this.supervisor = {
            id: currentSupervisorResponse.data.results.id,
            name: currentSupervisorResponse.data.results.name
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
          // console.log(supervisorResponse.data.results)
        }
      } catch (error) {
        console.log(error)
      }
      this.userForm = user
    },
    onDropdownDepartmentClick (departmentId) {
      this.userForm.department_id = departmentId
    },
    onDropdownRoleClick (role) {
      this.userForm.role = role
    },
    onDropdownSupervisorClick (supervisor) {
      this.supervisor = supervisor
    },
    async onSave () {
      console.log('saving user')
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
