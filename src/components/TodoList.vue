<template>
  <div>
    <v-btn @click="onShowForm" color="blue">Add Todo</v-btn><!--button to display dialoge input texts!-->
             <v-card
                max-width="950" class="mx-auto">
                <v-list>
                    <v-list-item v-for="(todo, index) in todos" :key="index">
                        Task: {{ todo.task }}
                        <br>
                        description: {{ todo.description }}
                        <br>
                        assigned to: {{ todo.assignedTo }}
                        <br>
                        <br>
                        <!-- v-btn @click="deleteTask(index)" color="red">DELETE</v-btn> !-->
                          <v-dialog
                            v-model="dialog"
                            persistent
                            max-width="290">
                            <template v-slot:activator="{ on, attrs }">
                              <v-spacer />
                              <v-btn
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                @click="deleteTask(index)"
                              >
                                  DELETE
                              </v-btn>
                              <v-btn @click="editTask(todo)">Edit</v-btn>
                            </template>
                            <v-card>
                              <v-card-title class="text-h5">
                                want to delete this?
                              </v-card-title>
                              <v-card-text>deleting this will remove it</v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="green darken-1"
                                  text
                                  @click="dialog = false"
                                >
                                  cancel
                                </v-btn>
                                <v-btn
                                  color="green darken-1"
                                  text
                                  @click="deleteConfirmed()"
                                >
                                delete
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                    </v-list-item>
                </v-list>
                <the-form :myeditdata="edits" @submit-form="submittedForm" v-if="showForm" @closed="showForm = false"> </the-form>

            </v-card>
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
      showForm: false,
      dialog: false,
      todoIndex: '',
      copyTodos: [],
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
    editTask (todo) {
      this.edits.task = todo.task
      this.edits.assignedTo = todo.assignedTo
      this.edits.description = todo.description
      this.showForm = true
    }
  }
}
</script>
