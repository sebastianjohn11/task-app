<template>
   <v-card
      max-width="450"
      class="mx-auto"
    >
      <v-list>
        <v-list-item v-for="(todo, index) in todos" :key="index">
            Task: {{ todo.task }}
            description: {{ todo.description }}
            assigned: {{ todo.assignedTo }}
        </v-list-item>
      </v-list>
   </v-card>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      name: '',
      todos: [
        {
          task: 'task1',
          description: 'task description',
          assignedTo: 'John'
        }
      ]
    }
  }
}
</script>
