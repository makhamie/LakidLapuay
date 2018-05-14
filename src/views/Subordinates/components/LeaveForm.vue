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
          <task-assignment v-if="taskList.length > 0" :list="taskList"></task-assignment>
        </el-row>
        <el-row>
          <el-button type="primary" :disabled="leaveForm.period === ''">Create Leave Request</el-button>
        </el-row>
      </el-form>
      {{isLoading}}
      <!-- <el-row>
        <el-col :span="3"><label class="label">Leave for</label></el-col>
        <el-col :span="9">
          <div class="control">
            <div class="select">
              <select>
                <option v-for="(typeLeave,index) in typeList" :key="index">{{typeLeave.type}}</option>
              </select>
            </div>
          </div>
        </el-col>
        <el-col :span="3"><label class="label">Substitute</label></el-col>
        <el-col :span="9">
          <div class="control">
            <div class="select">
              <select>
                <option v-for="(substitute,index) in substituteList" :key="index">{{substitute.name}}</option>
              </select>
            </div>
          </div>
        </el-col>
      </el-row> -->
    </div>
    <!-- <div class="field bottom-line">
      <el-row>
      <el-col :span="3"></el-col>
        <el-col :span="3"><label class="label">Period</label></el-col>
        <el-col :span="9">
          <p>{{ period }}</p>
          <template>
            <div class="block">
              <el-date-picker
              v-model="period"
              type="daterange"
              start-placeholder="Start date"
              end-placeholder="End date"
              format="yyyy/MM/dd"
              value-format="yyyy-MM-dd"
              :default-time="['00:00:00', '23:59:59']">
            </el-date-picker>
          </div>
        </template>
      </el-col>
    </el-row>
  </div> -->
  <!-- <task-assignment></task-assignment> -->
  <!-- <div class="padding-top align-right bottom-line">
    <el-button type="primary"  @click="onRequestLeave">Submit</el-button>
  </div> -->
  {{leaveForm}}
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TaskAssignment from './TaskAssignment'
import { SubordinateService } from '@/resources'

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
        substitute: '',
        period: ''
      }
    }
  },
  components: {
    TaskAssignment
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    })
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
          this.taskList = validateDateResponse.data.results
        }
        this.stopLoad()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.container {
  margin-top: 20px;
  text-align: left;
}
.field {
  margin-top: 20px;
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
