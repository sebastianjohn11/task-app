<template>
<div>
    <h1>Todo App</h1>
    <todo-list></todo-list>
</div>
</template>

<script>
import TodoList from '../components/TodoList.vue'

export default {
  name: 'TodoView',
  components: {
    TodoList
  }
}
</script>
