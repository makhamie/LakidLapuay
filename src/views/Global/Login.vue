<template>
  <div class="container">
    <div class="login-container">
      <h1>Login</h1>
      <br>
      email :{{email}}
      <br>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" class="input" type="email" placeholder="Email" value="">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="password" class="input" type="password" placeholder="Password" value="hello@">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <br>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click="onLogin">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {mapActions} from 'vuex'
import {setAuth, getAuth} from '../../libraries/helper'
import {BASE_URL} from '../../libraries/const'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted () {
    // const auth = getAuth()
    // if (getAuth()) {
    //   this.$router.push(`/${auth.role}`)
    // }
  },
  methods: {
    async onLogin () {
      try {
        let loginResponse = await axios.post(BASE_URL + '/login', {
          email: this.email, password: this.password
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
