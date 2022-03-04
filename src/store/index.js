import { createStore } from 'vuex'
import TaskModule from './module/task.module.js'

const store = createStore({
  modules: {
    TaskModule
  },
  state () {
    return {
    }
  }

})
export default store
