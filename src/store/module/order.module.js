const orders = {
  namespaced: false,
  state () {
    return {
      orders: [],
      editedOrder: { }
    }
  },
  mutations: {
    orderFormSubmit (state, payload) {
      state.orders.push(payload)
      console.log('u have acheverd it my boy')
    },
    deleteList (state, payload) {
      state.orders.splice(payload, 1)
    },
    editList (state, payload) {
      state.editedOrder = payload
    },
    submitEditForm (state, payload) {
      state.orders.splice(payload.index, 1, payload)
    },
    clearItems (state, payload) {
      state.editedOrder = {}
    }

  },
  actions: {
    orderFormSubmit (context, payload) {
      context.commit('orderFormSubmit', payload)
    },
    deleteList (context, payload) {
      context.commit('deleteList', payload)
    },
    editList (context, payload) {
      context.commit('editList', payload)
    },
    submitEditForm (context, payload) {
      context.commit('submitEditForm', payload)
    },
    clearItems (context) {
      context.commit('clearItems') // actions to clear items
    }

  },
  getters: {
    getOrders (state) {
      return state.orders
    },
    getEditedOrder (state) {
      return state.editedOrder
    }
  }

}
export default orders
