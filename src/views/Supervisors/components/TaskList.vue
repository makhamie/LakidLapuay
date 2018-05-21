<template>
  <div>
    <el-tabs v-model="tab" @tab-click="handleTabChange">
      <!-- Pending Tab -->
      <el-tab-pane label="All task" name="all_task">
        <!-- {{allTaskRows}} -->
        <el-table :data="allTaskRows">
          <el-table-column
            prop="id"
            label="ID"
            width="50px"
          >
          </el-table-column>
          <el-table-column
            prop="subordinate_id"
            label="Subordinate name"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="Task"
          >
          </el-table-column>
          <el-table-column
            prop="description"
            label="Description"
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
              :total="allTaskRowCount">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
      </el-tab-pane>

      <!-- Accepted Tab -->
      <el-tab-pane label="Current Task" name="current_task">
        <!-- {{approvedRows}} -->
        <el-table :data="currentTaskRows">
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
                :total="currentTaskRowCount">
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <!-- Rejected Tab -->
      <el-tab-pane label="Finished Task" name="finished_task">

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
import { PER_PAGE } from '@/libraries/const'
import { notificationAlert, messageAlert } from '@/libraries/helper'
import { SupervisorService } from '@/resources'

export default {
  data () {
    return {
      tab: 'all_task',
      allTaskRows: [],
      allTaskRowCount: 0,
      currentTaskRows: [],
      currentTaskRowCount: 0,
      rejectedRows: [],
      rejectedRowCount: 0,
      currentPage: 1
    }
  },
  components: {
  },
  computed: {
    perPage () {
      return PER_PAGE
    }
  },
  async mounted () {
    try {
      // this.currentPage = 1
      let allTaskresponse = await SupervisorService.getSupervisorTask(this.currentPage)

      if (allTaskresponse.data.success) {
        this.allTaskRows = allTaskresponse.data.results.tasks

        console.log(allTaskresponse.data.results.tasks)
      }

      // let currentTaskresponse = await SupervisorService.getCurrentTask(this.currentPage)

      // if (currentTaskresponse.data.success) {
      //   this.currentTaskRows = currentTaskresponse.data.results.tasks
      //   console.log('++++++currentTaskRows++++++')
      //   console.log(currentTaskRows.data.results.tasks)
      // }

    } catch (error) {
      notificationAlert('Cannot contact server', 'error')
    }
  },
  methods: {
    async handleTabChange (tab, event) {
      const currentTab = tab.name
      this.tab = tab.name
      this.currentPage = 1

      console.log('++++++++++++handleTabChange++++++++++++')

      if ( tab.name == 'current_task') {
        let currentTaskresponse = await SupervisorService.getCurrentTask(this.currentPage)

        if (currentTaskresponse.data.success) {
          this.currentTaskRows = currentTaskresponse.data.results.tasks
          console.log('++++++currentTaskRows++++++')
          console.log(currentTaskRows.data.results.tasks)
        }
      }
      // try {
      //   let newRowsResponse = await SupervisorService.getLeaveRequest(currentTab, this.currentPage)
      //   if (newRowsResponse.data.success) {
      //     this[`${currentTab}Rows`] = newRowsResponse.data.results.leave_requests
      //     this[`${currentTab}RowCount`] = newRowsResponse.data.results.count
      //   }
      // } catch (error) {
      //   notificationAlert('Cannot contact server', 'error')
      //   console.log(error)
      // }
    },
    async handlePageChange (page) {
      // this.currentPage = page
      // const currentTab = this.tab
      // try {
      //   let newRowsResponse = await SupervisorService.getLeaveRequest(currentTab, this.currentPage)
      //   if (newRowsResponse.data.success) {
      //     this[`${currentTab}Rows`] = newRowsResponse.data.results.leave_requests
      //     this[`${currentTab}RowCount`] = newRowsResponse.data.results.count
      //   }
      // } catch (error) {
      //   notificationAlert('Cannot contact server', 'error')
      //   console.log(error)
      // }
    }
    
    // async handleTabChange (tab, event) {
    //   const currentTab = tab.name
    //   this.tab = tab.name
    //   this.currentPage = 1
    //   try {
    //     let newRowsResponse = await SupervisorService.getLeaveRequest(currentTab, this.currentPage)
    //     if (newRowsResponse.data.success) {
    //       this[`${currentTab}Rows`] = newRowsResponse.data.results.leave_requests
    //       this[`${currentTab}RowCount`] = newRowsResponse.data.results.count
    //     }
    //   } catch (error) {
    //     notificationAlert('Cannot contact server', 'error')
    //     console.log(error)
    //   }
    // },
    // async handlePageChange (page) {
    //   this.currentPage = page
    //   const currentTab = this.tab
    //   try {
    //     let newRowsResponse = await SupervisorService.getLeaveRequest(currentTab, this.currentPage)
    //     if (newRowsResponse.data.success) {
    //       this[`${currentTab}Rows`] = newRowsResponse.data.results.leave_requests
    //       this[`${currentTab}RowCount`] = newRowsResponse.data.results.count
    //     }
    //   } catch (error) {
    //     notificationAlert('Cannot contact server', 'error')
    //     console.log(error)
    //   }
    // },
    // async approveLeaveRequest (leaveRequestId) {
    //   try {
    //     let leaveRequestResponse = await SupervisorService.responseLeaveRequest(leaveRequestId, 'approved')
    //     if (leaveRequestResponse.data.success) {
    //       messageAlert('Leave request approved')
    //       this.reload()
    //     } else {
    //       messageAlert('Fail to approved', 'error')
    //     }
    //   } catch (error) {
    //     messageAlert('Cannot contact server', 'error')
    //   }
    // },
    // async rejectLeaveRequest (leaveRequestId) {
    //   try {
    //     let leaveRequestResponse = await SupervisorService.responseLeaveRequest(leaveRequestId, 'rejected')
    //     if (leaveRequestResponse.data.success) {
    //       messageAlert('Leave request rejected')
    //       this.reload()
    //     } else {
    //       messageAlert('Fail to approved', 'error')
    //     }
    //   } catch (error) {
    //     messageAlert('Cannot contact server', 'error')
    //   }
    // },
    // async reload () {
    //   this.currentPage = 1
    //   const currentTab = this.tab
    //   try {
    //     let newRowsResponse = await SupervisorService.getLeaveRequest(currentTab, this.currentPage)
    //     if (newRowsResponse.data.success) {
    //       this[`${currentTab}Rows`] = newRowsResponse.data.results.leave_tasks
    //       this[`${currentTab}RowCount`] = newRowsResponse.data.results.count
    //     }
    //   } catch (error) {
    //     notificationAlert('Cannot contact server', 'error')
    //     console.log(error)
    //   }
    // }
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