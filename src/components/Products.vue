<template>
<v-dialog v-model="showForm">
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
       color="red"
       @click="close" >
       close
       </v-btn>
       <v-btn
       color="blue darken-1"
       @click="submitForm" >
       submit
       </v-btn>
   </v-card-actions>
</v-card>
</v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data () {
    return {
      product: '',
      description: '',
      price: ''
    }
  },
  computed: {
    showForm: {
      get: function () {
        return this.value
      },
      set: function (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    submitForm () {
      this.$store.dispatch('submitForm', {
        product: this.product,
        description: this.description,
        price: this.price
      },
      this.close()
      )
    },
    close () {
      this.showForm = false
      this.product = ''
      this.description = ''
      this.price = ''
    }
  }
}
</script>
