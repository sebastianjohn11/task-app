const orders = {
  namespaced: false,
  state () {
    return {
      orders: []

    }
  },
  mutations: {
    orderFormSubmit (state, payload) {
      state.orders.push(payload)
      console.log('u have acheverd it my boy')
    }

  },
  actions: {
    orderFormSubmit (context, payload) {
      context.commit('orderFormSubmit', payload)
    }

  },
  getters: {

  }

}
export default orders
