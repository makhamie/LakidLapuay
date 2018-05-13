<template>
  <div class="container">
    <label class="label">Submission request</label>
    <div>
      <el-table
        :data="leaveRequestData"
        style="width: 100%">
        <el-table-column
          prop="requestDate"
          label="Request Date"
          width="120%">
        </el-table-column>
        <el-table-column
          prop="startDate"
          label="Since"
          width="120%">
        </el-table-column>
        <el-table-column
          prop="endDate"
          label="Until"
          width="120%">
        </el-table-column>
        <el-table-column
          prop="requestor"
          label="Requestor"
          width="120%">
        </el-table-column>
        <el-table-column
          prop="substitute"
          label="Substitute"
          width="120%">
        </el-table-column>
        <el-table-column
          prop="type"
          label="Type"
          width="120%">
        </el-table-column>
        <el-table-column
          prop="period"
          label="Period (days)"
          width="120%">
        </el-table-column>
        <el-table-column
          prop="status"
          label="Status"
          width="200%">
          <template slot-scope="scope">
            <el-button @click="handleClick" type="text" size="small">Approve</el-button>
            <el-button type="text" size="small">Reject</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
    }
  },
  data () {
    return {
      leaveRequestData: [{
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
      }]
    }
  }
}
</script>
