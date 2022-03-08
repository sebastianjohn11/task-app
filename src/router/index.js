import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProductListOld from '../components/ProductListOld.vue'
import Todo from '../views/Todo.vue'
import Products from './components/Products.vue'
import Orders from './components/orders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Product',
    component: Products
  },
  {
    path: '/orders',
    name: 'order',
    component: Orders
  },
  {
    path: '/products-old',
    name: 'ProductOld',
    component: ProductListOld
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  }
]

const router = new VueRouter({
  routes
})

export default router
