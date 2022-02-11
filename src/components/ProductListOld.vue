<template>
<li>
    <product-description v-for="product in products"
    :key="product.id"
    :product-name="product.name"
    :product-code="product.code"
    :product-size="product.size"
    :product-cost="product.cost"
    @change-product-name="changedName"
    @change-product-code="changedCode"
    @change-product-size="changedSize"
    @change-product-cost="changedCost" >
    </product-description>

    <form @submit.prevent="submitdata">
       <h1>products to list out</h1>
        <div>
            <label>product name:</label>
            <input type="text" v-model="typename">
        </div>
        <div>
            <label>product code:</label>
            <input type="text" v-model="typecode">
        </div>
        <div>
            <label>product size:</label>
            <input type="text" v-model="typedsize">
        </div>
        <div>
            <label>product cost:</label>
            <input type="text" v-model="typedcost">
        </div>
    </form>
</li>
</template>
<script>
import ProductDescriptionOld from './ProductDescriptionOld.vue'
export default {
  components: {
    'product-description': ProductDescriptionOld
  },
  data () {
    return {
      typename: '',
      typecode: '',
      typesize: '',
      typecost: '',

      products: [{
        id: '1',
        name: 'addidas',
        code: '12343',
        size: '5',
        cost: '3000'
      },
      {
        id: '2',
        name: 'nike',
        code: '124',
        size: '7',
        cost: '4000'
      },
      {
        id: '3',
        name: 'puma',
        code: '123',
        size: '8',
        cost: '2000'
      }
      ]
    }
  },
  methods: {
    changedName (value) {
      this.products.name = this.value
    },
    changedCode (value) {
      this.products.code = this.value
    },
    changedSize (value) {
      this.products.size = this.value
    },
    changedCost (value) {
      this.products.cost = this.value
    },
    submitdata () {
      const newList = {
        id: new Date().toISOString(),
        name: this.typename,
        code: this.typename,
        size: this.typesize,
        cost: this.typecost
      }
      this.products.push(newList)
    }
  }
}
</script>
