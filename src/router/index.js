import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProductList from '../components/ProductList.vue'
import ProductListOld from '../components/ProductListOld.vue'

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
    component: ProductList
  },
  {
    path: '/products-old',
    name: 'ProductOld',
    component: ProductListOld
  }
]

const router = new VueRouter({
  routes
})

export default router
