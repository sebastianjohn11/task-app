<template>
  <div>
      <div>
        <h1>Product Name: {{ productName }}</h1>
        <input type="text" v-model="newName">
        <button @click="changeFriendName()">Click Me</button>
      </div>
      <div>
        <h1>Product description: {{productDescription}}</h1>
        <input type="text" v-model="newD">
        <button @click="changeFriendDesc()">Click this</button>
      </div>
  </div>
</template>
<script>
export default {
  name: 'productName',
  props: {
    productid: {
      type: String,
      default: ''
    },
    productName: {
      type: String,
      default: ''
    },
    productDescription: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      newName: '',
      newD: ''
    }
  },
  methods: {
    changeFriendName () {
      this.$emit('change-name', this.newName)
    },
    changeFriendDesc () {
      this.$emit('change-desc', this.newD)
    }
  }
}
</script>
