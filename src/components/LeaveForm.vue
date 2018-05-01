<template>
  <div class="container">
    <div class="field">
      <el-row>
        <el-col :span="3"><label class="label">Leave for</label></el-col>
        <el-col :span="9">
          <div class="control">
            <div class="select">
              <select>
                <option v-for="type in typeList">{{type.type}}</option>
              </select>
            </div>
          </div>
        </el-col>
        <el-col :span="3"><label class="label">Substitute</label></el-col>
        <el-col :span="9">
          <div class="control">
            <div class="select">
              <select>
                <option v-for="substitute in substituteList">{{substitute.name}}</option>
              </select>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="field bottom-line">
      <el-row>
        <el-col :span="12">
          <div class="block">
            <el-row>
              <el-col :span="6">
                <label class="label">Start date</label>
              </el-col>
              <el-col :span="6" class="align-right">
                <el-date-picker
                  v-model = "startDate"
                  type="date"
                  placeholder="Pick a day">
                </el-date-picker>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="block">
            <el-row>
              <el-col :span="6">
                <label class="label">End date</label>
              </el-col>
              <el-col :span="6" class="align-right">
                <el-date-picker
                  v-model="endDate"
                  type="date"
                  placeholder="Pick a day">
                </el-date-picker>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="padding-top align-right bottom-line">
      <el-button type="primary">Submit</el-button>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        substituteList: [{
          name: 'Makhamwan',
        }, {
          name: 'Ung',
        }, {
          name: 'Trong',
        }],
        typeList: [{
          type: 'Sick leave',
        }, {
          type: 'Personal leave',
        }, {
          type: 'Vacation leave',
        }],
        startDate: '',
        endDate: '',
        leaveType:'',
        substitute:''
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
