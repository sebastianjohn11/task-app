import axios from 'axios'
const orders = {
  namespaced: true,
  state () {
    return {
      orders: [],
      editedOrder: { }
    }
  },
  mutations: {
    addData (state, results) {
      state.orders = results
    },
    orderFormSubmit (state, payload) {
      state.orders.push(payload)
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
    clearItems (state) {
      state.editedOrder = {}
    }

  },
  actions: {
    orderFormSubmit (context, payload) {
      axios.post('https://vue-http-demo-99b91-default-rtdb.firebaseio.com/surveys.json', payload)
      context.commit('orderFormSubmit', payload)
    },
    ShowDataInTable (context) {
      axios.get('https://vue-http-demo-99b91-default-rtdb.firebaseio.com/surveys.json')
        .then((response) => {
          var newArray = Object.values(response.data)
          context.commit('addData', newArray)
        })
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
