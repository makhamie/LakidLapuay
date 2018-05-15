<template>
  <div>
    <el-button class="" type="text" @click="onSubstituteModalClick">Substitute</el-button>
    <el-dialog
      title="Find Substituter"
      :visible.sync="dialogVisible"
      size="small"
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

export default {
  props: ['taskId', 'startDate', 'endDate'],
  data () {
    return {
      dialogVisible: false,
      substituter: '',
      substituterList: []
    }
  },
  methods: {
    async onSubstituteModalClick () {
      try {
        let availableColleagueResponse = await SubordinateService.getAvailableColleague(this.startDate, this.endDate)
        if (availableColleagueResponse.data.success) {
          this.substituterList = availableColleagueResponse.data.results
        }
        this.dialogVisible = true
      } catch (error) {
        console.log(error)
      }
    },
    onConfirmSubstituter () {
      console.log('Emit back to parent')
      this.$emit('onConfirm', {taskId: this.taskId, substituter: this.substituter})
      this.dialogVisible = false
    }
  }
}
</script>
<style>

</style>
