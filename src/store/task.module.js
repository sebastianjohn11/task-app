export default {
  state () {
    return {
      todos: []

    }
  },
  mutations: {
    addValues (state, payload) {
      const newIteam = {
        task: payload.task,
        description: payload.description,
        assignedTo: payload.assignedTo
      }
      state.todos.push(newIteam)
    },
    submitEdit (state, payload) {
      state.todos.splice(payload.index, 1, {
        task: payload.task,
        description: payload.description,
        assignedTo: payload.assignedTo
      })
    }

  },
  actions: {
    submitForm (context, payload) {
      context.commit('addValues', payload)
    },
    submitEdit (context, payload) {
      context.commit('editValues', payload)
    }

  },
  getters: {
    showTodos (state) {
      return state.todos
    }

  }

}
