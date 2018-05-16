<template>
  <div>
    <div class="container bottom-line">
      <label class="page-title">Create Task</label>
    </div>
    <div>
      <!-- <div v-if="userType==='subordinator'">
        <task-assignment></task-assignment>
      </div> -->
      <!-- <div v-if="userType==='supervisor'"> -->
    <div class="container bottom-line">
      <task-form></task-form>
      <!-- <search> </search>
      <task-list> </task-list> -->
      <!-- </div> -->
    </div>
    </div>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'
import TaskForm from './components/TaskForm.vue'
import Search from '@/components/Search.vue'
export default {
  components: {
    TaskForm,
    Search,
    TaskList
  },
  data () {
    return {
      // userType: 'subordinator',
    }
  }
}
</script>

<style scoped>
.page-title {
  font-size: 50px;
  width: 70%;
  margin-left: 15%;
  margin-top: 50px;
}
.container {
  width: 100%;
  margin: auto;
  margin-top: 50px;
}
.bottom-line {
  border-bottom: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e0e0E0;
  padding-bottom: 20px;
  margin-bottom: 0;
}
h1, h2 {
  font-weight: normal;
}
</style>
