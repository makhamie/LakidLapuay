<template>
  <div>
    <el-button type="text" @click="leaveRequestDetailModalVisible = true">Show Detail</el-button>
    <el-dialog
      title="LeaveRequestDetail"
      :visible.sync="leaveRequestDetailModalVisible"
      @open="openLeaveRequestDetail"
      @close="onClose"
    >
      <el-table :data="leaveRequestDetailRows">
        <el-table-column
          label="ID"
          prop="id"
          width="50px"
        >
        </el-table-column>
        <el-table-column
          label="Task Name"
          prop="task.name"
        >
        </el-table-column>
        <el-table-column
          label="Substitute Name"
          prop="substituter.name"
        >
        </el-table-column>
      </el-table>
      <el-row :gutter="0" class="table-footer">
        <el-col :sm="24" class="text-right">
          <div class="block">
            <el-pagination
              @current-change="handlePageChange"
              :current-page="currentPage"
              :page-size="perPage"
              layout="total, prev, pager, next"
              :total="leaveRequestDetailCount">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-button type="success" @click="handleAction('approved')">Approve</el-button>
        <el-button type="danger" @click="handleAction('rejected')">Reject</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { SupervisorService } from '@/resources'
import { PER_PAGE } from '@/libraries/const'

export default {
  props: ['leaveRequestId'],
  data () {
    return {
      leaveRequestDetailModalVisible: false,
      currentPage: 1,

      leaveRequestDetailRows: [],
      leaveRequestDetailCount: 0
    }
  },
  computed: {
    perPage () {
      return PER_PAGE
    }
  },
  methods: {
    async openLeaveRequestDetail () {
      try {
        let leaveRequestDetailResponse = await SupervisorService.getLeaveRequestDetail(this.leaveRequestId, this.currentPage)
        if (leaveRequestDetailResponse.data.success) {
          this.leaveRequestDetailRows = leaveRequestDetailResponse.data.results.list
          this.leaveRequestDetailCount = leaveRequestDetailResponse.data.results.count
        }
      } catch (error) {
        console.log(error)
      }
    },
    async handlePageChange (page) {
      this.currentPage = page
      try {
        let leaveRequestDetailResponse = await SupervisorService.getLeaveRequestDetail(this.leaveRequestId, page)
        if (leaveRequestDetailResponse.data.success) {
          this.leaveRequestDetailRows = leaveRequestDetailResponse.data.results.list
          this.leaveRequestDetailCount = leaveRequestDetailResponse.data.results.count
        }
        this.leaveRequestDetailModalVisible = true
      } catch (error) {
        console.log(error)
      }
    },
    async handleAction (action) {
      console.log(this.leaveRequestId, action)
      try {
        await SupervisorService.responseLeaveRequest(this.leaveRequestId, action)
        this.leaveRequestDetailModalVisible = false
      } catch (error) {
        console.log(error)
      }
    }
  }

}
</script>
<style>

</style>
