<template>
  <div class="container">
    <label class="label">Task Assignment</label>
    <div>
      <el-table
        :data="taskList"
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
          <!-- <el-button v-else type="text" :disabled="true">Substitute</el-button> -->
          <!-- <el-button type="text" size="small" @click="substitute(scope.row)">Substitute</el-button> -->
        </template>
        </el-table-column>
        <el-table-column
          label="Substitute by"
        >
        <template slot-scope="scope">
          <el-tag v-if="scope.row.isSubstitute" type="success">{{scope.row.substituteName}}</el-tag>
          <!-- <span v-if="scope.row.isSubstitute"></span> -->
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
      taskList: []
    }
  },
  components: {
    SubstituteModal
  },
  mounted () {
    this.taskList = this.list.map((data) => {
      return {
        ...data,
        isSubstitute: false,
        substituteId: '',
        substituteName: ''
      }
    })
  },
  methods: {
    onSubstituteConfirm ({taskId, substituter}) {
      let taskIndex = this.taskList.findIndex((task) => {
        return task.id === taskId
      })
      this.taskList[taskIndex].substituteId = substituter.id
      this.taskList[taskIndex].substituteName = substituter.name
      this.taskList[taskIndex].isSubstitute = true
    }

  }
}
</script>
