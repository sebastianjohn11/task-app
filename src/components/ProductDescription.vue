<template>
  <div>
    <input type="text" v-model="product.name">
    <input type="text" v-model="product.description">
    <button @click="updateProduct()">Update</button>
  </div>
</template>
<script>
export default {
  name: 'ProductDescription',
  props: {
    product: Object
  },
  methods: {
    updateProduct () {
      this.$emit('update-product-list', this.product)
    }
  }
}
</script>
