<template>
    <div>
        <v-btn @click="showOrderForm" color="pink" > Add NEW ORDERS </v-btn>
        <v-data-table :headers="headers" :items="orders" class="elevation-1">
      <template v-slot:body="{ items }">
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.order }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price}}</td>
          <td>
            <v-btn color="blue" small @click="editOrderList(item, index)">
              Edit
            </v-btn>
          </td>
          <td>
            <v-btn color="red" small @click="deleteOrderList(index)">
              Delete
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
        <orders-form  v-model="showForm"  @closed="showForm = false">  </orders-form>
        <delete @closed="showDeleteDialog = false"  @deleteconfirmed ="deleteOrderConfirmed()" v-if="showDeleteDialog"></delete>
    </div>
</template>
<script>
import OrdersForm from './OrdersForm'
import Delete from './Delete.vue'

export default {
  components: {
    OrdersForm,
    Delete
  },
  data () {
    return {
      headers: [
        { text: 'orders', align: 'start', value: 'orders' },
        { text: 'Description', value: 'description' },
        { text: 'Price', value: 'price' },
        { text: 'Edit', value: 'edit', sortable: false },
        { text: 'Delete', value: 'delete', sortable: false }
      ],
      showForm: false,
      showDeleteDialog: false,
      orderIndex: ''
    }
  },
  computed: {
    orders () {
      return this.$store.getters.getOrders
    }
  },
  methods: {
    showOrderForm () {
      this.showForm = true
    },
    deleteOrderList (index) {
      this.showDeleteDialog = true
      this.orderIndex = index
    },
    deleteOrderConfirmed () {
      this.$store.dispatch('deleteList', this.orderIndex)
      this.showDeleteDialog = false
    },
    editOrderList (item, index) {
      this.$store.dispatch('editList', {
        order: item.order,
        description: item.description,
        price: item.price,
        index: index
      })
    }
  }
}
</script>
