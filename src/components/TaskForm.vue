<template>
  <div>
    <div class="container">
      <div class="field">
        <el-row>
          <!-- {{allSubordinate}} -->
          <el-col :span="3"><label class="label">Subordinator</label></el-col>
          <el-col :span="9">
           
            <el-dropdown @command="setSubordinate">
              <span class="el-dropdown-link">{{showDropdown}}<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="subordinator" v-for="(subordinator, index) in allSubordinates" :key="index"> {{subordinator.name}}</el-dropdown-item>
                <!-- <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
            <!-- <div class="control">
              <div class="select">
                <select v-model="taskForm.subordinator">
                  <option v-for="(subordinator, index) in allSubordinate" :key="index">{{ subordinator.name }}</option>
                </select>
              </div>
            </div> -->
          </el-col>
          <el-col :span="3"><label class="label">Task</label></el-col>
          <el-col :span="9">
            <div class="control">
              <input v-model="taskForm.name" class="input" type="input" placeholder="Task name" value="">
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="field bottom-line">
        <el-row>
          <el-col :span="3"><label class="label">Period</label></el-col>
          <el-col :span="9">
            <template>
              <div class="block">
                <el-date-picker
                v-model="taskForm.time"
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
        <el-col :span="3"><label class="label">Description</label></el-col>
          <el-col :span="9">
            <div class="control">
              <input v-model="taskForm.description" class="input" type="input" placeholder="Task description" value="">
            </div>
          </el-col>
      </el-row>
    </div>
    <div class="padding-top align-right bottom-line">
      <el-button type="submit" @click="onCreateTask">Submit</el-button>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default{
  data () {
    return {
      subordinatorList: [
          {
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
      taskForm :{
        subordinator: null,
        time: '',
        name: ''
      }
    }
  },
  computed:{
    ...mapGetters({
      allSubordinates: 'Global/allSubordinates',
      allTasks: 'Global/allTasks'
    }),
    showDropdown() {
      if(!this.taskForm.subordinator)
        return 'Select Subordinator'
      return this.taskForm.subordinator.name
    }
  },
  mounted(){
    this.getAllSubordinator()
  },
  methods: {
    ...mapActions({
      getAllSubordinator: 'Global/getAllSubordinator',
      getAllTask: 'Global/getAllTask',
      createTask: 'Global/createTask'
    }),
    async onCreateTask() {
      const timeRes = this.taskForm.time
      const res = {
        responsible_id : this.taskForm.subordinator.id,
        name: this.taskForm.name,
        start_date: timeRes[0],
        end_date: timeRes[1]
      }
      await this.createTask(res)
      await this.getAllTask()
      console.log('Submit task',res)
    },
    setSubordinate(subordinator) {
      this.taskForm.subordinator = subordinator
    }
  }
}
</script>
<style scoped>
.container {
  margin-top: 20px;
  width: 70%;
  text-align: left;
}
.field {
  margin-top: 20px;
}
h1, h2 {
  font-weight: normal;
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
.field {
  margin-top: 20px;
}
</style>
