<template>
  <div>
    <div class="container bottom-line">
      <label class="page-title">Subordinate Task</label>
    </div>
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
            prop="reason"
            label="Reason for leave"
          >
          </el-table-column>
          <el-table-column
            prop="started_at"
            label="Start Date"
          >
          </el-table-column>
          <el-table-column
            prop="finished_at"
            label="End Date"
          >
          </el-table-column>
          <el-table-column
            label="Action"
          >
            <template slot-scope="scope">
              <leave-request-detail-modal :leaveRequestId="scope.row.id"></leave-request-detail-modal>
              <!-- <el-button type="text">AAA</el-button> -->
            </template>
            <!-- <template slot-scope="scope"> -->
              <!-- aaa -->
              <!-- <el-button type="text" @click="openLeaveRequestDetail(scope.row.id)"></el-button> -->
              <!-- <el-button type="success" size="mini" icon="el-icon-check" @click="approveLeaveRequest(scope.row.id)"></el-button> -->
              <!-- <el-button type="danger" size="mini" icon="el-icon-close" @click="rejectLeaveRequest(scope.row.id)"></el-button> -->
            <!-- </template> -->
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
      <el-tab-pane label="Doing" name="doing">
        <!-- {{approvedRows}} -->
        <el-table :data="doingRows">
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
            prop="reason"
            label="Reason for leave"
          >
          </el-table-column>
          <el-table-column
            prop="started_at"
            label="Start Date"
          >
          </el-table-column>
          <el-table-column
            prop="finished_at"
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
                :total="doingRowCount">
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>

       <!-- Accepted Tab -->
      <el-tab-pane label="Finished" name="finished">
        <!-- {{approvedRows}} -->
        <el-table :data="finishedRows">
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
            prop="reason"
            label="Reason for leave"
          >
          </el-table-column>
          <el-table-column
            prop="started_at"
            label="Start Date"
          >
          </el-table-column>
          <el-table-column
            prop="finished_at"
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
                :total="finishedRowCount">
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { PER_PAGE } from '@/libraries/const'
// import { notificationAlert, messageAlert } from '@/libraries/helper'
import { SubordinateService } from '@/resources'

export default {
  data () {
    return {
      tab: 'pending',
      pendingRows: [],
      pendingRowCount: 0,

      doingRows: [],
      doingRowCount: 0,

      finishedRows: [],
      finishedRowCount: 0,

      currentPage: 1
    }
  },
  components: {
    // LeaveRequestDetailModal
  },
  computed: {
    perPage () {
      return PER_PAGE
    }
  },
  async mounted () {
    try {
      let tasks = await SubordinateService.getSubordinateTasks(this.tab, this.currentPage)
      if (tasks.data.success) {
        console.log(tasks.data.results)
        this.pendingRows = tasks.data.results.tasks
        this.pendingRowCount = tasks.data.results.count
      }
    } catch (error) {
    //   notificationAlert('Cannot contact server', 'error')
    }
  },
  methods: {
    async handleTabChange (tab, event) {
      const currentTab = tab.name
      this.tab = tab.name
      this.currentPage = 1
      try {
        let newRowsResponse = await SubordinateService.getSubordinateTasks(currentTab, this.currentPage)
        if (newRowsResponse.data.success) {
          this[`${currentTab}Rows`] = newRowsResponse.data.results.tasks
          this[`${currentTab}RowCount`] = newRowsResponse.data.results.count
        }
      } catch (error) {
        // notificationAlert('Cannot contact server', 'error')
        console.log(error)
      }
    },
    async handlePageChange (page) {
      this.currentPage = page
      const currentTab = this.tab
      try {
        let newRowsResponse = await SubordinateService.getSubordinateTasks(currentTab, this.currentPage)
        if (newRowsResponse.data.success) {
          this[`${currentTab}Rows`] = newRowsResponse.data.results.tasks
          this[`${currentTab}RowCount`] = newRowsResponse.data.results.count
        }
      } catch (error) {
        // notificationAlert('Cannot contact server', 'error')
        console.log(error)
      }
    }
  }
}
</script>

<style>
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
