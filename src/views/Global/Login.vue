<template>
  <div class="container">
      <h1>Login</h1>
      <el-form ref="loginForm" :model="loginForm">
        <el-form-item label="Email" label-width="120px">
          <el-input v-model="loginForm.email" type="email"></el-input>
        </el-form-item>
        <el-form-item label="Password" label-width="120px">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onLogin">Login</el-button>
      </el-form>
  </div>
</template>
<script>
// import {mapActions} from 'vuex'
import { setAuth, getAuth } from '@/libraries/helper'
import { BASE_URL } from '@/libraries/const'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    const auth = getAuth()
    if (auth) {
      this.$router.push(`/${auth.role}`)
    }
  },
  methods: {
    async onLogin () {
      try {
        console.log(this.loginForm.email)
        let loginResponse = await axios.post(BASE_URL + '/login', {
          email: this.loginForm.email, password: this.loginForm.password
        })
        if (loginResponse.data.success) {
          console.log('Loging success', loginResponse.data)
          await setAuth(loginResponse.data.result)
          this.$router.push(`/${loginResponse.data.result.role}`)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 50%;
  text-align: center;
  margin-top: 3%;
  margin-left: 20%
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
