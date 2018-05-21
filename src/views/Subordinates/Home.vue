<template>
  <div>
    <div class="container bottom-line">
      <label class="page-title">Leave Task</label>
    </div>
    <div class="container">
      <leave-task-table class="bottom-line"></leave-task-table>
    </div>
  </div>
</template>
<script>
import LeaveTaskTable from './components/LeaveTaskTable'

export default {
  components: {
    LeaveTaskTable
  }
}
</script>
<style scoped>
  .container {
    width: 100%;
    margin: auto;
    margin-top: 50px;
  }
  .header-container {
    margin-top: 20px;
    width: 100%;
    margin: auto;
    margin-top: 50px;
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
  .padding-right {
    padding-right: 20px;
  }
  .padding-top {
    padding-top: 20px;
  }
  .page-title {
    margin-left: 15%;
    margin-top: 50px;
    font-size: 50px;
  }
  .inline-block {
    display: inline-block;
  }
</style>
