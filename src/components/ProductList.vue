<template>
<div>
 <v-btn @click="showProductForm" color="yellow" > ADD NEW PRODUCTS</v-btn>
  <v-data-table :headers="headers" :items="products" class="elevation-1">
      <template v-slot:body="{ items }">
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.product }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price}}</td>
          <td>
            <v-btn color="blue" small @click="editProduct(item, index)">
              Edit
            </v-btn>
          </td>
          <td>
            <v-btn color="red" small @click="deleteProduct(index)">
              Delete
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
 <products v-model="showForm"  @closed="showForm = false" ></products>
 <delete @closed="showDeleteDialog = false"  @deleteconfirmed ="deleteIt()" v-if="showDeleteDialog" >  </delete>
</div>
</template>

<script>
import Products from './Products.vue'
import Delete from './Delete.vue'
export default {
  components: {
    Products,
    Delete
  },
  data () {
    return {
      headers: [
        { text: 'Products', align: 'start', value: 'products' },
        { text: 'Description', value: 'description' },
        { text: 'Price', value: 'price' },
        { text: 'Edit', value: 'edit', sortable: false },
        { text: 'Delete', value: 'delete', sortable: false }
      ],
      showForm: false,
      productIndex: '',
      showDeleteDialog: false
    }
  },
  computed: {
    products () {
      return this.$store.getters['product/showData']
    }

  },
  methods: {
    showProductForm () {
      this.showForm = true
    },
    deleteProduct (index) {
      this.showDeleteDialog = true
      this.productIndex = index
    },
    deleteIt () {
      this.$store.dispatch('product/deleteProductList', this.productIndex)
      this.showDeleteDialog = false
    },
    editProduct (item, index) {
      this.$store.dispatch('product/editProductList', {
        product: item.product,
        description: item.description,
        price: item.price,
        index: index
      })
    }
  }
}
</script>
