<template>
  <div v-loading="isLoading" class="container">
    <h1>Login</h1>
    <el-form ref="loginForm" :model="loginForm">
      <el-form-item label="Email" label-width="120px">
        <el-input v-on:keyup.enter.native="onLogin" v-model="loginForm.email" type="email"></el-input>
      </el-form-item>
      <el-form-item label="Password" label-width="120px">
        <el-input v-on:keyup.enter.native="onLogin" v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onLogin">Login</el-button>
    </el-form>
  </div>
</template>
<script>
import { setAuth, messageAlert } from '@/libraries/helper'
import { UserService } from '@/resources'
import { BASE_URL } from '@/libraries/const'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    if (this.$store.state.role !== '') {
      this.$router.push(`/${this.$store.state.role}`)
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    })
  },
  methods: {
    async onLogin () {
      this.startLoad()
      try {
        let loginResponse = await axios.post(BASE_URL + '/login', {
          email: this.loginForm.email, password: this.loginForm.password
        })
        console.log(loginResponse)
        if (loginResponse.data.success) {
          await setAuth(loginResponse.data.results)
          let userData = await UserService.getUserData()
          this.stopLoad()
          this.setUser(userData.data.results)
          messageAlert('Login Successful', 'success')
        } else {
          messageAlert('User or password is incorrect', 'error')
        }
      } catch (error) {
        messageAlert('Cannot connect to server', 'error')
        console.log(error)
        this.stopLoad()
      }
    },
    setUser (user) {
      this.$store.dispatch('setUser', user)
      this.$router.push(`/${user.role}`)
    },
    ...mapActions({
      startLoad: 'startLoad',
      stopLoad: 'finishLoad'
    })
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
