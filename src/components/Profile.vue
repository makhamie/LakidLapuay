<template>
  <div class="container">
    <div class="login-container">
      <h1>Edit Profile</h1>
      <br>
      <div class="text-center">
        <img v-if="userAvatar" :src="userAvatar">
        <button id="pick-avatar">Select an image</button>
        <avatar-cropper
          @uploaded="handleUploaded"
          trigger="#pick-avatar"
          upload-url="/files/upload" />
      </div>
      <div class="field">
        <label class="label">Address</label>
        <div class="control">
          <input class="input" placeholder="" value="">
        </div>
      </div>
      <div class="field">
        <label class="label">Facebook</label>
        <div class="control">
          <input class="input" placeholder="" value="">
        </div>
      </div>
      <div class="field">
        <label class="label">Line</label>
        <div class="control">
          <input class="input" placeholder="" value="">
        </div>
      </div>
      <div class="field">
        <label class="label">Instragram</label>
        <div class="control">
          <input class="input" placeholder="" value="">
        </div>
      </div>
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
  import AvatarCropper from "vue-avatar-cropper"
  export default {
    components: { AvatarCropper },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        userAvatar: undefined
      }
    },
    methods: {
      handleUploaded(resp) {
        this.userAvatar = resp.relative_url;
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
img, avatar-cropper {
  width: 100px;
  height: 100px;
}
</style>
