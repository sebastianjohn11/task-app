<template>
    <div>
        <h1> MAIN SEBAN </h1>
        <v-btn @click="showOrderForm" color="pink" > Add NEW ORDERS </v-btn>
        <orders-form  v-model="showForm"  @closed="showForm = false">  </orders-form>
    </div>
</template>
<script>
import OrdersForm from './OrdersForm'

export default {
  components: {
    OrdersForm
  },
  data () {
    return {
      showForm: false
    }
  },
  methods: {
    showOrderForm () {
      this.showForm = true
    }

  }
}
</script>
