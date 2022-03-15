import axios from 'axios'

const products = {
  namespaced: true,
  state () {
    return {
      products: [],
      items: {},
      editProduct: {}
    }
  },
  mutations: {
    addData (state, results) {
      state.products = results
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
      state.editProduct = { }
    }

  },
  actions: {
    submitForm (context, payload) {
      axios.post('https://vue-http-demo-99b91-default-rtdb.firebaseio.com/surveys.json', payload)
    }, //
    ShowDataInTable (context) {
      axios.get('https://vue-http-demo-99b91-default-rtdb.firebaseio.com/surveys.json')
        .then((response) => {
          var newArray = Object.values(response.data)
          context.commit('addData', newArray)
        })
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
export default products
