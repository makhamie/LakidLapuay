<template>
  <div class="container">
    <div class="field">
      <el-form :inline="true" ref="leaveForm" :model="leaveForm" label-width="120px">
        <el-row>
          <el-form-item label="Reason : ">
            <el-select v-model="leaveForm.reason" placeholder="Select a reason">
              <el-option v-for="(type,index) in typeList" :key="index" :value="type" :label="type"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="Period : ">
            <el-date-picker
              :disabled="leaveForm.reason === ''"
              v-model="leaveForm.period"
              @change="validateDate"
              type="daterange"
              start-placeholder="Start date"
              end-placeholder="End date"
              format="yyyy/MM/dd"
              value-format="yyyy-MM-dd"
              :default-time="['00:00:00', '23:59:59']"
              :picker-options="datePickerOption"/>
          </el-form-item>
        </el-row>
        <el-row>
          <task-assignment @validateTaskList="validateTaskIsPass" v-if="taskList.length > 0" :list="taskList"></task-assignment>
        </el-row>
        <el-row style="margin-top: 20px; text-align: right;">
          <el-button type="primary" @click="createLeaveRequest" :disabled="!validateForm">Create Leave Request</el-button>
        </el-row>
      </el-form>
    </div>
    {{taskList}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TaskAssignment from './TaskAssignment'
import { SubordinateService } from '@/resources'
import { notificationAlert, messageAlert } from '@/libraries/helper'

export default {
  data () {
    return {
      datePickerOption: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 3600 * 1000 * 24
        }
      },
      typeList: ['Sick leave', 'Personal Errand leave', 'Vacation leave'],
      taskList: [],
      leaveForm: {
        reason: '',
        period: ''
      },
      validateTaskList: false
    }
  },
  components: {
    TaskAssignment
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    }),
    validateForm () {
      return this.leaveForm.reason !== '' && this.leaveForm.period !== '' && this.validateTaskList
    }
  },
  methods: {
    ...mapActions({
      startLoad: 'startLoad',
      stopLoad: 'finishLoad'
    }),
    async validateDate (dates) {
      try {
        this.startLoad()
        let validateDateResponse = await SubordinateService.getTaskInRange(dates[0], dates[1])
        if (validateDateResponse.data.success) {
          this.taskList = validateDateResponse.data.results.map((data) => {
            return {
              ...data,
              isSubstitute: false,
              substituteId: '',
              substituteName: ''
            }
          })
          if (this.taskList.length === 0) {
            this.validateTaskList = true
          }
        }
        this.stopLoad()
      } catch (error) {
        notificationAlert('Fail to contact server', 'error')
        this.stopLoad()
      }
    },
    async createLeaveRequest () {
      try {
        let createLeaveRequestResponse = await SubordinateService.createLeaveRequest(this.leaveForm.reason, this.leaveForm.period[0], this.leaveForm.period[1])
        if (createLeaveRequestResponse.data.success) {
          let leaveRequestId = createLeaveRequestResponse.data.results.id
          if (this.taskList.length > 0) {
            let leaveTask = this.taskList.map((data) => {
              return {
                leave_request_id: leaveRequestId,
                task_id: data.id,
                substitute_id: data.substituteId
              }
            })
            await SubordinateService.createLeaveTasks(leaveTask)
          }
          messageAlert('Create leave request success')
        }
      } catch (error) {
        messageAlert('Fail to create leave request', 'error')
        console.log(error)
      }
    },
    validateTaskIsPass (isPass) {
      this.validateTaskList = isPass
    },
    updateTaskList ({taskIndex, substituter, isSubstitute}) {
      this.taskList[taskIndex].substituteId = substituter.id
      this.taskList[taskIndex].substituteName = substituter.name
      this.taskList[taskIndex].isSubstitute = isSubstitute
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

.field {
  margin-top: 20px;
  width: 50%;
}
h1, h2 {
  font-weight: normal;
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
.align-right {
  text-align: right;
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
</style>
