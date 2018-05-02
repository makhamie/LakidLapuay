<template>
  <div>
    <div class="container bottom-line">
      <label class="page-title">Responsibilities</label>
    </div>
    <div>
      <div v-if="userType==='subordinator'">
        <task-assignment></task-assignment>
      </div>
      <div v-if="userType==='supervisor'">
        <task-form></task-form>
        <task-list> </task-list>
      </div>
    </div>
  </div>
</template>

<script>
import TaskAssignment from './TaskAssignment.vue'
import TaskList from './TaskList.vue'
import TaskForm from './TaskForm.vue'
import Search from './Search.vue'
export default {
  components:{
    TaskForm,
    Search,
    TaskList,
    TaskAssignment
  },
  data () {
    return {
      // userType: 'subordinator',
      userType: 'supervisor',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.page-title {
  margin-top: 50px;
  font-size: 50px;
}
.container {
  margin-top: 20px;
  width: 70%;
  text-align: left;
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
