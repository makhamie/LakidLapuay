<template>
  <div v-loading="isLoading">
    <div class="header-container bottom-line">
      <label class="page-title">Update profile</label>
    </div>
    <div class="container">
      <el-row>
        <el-col class="profile" :span="5">
          <h2>Profile Image</h2>
          <img class="avatar-img" :src="imageUrl" height="150">
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
        </el-col>
        <el-col :span="15" :offset="2">
          <el-form :mode="userData">
            <h2>Personal Information</h2>
            <el-form-item label="Name">
              <el-input v-model="userData.name" />
            </el-form-item>
            <el-form-item label="Email">
              <el-input v-model="userData.email" />
            </el-form-item>
            <el-form-item class="bottom-line" label="Department">
              <el-select v-model="userData.department_id" placeholder="Select">
                <el-option
                  v-for="item in departments"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
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
      </el-row>
    </div>
  </div>
</template>
<script>
import { AdminService, UserService } from '@/resources'
import { messageAlert } from '@/libraries/helper'
import * as firebase from 'firebase'
import { mapGetters, mapActions } from 'vuex'

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
    this.startLoad()
    this.userData = this.$store.getters.currentUser
    this.imageUrl = this.userData.profile_picture
    AdminService.getAllDepartments().then((response) => {
      this.departments = response.data
      this.stopLoad()
    }).catch((error) => {
      console.log(error)
      this.stopLoad()
    })
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    })
  },
  methods: {
    ...mapActions({
      startLoad: 'startLoad',
      stopLoad: 'finishLoad'
    }),
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
      this.startLoad()
      const userImageRef = firebase.storage().ref().child(`avatar/${this.userData.name}.jpg`)
      if (this.imageUrl !== this.userData.profile_picture) {
        console.log('imageUrl !=== userdata')
        return userImageRef.putString(this.imageUrl, 'data_url').then(() => {
          return userImageRef.getDownloadURL()
        }).catch((error) => {
          console.log(error)
          messageAlert('Fail to upload image', 'error')
          this.stopLoad()
        })
      }
      return this.userData.profile_picture
    },
    onSubmit () {
      this.startLoad()
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
          this.stopLoad()
          messageAlert('Edit user profile successful', 'success')
        }).catch((error) => {
          console.log(error)
          this.stopLoad()
          messageAlert('Fail to edit user profile', 'error')
        })
      } else {
        UserService.updateUser(this.userData).then((response) => {
          this.userData = response.data.result.user
          this.$store.dispatch('setUser', this.userData)
          this.state.isSaved = true
          this.stopLoad()
          messageAlert('Edit user profile successful', 'success')
        }).catch((error) => {
          console.log(error)
          this.stopLoad()
          messageAlert('Fail to edit user profile', 'error')
        })
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  margin-top: 50px;
}

.header-container {
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

.profile {
  margin: 0 10px;
}

.avatar-img {
  height: 150px;
  border-radius: 30px;
  margin-bottom: 20px;
}

.page-title {
  font-size: 50px;
  width: 70%;
  margin-left: 15%;
  margin-top: 50px;
}
</style>
