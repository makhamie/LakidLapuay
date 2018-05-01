<template>
  <div class="container">
    <label class="label">Task Assignment</label>
    <div>
      <el-table
        :data="taskListData"
        style="width: 100%">
        <el-table-column
          prop="assignDate"
          label="Assign Date"
          width="150%">
        </el-table-column>
        <el-table-column
          prop="startDate"
          label="Start date"
          width="150%">
        </el-table-column>
        <el-table-column
          prop="endDate"
          label="Due date"
          width="150%">
        </el-table-column>
        <el-table-column
          prop="taskName"
          label="Task name"
          width="300%">
        </el-table-column>
        <el-table-column
          prop="submitRequest"
          label="Submit"
          width="120%">
          <template slot-scope="scope">
            <el-button @click="handleClick" type="text" size="small">Submit</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="status"
          label="Status"
          width="200%">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      taskListData: [{
        assignDate: '2016-05-03',
        startDate: '2016-05-03',
        endDate: '2016-05-03',
        subordinator: 'Makhamwan',
        taskName: 'Eating whole whale',
        status: 'waiting'
      }, {
        assignDate: '2016-05-03',
        startDate: '2016-05-03',
        endDate: '2016-05-03',
        subordinator: 'Trong',
        taskName: 'Eliminate flies from cupcake',
        status: 'approved'
      }, {
        assignDate: '2016-05-03',
        startDate: '2016-05-03',
        endDate: '2016-05-03',
        subordinator: 'Ung',
        taskName: 'Get a higher rank of eating contest',
        status: 'rejected'
      }, {
        assignDate: '2016-05-03',
        startDate: '2016-05-03',
        endDate: '2016-05-03',
        subordinator: 'Third',
        taskName: 'Brush teeth before sleeping',
        status: 'waiting'
      }],
      subordinator:''
    }
  }
}
</script>
