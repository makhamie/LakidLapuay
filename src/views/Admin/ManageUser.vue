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
      <!-- <el-form ref="registerForm" :model="registerForm" label-width="120px"> -->
        <!-- <el-form-item label="Email">
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
            <el-button type="primary">{{this.registerForm.department.name}}<i class="el-icon-arrow-down"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(department, index) in departments" :key="index" :command="department">{{department.name}}</el-dropdown-item>
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
        </el-form-item> -->
      <!-- </el-form> -->
    </div>
  </div>
</template>
<script>
import { AdminService } from '@/resources'
import { PER_PAGE } from '@/libraries/const'

export default {
  data () {
    return {
      tableData: []
    }
  },
  async mounted () {
    try {
      let allUserResponse = await AdminService.getAllUser()
      if (allUserResponse.data) {
        this.tableData = allUserResponse.data
      }
    } catch (error) {

    }
  },
  methods: {
    handlePageChange () {
      console.log('Page Change')
    },
    onClickRow (a, b, c) {
      console.log(a)
      console.log(b)
      console.log(c)
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
</style>
