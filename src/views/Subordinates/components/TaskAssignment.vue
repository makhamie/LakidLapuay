<template>
  <div class="container">
    <label class="label">Task Assignment</label>
    <div>
      <el-table
        :data="list"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="Task Name"
        >
        </el-table-column>
        <el-table-column
          prop="description"
          label="Description"
        >
        </el-table-column>
        <el-table-column
          prop="started_at"
          label="Start date"
        >
        </el-table-column>
        <el-table-column
          prop="finished_at"
          label="Due date"
        >
        </el-table-column>
        <el-table-column
          label="Action"
        >
        <template slot-scope="scope">
          <substitute-modal :startDate="scope.row.started_at" :endDate="scope.row.finished_at" :taskId="scope.row.id" @onConfirm="onSubstituteConfirm"></substitute-modal>
        </template>
        </el-table-column>
        <el-table-column label="Substitute by">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.isSubstitute" type="success">{{scope.row.substituteName}}</el-tag>
          <el-tag v-else type="danger">Not Substituted Yet</el-tag>
        </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import SubstituteModal from './SubstituteModal'

export default {
  props: ['list'],
  data () {
    return {
      // taskList: []
    }
  },
  components: {
    SubstituteModal
  },
  mounted () {
    // this.taskList = this.list.map((data) => {
    //   return {
    //     ...data,
    //     isSubstitute: false,
    //     substituteId: '',
    //     substituteName: ''
    //   }
    // })
  },
  methods: {
    onSubstituteConfirm ({taskId, substituter}) {
      let taskIndex = this.list.findIndex((task) => {
        return task.id === taskId
      })
      this.list[taskIndex].substituteId = substituter.id
      this.list[taskIndex].substituteName = substituter.name
      this.list[taskIndex].isSubstitute = true
      if (this.list.length === 1) {
        this.$emit('validateTaskList', this.list[0].isSubstitute)
      } else {
        let isPass = this.list.reduce((prev, val, index) => {
          console.log(prev, val)
          return prev.isSubstitute && val.isSubstitute
        })
        this.$emit('validateTaskList', isPass)
      }
      this.$emit('updateTaskList', {taskIndex, substituter, isSubstitute: true})
    }

  }
}
</script>
