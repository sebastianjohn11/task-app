const task = {
  namespaced: false,
  state () {
    return {
      todos: [],
      items: {}
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
      state.todos.splice(payload.index, 1,
        payload
      )
    },
    formEdit (state, payload) {
      state.items = payload
    },
    clearItems (state) { // clearing the items
      state.items = {}
    }
  },
  actions: {
    submitForm (context, payload) {
      context.commit('addValues', payload)
    },
    deleteList (context, payload) {
      context.commit('delete', payload)
    },
    submitEdit (context, payload) {
      context.commit('edit', payload)
    },
    editForm (context, payload) {
      context.commit('formEdit', payload)
    },
    clearItems (context) {
      context.commit('clearItems') // actions to clear items
    }
  },
  getters: {
    showTodos (state) {
      return state.todos
    },
    showEdits (state) {
      return state.items
    }
  }
}
export default task
