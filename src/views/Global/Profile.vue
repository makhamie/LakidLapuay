<template>
  <div class="container">
    <el-row>
      <el-col :span="10" :offset="2">
        <el-form :mode="userData">
          <h2>Personal Information</h2>
          <el-form-item label="Name">
            <el-input v-model="userData.name" />
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="userData.email" />
          </el-form-item>
          <el-form-item label="Department">
            <el-select v-model="userData.department_id" placeholder="Select">
              <el-option
                v-for="item in departments"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <hr />
          <h2>Social Network Information</h2>
          <el-form-item label="Facebook">
            <el-input v-model="userData.facebook" placeholder="facebook name" />
          </el-form-item>
          <el-form-item label="Instagram">
            <el-input v-model="userData.instagram" placeholder="Instagram id" />
          </el-form-item>
          <el-form-item label="Line">
            <el-input v-model="userData.line" placeholder="Line id" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Save</el-button>
            <el-button @click="resetUserData">Cancel</el-button>
            <i class="el-icon-check" v-if="state.isSaved"> Saved</i>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col class="profile" :span="10">
        <h2>Profile Image</h2>
        <el-upload
          class="upload-demo"
          ref="upload"
          action=""
          :multiple="false"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="submitUpload">
          <el-button slot="trigger" size="small" type="primary">Select File</el-button>
          <!-- el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">upload to server</el-button -->
          <!-- div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div -->
        </el-upload>
        <img class="avatar-img" :src="imageUrl" height="150">
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { AdminService, UserService } from '@/resources'
import * as firebase from 'firebase'

export default {
  data () {
    return {
      state: {
        isSaved: false
      },
      userData: {},
      departments: [],
      imageUrl: ''
    }
  },
  created () {
    this.userData = this.$store.getters.currentUser
    AdminService.getAllDepartments().then((response) => {
      this.departments = response.data
    })
    this.imageUrl = this.userData.profile_picture
  },
  methods: {
    getUserdata () {
      return this.$store.getters.currentUser
    },
    resetUserData () {
      this.userData = this.getUserdata()
    },
    submitUpload () {
      let fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      this.imageUrl = fileReader.readAsDataURL(this.$refs.upload.uploadFiles[0].raw)
    },
    storeProfileImage () {
      console.log('in store image')
      const userImageRef = firebase.storage().ref().child(`avatar/${this.userData.name}.jpg`)
      if (this.imageUrl !== this.userData.profile_picture) {
        console.log('imageUrl !=== userdata')
        return userImageRef.putString(this.imageUrl, 'data_url').then(() => {
          return userImageRef.getDownloadURL()
        })
      }
      return this.userData.profile_picture
    },
    onSubmit () {
      this.state.isSaved = false
      if (this.imageUrl !== this.userData.profile_picture) {
        const userImageRef = firebase.storage().ref().child(`avatar/${this.userData.name}.jpg`)
        userImageRef.putString(this.imageUrl, 'data_url').then(() => {
          return userImageRef.getDownloadURL()
        }).then((url) => {
          this.userData.profile_picture = url
        }).then(() => {
          return UserService.updateUser(this.userData)
        }).then((response) => {
          this.state.isSaved = true
        })
      } else {
        UserService.updateUser(this.userData).then((response) => {
          this.userData = response.data.result.user
          this.$store.dispatch('setUser', this.userData)
          this.state.isSaved = true
        })
      }
      // const imageName = `avatar/${this.userData.name}.jpg`
      // if (this.imageUrl) {
      //   const userImageRef = firebase.storage().ref().child(imageName)
      //   userImageRef.putString(this.imageUrl, 'data_url').then(() => {
      //     return userImageRef.getDownloadURL()
      //   }).then((url) => {
      //     this.userData.profile_picture = url
      //   }).then(() => {
      //     return UserService.updateUser(this.userData)
      //   }).then((response) => {
      //     this.state.isSaved = true
      //   }).catch((error) => {
      //     console.log(error)
      //   })
      // }
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.profile {
  margin: 0 10px;
}

.avatar-img {
  height: 150px;
  border-radius: 30px;
  margin: 20px;
}
</style>
