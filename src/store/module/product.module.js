const product = {
  namespaced: true,
  state () {
    return {
      products: [],
      items: {},
      editProduct: {}
    }
  },
  mutations: {
    addData (state, payload) {
      state.products.push(payload)
    },
    delete (state, payload) {
      state.products.splice(payload, 1)
    },
    editData (state, payload) {
      state.editProduct = payload
    },
    formEdit (state, payload) {
      state.products.splice(payload.index, 1, payload)
    },
    clearItems (state) { // clearing the items
      state.items = {}
    }

  },
  actions: {
    submitForm (context, payload) {
      context.commit('addData', payload)
    },
    deleteProductList (context, payload) {
      context.commit('delete', payload)
    },
    editProductList (context, payload) {
      context.commit('editData', payload)
    },
    submitEdit (context, payload) {
      context.commit('formEdit', payload)
    },
    clearItems (context) {
      context.commit('clearItems') // actions to clear items
    }

  },
  getters: {
    showData (state) {
      return state.products
    },
    showEdits (state) {
      return state.editProduct
    }
  }

}
export default product
