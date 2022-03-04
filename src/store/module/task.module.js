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
    }
  },
  actions: {
    submitForm (context, payload) {
      context.commit('addValues', payload)
    }
  },
  getters: {
    showTodos (state) {
      return state.todos
    }
  }
}
export default task
