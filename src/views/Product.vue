<template>
<div>
    <h1>PRODUCT LIST</h1>
    <product-list></product-list>
</div>
</template>

<script>
import ProductList from '../components/ProductList.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductList
  }
}
</script>
