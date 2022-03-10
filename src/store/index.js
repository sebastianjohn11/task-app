import Vue from 'vue'
import Vuex from 'vuex'
import product from './module/product.module'
import orderModule from './module/order.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product,
    orderModule
  }
})
