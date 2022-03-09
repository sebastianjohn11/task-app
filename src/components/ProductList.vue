<template>
<div>
 <v-btn @click="showProductForm" color="yellow" > ADD NEW PRODUCTS</v-btn>
 <products v-model="showForm"  ></products>
</div>
</template>

<script>
import Products from './Products.vue'
export default {
  components: {
    Products
  },
  data () {
    return {
      showForm: false
    }
  },
  methods: {
    showProductForm () {
      this.showForm = true
    }
  }

}
</script>
