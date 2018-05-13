<template>
  <div class="container">
    <div class="field">
      <el-row class="bottom-line">
        <el-col :span="3">
          <label class="label">Check task</label>
        </el-col>
        <el-col :span="6">
          <input v-model="task" class="input" type="" placeholder="Task name" value="">
        </el-col>
        <el-col :span="3" class="align-right">
          <div class="padding-top">
            <el-button type="primary">Search</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      subordinator: ''
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
  .bottom-line {
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e0e0E0;
    padding-bottom: 20px;
    margin-bottom: 0;
  }
  .align-right {
    text-align: right;
  }
</style>
