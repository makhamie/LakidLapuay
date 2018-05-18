<template>
  <div>
    <div class="container bottom-line">
      <label class="page-title">Supervisor</label>
      <leave-request-table></leave-request-table>
    </div>
  </div>
</template>

<script>
import LeaveRequestTable from './components/LeaveRequestTable'

export default {
  components: {
    LeaveRequestTable
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
