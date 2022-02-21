<template>
  <div>
   <v-btn @click="onShowForm" color="blue">Add Todo</v-btn>
   <v-data-table :headers="headers" :items="todos" class="elevation-1">
      <template v-slot:body="{ items }">
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.task }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.assignedTo }}</td>
          <td>
            <v-btn color="blue" small @click="editTask(item, index)">
              Edit
            </v-btn>
          </td>
          <td>
            <v-spacer></v-spacer>
            <v-btn color="#FF1744" small @click="deleteTask(item)">
              Delete
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
      <the-form ref="test" @submit-form="submittedForm" @submit-edit="editedForm" v-if="showForm" @closed="showForm = false"> </the-form>
  </div>
</template>
<script>
import TheForm from './TheForm.vue'
export default {
  components: {
    TheForm
  },
  name: 'TodoList',
  data () {
    return {
      todos: [],
      headers: [
        { text: 'Task', align: 'start', value: 'task' },
        { text: 'Description', value: 'description' },
        { text: 'Assigned-To', value: 'assignedTo' },
        { text: 'Edit', value: 'edit', sortable: false },
        { text: 'Delete', value: 'delete', sortable: false }
      ],
      showForm: false,
      dialog: false,
      todoIndex: '',
      editIndex: '',
      edits: {
        task: '',
        description: '',
        assignedTo: ''
      }
    }
  },
  methods: {
    submittedForm (taskInput) {
      this.todos.push(taskInput)
    },
    editedForm (taskInput) {
      this.todos.splice(this.editIndex, 1, {
        task: this.item.task,
        description: this.item.description,
        assignedTo: this.item.assignedTo
      })
    },
    deleteTask (item) {
      const index = this.todos.indexOf(item)
      confirm('Are you sure you want to delete this assigned task?') &&
        this.todos.splice(index, 1)
    },
    deleteConfirmed () {
      this.todos.splice(this.todoIndex, 1)
      this.dialog = false
    },
    onShowForm () {
      this.showForm = true
    },
    editTask (item, index) {
      this.$refs.test.editForm(item, index)
    }
  }
}
</script>
