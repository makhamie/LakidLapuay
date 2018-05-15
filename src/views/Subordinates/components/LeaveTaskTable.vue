<template>
  <div>
    <el-tabs v-model="tab" @tab-click="handleTabChange">
      <!-- Pending Tab -->
      <el-tab-pane label="Pending" name="pending">
        <el-table :data="pendingRows">
          <el-table-column
            prop="id"
            label="ID"
            width="50px"
          >
          </el-table-column>
          <el-table-column
            prop="requester.name"
            label="Requester name"
          >
          </el-table-column>
          <el-table-column
            prop="leave_request.reason"
            label="Reason for leave"
          >
          </el-table-column>
          <el-table-column
            prop="task.started_at"
            label="Task Start Date"
          >
          </el-table-column>
          <el-table-column
            prop="task.finished_at"
            label="End Date"
          >
          </el-table-column>
          <el-table-column
            label="Action"
          >
            <template slot-scope="scope">
              <el-button type="success" size="mini" icon="el-icon-check" @click="approveLeaveTask(scope.row.id)"></el-button>
              <el-button type="danger" size="mini" icon="el-icon-close" @click="rejectLeaveTask(scope.row.id)"></el-button>
            </template>
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
              :total="pendingRowCount">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
      </el-tab-pane>

      <!-- Accepted Tab -->
      <el-tab-pane label="Accepted" name="approved">
         <el-table :data="approvedRows">
          <el-table-column
            prop="id"
            label="ID"
            width="50px"
          >
          </el-table-column>
          <el-table-column
            prop="requester.name"
            label="Requester name"
          >
          </el-table-column>
          <el-table-column
            prop="leave_request.reason"
            label="Reason for leave"
          >
          </el-table-column>
          <el-table-column
            prop="task.started_at"
            label="Task Start Date"
          >
          </el-table-column>
          <el-table-column
            prop="task.finished_at"
            label="End Date"
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
              :total="approvedRowCount">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
      </el-tab-pane>

      <!-- Rejected Tab -->
      <el-tab-pane label="Rejected" name="rejected">
         <el-table :data="rejectedRows">
          <el-table-column
            prop="id"
            label="ID"
            width="50px"
          >
          </el-table-column>
          <el-table-column
            prop="requester.name"
            label="Requester name"
          >
          </el-table-column>
          <el-table-column
            prop="leave_request.reason"
            label="Reason for leave"
          >
          </el-table-column>
          <el-table-column
            prop="task.started_at"
            label="Task Start Date"
          >
          </el-table-column>
          <el-table-column
            prop="task.finished_at"
            label="End Date"
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
              :total="rejectedRowCount">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { SubordinateService } from '@/resources'
import { PER_PAGE } from '@/libraries/const'

export default {
  data () {
    return {
      tab: 'pending',
      pendingRows: [],
      pendingRowCount: 0,

      approvedRows: [],
      approvedRowCount: 0,

      rejectedRows: [],
      rejectedRowCount: 0,

      currentPage: 1
    }
  },
  computed: {
    perPage () {
      return PER_PAGE
    }
  },
  async mounted () {
    try {
      let pendingRowsResponse = await SubordinateService.getLeaveTask(this.tab, this.currentPage)
      if (pendingRowsResponse.data.success) {
        this.pendingRows = pendingRowsResponse.data.results.leave_tasks
        this.pendingRowCount = pendingRowsResponse.data.results.count
      }
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async handlePageChange (page) {
      this.currentPage = page
      const currentTab = this.tab
      try {
        let newRowsResponse = await SubordinateService.getLeaveTask(currentTab, this.currentPage)
        if (newRowsResponse.data.success) {
          this[`${currentTab}Rows`] = newRowsResponse.data.results.leave_tasks
          this[`${currentTab}RowCount`] = newRowsResponse.data.results.count
        }
      } catch (error) {
        console.log(error)
      }
    },
    async handleTabChange (tab, event) {
      const currentTab = tab.name
      this.tab = tab.name
      this.currentPage = 1
      try {
        let newRowsResponse = await SubordinateService.getLeaveTask(currentTab, this.currentPage)
        if (newRowsResponse.data.success) {
          this[`${currentTab}Rows`] = newRowsResponse.data.results.leave_tasks
          this[`${currentTab}RowCount`] = newRowsResponse.data.results.count
        }
      } catch (error) {
        console.log(error)
      }
    },
    async approveLeaveTask (leaveTaskId) {
      try {
        let leaveTaskResponse = await SubordinateService.responseLeaveTask(leaveTaskId, 'approved')
        if (leaveTaskResponse.data.success) {
          this.reload()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async rejectLeaveTask (leaveTaskId) {
      try {
        let leaveTaskResponse = await SubordinateService.responseLeaveTask(leaveTaskId, 'rejected')
        if (leaveTaskResponse.data.success) {
          this.reload()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async reload () {
      this.currentPage = 1
      const currentTab = this.tab
      try {
        let newRowsResponse = await SubordinateService.getLeaveTask(currentTab, this.currentPage)
        if (newRowsResponse.data.success) {
          this[`${currentTab}Rows`] = newRowsResponse.data.results.leave_tasks
          this[`${currentTab}RowCount`] = newRowsResponse.data.results.count
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
  .table-footer {
    border: 1px solid #dfe6ec;
    border-top: none;
    padding: 5px;
  }
  .text-right { text-align: right; }
  .edit-form {
    margin-top: 30px;
  }
</style>
