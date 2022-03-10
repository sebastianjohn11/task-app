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
      price: '',
      id: ' ',
      index: '',
      edit: false
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
    },
    items () {
      return this.$store.getters['product/showEdits'] // geters does not exist on type
    }
  },
  watch: {
    items: function (newValue) {
      if (Object.keys(newValue).length !== 0) {
        this.product = newValue.product
        this.description = newValue.description
        this.price = newValue.price
        this.edit = true
        this.index = newValue.index
        this.showForm = true
      }
    }
  },
  methods: {
    submitForm () {
      if (this.edit === false) {
        this.$store.dispatch('product/submitForm', {
          product: this.product,
          description: this.description,
          price: this.price
        })
        this.close()
      } else {
        this.$store.dispatch('product/submitEdit', {
          product: this.product,
          description: this.description,
          price: this.price,
          index: this.index
        })
        this.close()
      }
    },
    close () {
      this.$store.dispatch('product/clearItems',
        this.showForm = false,
        this.product = '',
        this.description = '',
        this.price = ''
      )
    }
  }
}
</script>
