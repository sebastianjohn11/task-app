<template>
<div>
    <h1>ORDER LIST</h1>
    <orders-list></orders-list>
</div>
</template>

<script>
import OrdersList from '../components/ProductList.vue'

export default {
  name: 'OrdersView',
  components: {
    OrdersList
  }
}
</script>
