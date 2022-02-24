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
            <v-btn color="red" small @click="deleteTask(index)">
              Delete
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
    <v-dialog
        v-model="dialog"
             persistent
              max-width="290">
              <v-card>
              <v-card-title class="text-h5">
                DO you want to detele this ?
              </v-card-title>
              <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
              color="green"
              @click="dialog=false">
              Cancel
              </v-btn>
              <v-btn
              color="red"
              @click="deleteConfirmed ()">
              Delete
              </v-btn>
             </v-card-actions>
             </v-card>
            </v-dialog>
      <the-form ref="test" @submit-form="submittedForm" @submit-edit="editedForm" v-model="showForm" @closed="showForm = false"> </the-form>
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
      todoIndex: ''
    }
  },
  methods: {
    submittedForm (taskInput) {
      this.todos.push(taskInput)
    },
    deleteTask (index) {
      this.dialog = true
      this.todoIndex = index
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
    },
    editedForm (taskInput) {
      this.todos.splice(taskInput.index, 1, {
        task: taskInput.task,
        description: taskInput.description,
        assignedTo: taskInput.assignedTo
      })
    }
  }
}
</script>
