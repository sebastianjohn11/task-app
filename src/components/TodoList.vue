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
            <!-- button -->
            <v-dialog
             v-model="dialog"
             persistent
              max-width="290">
              <template v-slot:activator="{ on, attrs }">
              <v-btn color="red" small
              v-bind="attrs"
              v-on="on">
              DELETE
              </v-btn>
              </template>
              <v-card>
              <v-card-title class="text-h5">
                DO you want to detele this ?
              </v-card-title>
              <v-card-text  text-color="orange">think again before u delete this.Once done ,you cannot retrieve it.
              </v-card-text>
              <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
              color="green"
              @click="dialog=false">
              CLOSE
              </v-btn>
              <v-btn
              color="red"
              @click="dialog = deleteTask (item)">
              confirm
              </v-btn>
             </v-card-actions>
             </v-card>
            </v-dialog>
          </td>
        </tr>
      </template>
    </v-data-table>
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
    deleteTask (item) {
      const index = this.todos.indexOf(item)
      confirm('Are you sure you want to delete this assigned task?') &&
      this.todos.splice(index, 1)
      this.dialoge = true
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
