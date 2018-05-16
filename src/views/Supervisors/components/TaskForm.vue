<template>
  <div class="container">
    <div class="field">
      <el-form :inline="true" ref="taskForm" :model="taskForm" label-width="120px">
        <el-row>
          <el-form-item label="Subordinator : ">
            <el-select v-model="taskForm.subordinator" placeholder="Please select subordinator">
              <el-option v-for="(subordinator, index) in subordinatorList" :key="index" :label="subordinator.name" :value="subordinator.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Task">
            <el-input v-model="taskForm.name" placeholder="Task name"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="Period">
            <el-date-picker v-model="taskForm.time" type="daterange" start-placeholder="Start date" end-placeholder="End date" format="yyyy/MM/dd" value-format="yyyy-MM-dd" :default-time="['00:00:00', '23:59:59']" :picker-options="datePickerOption">
            </el-date-picker>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="Description">
            <el-input v-model="taskForm.description" type="textarea" :row="5"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item class="align-right">
            <el-button type="primary" @click="createTask">Create Task</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import {
  SupervisorService
} from '@/resources'

export default {
  data () {
    return {
      datePickerOption: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 3600 * 1000 * 24
        }
      },
      subordinatorList: [{
        name: 'Makhamwan'
      },
      {
        name: 'Ung'
      },
      {
        name: 'Third'
      },
      {
        name: 'Trong'
      }
      ],
      taskForm: {
        subordinator: '',
        time: '',
        name: ''
      }
    }
  },
  async mounted () {
    try {
      let subordinatorResponse = await SupervisorService.getSubordinators()
      if (subordinatorResponse.data.success) {
        this.subordinatorList = subordinatorResponse.data.results
      }
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async createTask () {
      // console.log(this.taskForm)
      try {
        let createTaskResponse = await SupervisorService.createTask(this.taskForm.subordinator, this.taskForm.name, this.taskForm.time[0], this.taskForm.time[1], this.taskForm.description)
        console.log(createTaskResponse)
        console.log('create task successfuly')
      } catch (error) {
        console.log(error)
      }
      console.log('create task')
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
  h1,
  h2 {
    font-weight: normal;
  }
  .align-right {
    text-align: right !important;
  }
  .bottom-line {
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e0e0E0;
    padding-bottom: 20px;
    margin-bottom: 0;
  }
  .display-block {
    display: block;
  }
  .padding-right {
    padding-right: 20px;
  }
  .padding-top {
    padding-top: 20px;
  }
  .inline-block {
    display: inline-block;
  }
  .field {
    margin-top: 20px;
  }
</style>
