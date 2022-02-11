<template>
<form @submmit.prevent="submitData">
    <div>
        <label>Product Name</label>
        <input type="text" v-model="productName"/>
    </div>
    <div>
        <label>Product Description</label>
        <input type="text" v-model="productDescription"/>
    </div>
    <div>
        <button @click="addProduct">Add</button>
    </div>
</form>
</template>

<script>
export default {
  data () {
    return {
      productName: '',
      productDescription: ''
    }
  },
  methods: {
    addProduct () {
      this.$emit('add-info', this.enteredName, this.enteredD)
    }
  }
}
</script>
