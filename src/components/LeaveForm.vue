<template>
  <div class="container">
    <div class="field">
      <el-row :gutter="20">
        <el-col :span="16"><label class="label">Substitute</label></el-col>
        <el-col :span="8" class="align-right">
          <el-dropdown class="inline">
            <span class="el-dropdown-link" v-model = "substitute">
              Name<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="block">
              <el-dropdown-item class="display-block" v-for = "substitute in substituteList"> {{substitute.name}} </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
    <div class="field">
      <el-row>
        <el-col :span="12">
          <div class="block">
            <el-row>
              <el-col :span="8">
                <label class="label">Start date</label>
              </el-col>
              <el-col :span="8" class="align-right">
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
    <div class="field bottom-line">
      <el-row :gutter="20">
        <el-col :span="16"><label class="label">Leave for</label></el-col>
        <el-col :span="8" class="align-right">
          <el-dropdown class="inline">
            <span class="el-dropdown-link" v-model="leaveType">
              Leave type<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="block">
              <el-dropdown-item class="display-block">Sick leave</el-dropdown-item>
              <el-dropdown-item class="display-block">Personal leave</el-dropdown-item>
              <el-dropdown-item class="display-block">Vacation leave</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
