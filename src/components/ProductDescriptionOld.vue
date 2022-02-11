<template>
    <div>
        <form >
            <hi>product:{{productName}}</hi>
            <input type="text" v-model="newName">
            <button @click="changeProductName()">Click to add product</button>
        </form>
        <form>
            <hi>product:{{productCode}}</hi>
            <input type="text" v-model="newCode">
            <button @click="changeProductCode()">Click to add product code</button>
        </form>
        <form>
            <hi>product:{{productSize}}</hi>
            <input type="text" v-model="newSize">
            <button @click="changeProductSize()">Click to add product size</button>
        </form>
        <form>
            <hi>product:{{productCost}}</hi>
            <input type="text" v-model="newCost">
            <button @click="changeProductCost()">Click to add product cost</button>
        </form>

    </div>
</template>
<script>
export default {
  props: {
    productName: String,
    productCode: String,
    productSize: String,
    productCost: String
  },
  data () {
    return {
      newName: '',
      newCode: '',
      newSize: '',
      newCost: ''
    }
  },
  methods: {
    changeProductName () {
      this.$emit('change-product-name', this.newName)
    },
    changeProductCode () {
      this.$emit('change-product-code', this.newCode)
    },
    changeProductsize () {
      this.$emit('change-product-size', this.newSize)
    },
    changeProductCost () {
      this.$emit('change-product-cost', this.newCost)
    }
  }
}
</script>
