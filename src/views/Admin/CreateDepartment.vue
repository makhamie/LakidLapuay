<template>
  <div>
    <h1>Create Department</h1>
    <el-form class="edit-form" ref="departmentForm" :model="departmentForm" label-width="120px">
      <el-form-item label="Department">
        <el-input v-model="departmentForm.name"></el-input>
      </el-form-item>
      <el-form-item style="text-align: left;">
        <el-button type="primary" @click="onSave">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { AdminService } from '@/resources'
import { PER_PAGE } from '@/libraries/const'

export default {
  data () {
    return {
      departmentForm: {
        name: ''
      }
    }
  },
  methods: {
    async onSave () {
      console.log('saving user')
      try {
        await AdminService.createDepartment(this.departmentForm.name)
        console.log('Successfuly save department')
      } catch (error) {
        console.log(error)
      }
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
