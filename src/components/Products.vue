<template>
<v-card>
   <v-card-title class="text-h5 grey lighten-2">
    Add Products
   </v-card-title>
   <v-card-text>
       <form @submit.prevent="submitForm">
        <v-text-field
        v-model="product"
        label="product"
        clearable
        outlined >
        </v-text-field>
        <v-textarea
        v-model="description"
        label="Product Description"
        outlined >
        </v-textarea>
         <v-text-field
        v-model="price" type="number"
        label="product Price in INR"
        clearable
        outlined >
        </v-text-field>
        </form>
   </v-card-text>
   <v-card-actions>
       <v-spacer></v-spacer>
       <v-btn
       color="blue darken-1"
       @click="submitForm" >
       submit
       </v-btn>
   </v-card-actions>
</v-card>
</template>

<script>
export default {
  data () {
    return {
      product: '',
      description: '',
      price: ''

    }
  },
  methods: {
    submitForm () {
      this.$store.dispatch('submitForm', {
        product: this.product,
        description: this.description,
        price: this.price
      })
    }

  }
}
</script>
