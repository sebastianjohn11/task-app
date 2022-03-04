const task = {
  nameSpaced: true,
  state () {
    return {
      todos: []
    }
  },
  mutations: {
    addValues (state, payload) {
      state.todos.push(payload)
    },
    delete (state, payload) {
      state.todos.splice(payload, 1)
    },
    edit (state, payload) {
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
    deleteList (context, payaload) {
      context.commit('delete', payaload)
    },
    submitEdit (context, payload) {
      context.commit('edit', payload)
    }
  },
  getters: {
    showTodos (state) {
      return state.todos
    }
  }
}
export default task
