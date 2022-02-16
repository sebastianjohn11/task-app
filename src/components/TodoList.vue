<template>
  <ul>
            <v-card
                max-width="950"
                class="mx-auto">
                <v-list>
                    <v-list-item v-for="(todo, index) in todos" :key="index">
                        Task: {{ todo.task }}
                        <br>
                        description: {{ todo.description }}
                        <br>
                        assigned to: {{ todo.assignedTo }}
                        <br>
                        <br>
                        <button @ click="delete">DELETE</button>
                        <!--  !-->

                    </v-list-item>
                </v-list>
                <the-form @submit-form="submittedForm">
                        </the-form>
            </v-card>
  </ul>
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
      todos: [
        {
          id: '',
          task: '',
          description: '',
          assignedTo: ''
        }
      ]
    }
  },
  methods: {
    submittedForm (gotTask, gotDescription, gotAssiginTo) {
      const newList = {
        task: gotTask,
        description: gotDescription,
        assignedTo: gotAssiginTo
      }
      this.todos.push(newList)
    },
    delete () {
      // eslint-disable-next-line no-self-compare
      this.todos = this.todos.filter(index => index !== index)
    }
  }
}
</script>
