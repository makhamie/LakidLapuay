<template>
  <div>
    <el-button class="" type="text" @click="dialogVisible = true">Substitute</el-button>
    <el-dialog
      title="Find Substituter"
      :visible.sync="dialogVisible"
      size="small"
      @open="onSubstituteModalClick"
      v-loading="isLoading"
    >
    <span>
      <el-select v-model="substituter">
        <el-option v-for="(substituter, index) in substituterList" :key="index" :label="substituter.name" :value="substituter"></el-option>
      </el-select>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" :disabled="substituter === ''" @click="onConfirmSubstituter">Confirm</el-button>
    </span>
    </el-dialog>
  </div>
</template>
<script>
import { SubordinateService } from '@/resources'
import { notificationAlert } from '@/libraries/helper'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['taskId', 'startDate', 'endDate'],
  data () {
    return {
      dialogVisible: false,
      substituter: '',
      substituterList: []
    }
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
    async onSubstituteModalClick () {
      this.startLoad()
      try {
        let availableColleagueResponse = await SubordinateService.getAvailableColleague(this.startDate, this.endDate)
        if (availableColleagueResponse.data.success) {
          this.substituterList = availableColleagueResponse.data.results
        }
        this.stopLoad()
      } catch (error) {
        this.stopLoad()
        notificationAlert('Cannot contact server', 'error')
      }
    },
    onConfirmSubstituter () {
      this.$emit('onConfirm', {taskId: this.taskId, substituter: this.substituter})
      this.dialogVisible = false
    }
  }
}
</script>
<style>

</style>
