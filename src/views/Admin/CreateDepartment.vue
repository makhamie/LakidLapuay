<template>
  <div v-loading="isLoading" class="container">
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
import { mapGetters, mapActions } from 'vuex'
import { AdminService } from '@/resources'
import { messageAlert } from '@/libraries/helper'

export default {
  data () {
    return {
      departmentForm: {
        name: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    })
  },
  methods: {
    async onSave () {
      this.startLoad()
      try {
        await AdminService.createDepartment(this.departmentForm.name)
        messageAlert('Create new department successfully')
      } catch (error) {
        messageAlert('Fail to create new department', 'error')
        this.stopLoad()
        console.log(error)
      }
    },
    ...mapActions({
      startLoad: 'startLoad',
      stopLoad: 'finishLoad'
    })
  }

}
</script>
<style scoped>
  .container {
    width: 70%;
    margin: auto;
    margin-top: 50px;
  }
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
