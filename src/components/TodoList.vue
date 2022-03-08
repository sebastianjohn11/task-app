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
    <delete-dialog @closed="showDeleteDialog = false"  @deleteconfirmed ="deleteIt()" v-if="showDeleteDialog" ></delete-dialog>
      <the-form v-model="showForm" @closed="showForm = false"> </the-form>
  </div>
</template>
<script>
import TheForm from './TheForm.vue'
import DeleteDialog from './DeleteDialog.vue'
export default {
  components: {
    TheForm,
    DeleteDialog
  },
  name: 'TodoList',
  data () {
    return {
      headers: [
        { text: 'Task', align: 'start', value: 'task' },
        { text: 'Description', value: 'description' },
        { text: 'Assigned-To', value: 'assignedTo' },
        { text: 'Edit', value: 'edit', sortable: false },
        { text: 'Delete', value: 'delete', sortable: false }
      ],
      showForm: false,
      showDeleteDialog: false,
      todoIndex: ''
    }
  },
  computed: {
    todos () {
      return this.$store.getters.showTodos
    }
  },
  methods: { // delete
    deleteTask (index) {
      this.showDeleteDialog = true
      this.todoIndex = index
    },
    deleteIt () {
      this.$store.dispatch('deleteList', this.todoIndex)
      this.showDeleteDialog = false
    },
    onShowForm () {
      this.showForm = true
    },
    editTask (item, index) {
      this.$store.dispatch('editForm', {
        task: item.task,
        description: item.description,
        assignedTo: item.assignedTo,
        index: index
      })
      // this.$refs.test.editForm(item, index)
    }
  }
}
</script>
