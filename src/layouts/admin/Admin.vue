<template>
  <div class="container">
    <div class="login-container">
      <h1>Create user</h1>
      <br>
      1:{{roles}}
      2:{{departments}}
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email" value="">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Password" value="hello@">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <el-row>
        <el-col :span="12">
          <el-col :span="8">
            <label class="label">Role</label>
          </el-col>
          <el-col :span="12">
            <div class="control">
              <div class="select">
                <select>
                  <option v-for="(role,index) in roles" :key="index">{{role.role}}</option>
                </select>
              </div>
            </div>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">
            <label class="label">Department</label>
          </el-col>
          <el-col :span="12">
            <div class="control">
              <div class="select">
                <select>
                  <option v-for="(department,index) in departments" :key="index">{{department.name}}</option>
                </select>
              </div>
            </div>
          </el-col>
        </el-col>
      </el-row>
      <br>
      <el-row>
        <el-col :span="12">
          <el-col :span="8">
            <label class="label">Supervisor</label>
          </el-col>
          <el-col :span="12">
            <div class="control">
              <div class="select">
                <select>
                  <option v-for="(supervisor,index) in roles" :key="index">{{supervisor.supervisor}}</option>
                </select>
              </div>
            </div>
          </el-col>
        </el-col>
      </el-row>

      <br>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import API from '@/api/index'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    roles () {
      return this.getRoles()
    },
    departments () {
      return this.getDepartments()
    }
  },
  methods: {
    getDepartments: API.allDepartment,
    getRoles: API.allRole
  }
}
</script>

<style scoped>
.container {
  width: 50%;
  text-align: left;
}

.login-container{
  margin-top: 120px;
}

h1 {
  font-size: 50px;
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
</style>
