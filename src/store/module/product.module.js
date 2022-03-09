const products = {
  namespaced: false,
  state () {
    return {
      products: []

    }
  },
  mutations: {
    addData (state, payload) {
      state.products.push(payload)
    }

  },
  actions: {
    submitForm (context, payload) {
      context.commit('addData', payload)
    }

  },
  getters: {

  }

}
export default products
