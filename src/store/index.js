import Vue from 'vue'
import Vuex from 'vuex'
import products from './module/product.module'
import orders from './module/order.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    orders
  }
})
