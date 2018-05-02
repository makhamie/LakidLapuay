<template>
  <div class="container">
    <label class="label">Submission history</label>
    <div>
      <el-table
        :data="leaveListData"
        style="width: 100%">
        <el-table-column
          prop="requestDate"
          label="Request Date"
          width="150%">
        </el-table-column>
        <el-table-column
          prop="startDate"
          label="Since"
          width="150%">
        </el-table-column>
        <el-table-column
          prop="endDate"
          label="Until"
          width="150%">
        </el-table-column>
        <el-table-column
          prop="substitute"
          label="Substitute"
          width="150%">
        </el-table-column>
        <el-table-column
          prop="type"
          label="Type"
          width="150%">
        </el-table-column>
        <el-table-column
          prop="period"
          label="Period (days)"
          width="120%">
        </el-table-column>
        <el-table-column
          prop="status"
          label="Status"
          width="500%">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      leaveListData: [{
        requestDate: '2016-05-03',
        startDate: '2016-05-03',
        endDate: '2016-05-03',
        requestor: 'Ung',
        substitute: 'Makhamwan',
        type: 'vacation',
        period: '7',
        status: 'waiting'
      }, {
        requestDate: '2016-05-03',
        startDate: '2016-05-03',
        endDate: '2016-05-03',
        requestor: 'Ung',
        substitute: 'Makhamwan',
        type: 'vacation',
        period: '7',
        status: 'approved'
      }, {
        requestDate: '2016-05-03',
        startDate: '2016-05-03',
        endDate: '2016-05-03',
        requestor: 'Ung',
        substitute: 'Makhamwan',
        type: 'vacation',
        period: '7',
        status: 'rejected'
      }, {
        requestDate: '2016-05-03',
        startDate: '2016-05-03',
        endDate: '2016-05-03',
        requestor: 'Ung',
        substitute: 'Makhamwan',
        type: 'vacation',
        period: '7',
        status: 'waiting'
      }],
      subordinator:''
    }
  }
}
</script>
