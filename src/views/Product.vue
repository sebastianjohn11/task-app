<template>
<div>
    <h1>PRODUCT LIST</h1>
    <products></products>
</div>
</template>

<script>
import Products from '../components/Products.vue'

export default {
  name: 'ProductsView',
  components: {
    Products
  }
}
</script>
