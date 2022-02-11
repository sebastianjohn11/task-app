<template>
  <div>
    <button>Add Product</button>
    <div v-for="(product, index) in productList" :key="index">
      <product-description :product="product" @update-product-list="updateProductList"/>
    </div>
  </div>
</template>

<script>
import ProductDescription from './ProductDescription.vue'

export default {
  name: 'ProductList',
  components: {
    ProductDescription
  },
  data () {
    return {
      productList: [
        {
          id: 1,
          name: 'Apple iphone',
          description: 'phone'
        },
        {
          id: 2,
          name: 'Samsung Galaxy',
          description: 'mobile'
        },
        {
          id: 3,
          name: 'Nokia x230',
          description: 'supoer mobile'
        }
      ]
    }
  },
  methods: {
    updateProductList (product) {
      this.productList.push(product)
    }
  }
}
</script>
