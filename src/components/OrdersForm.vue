<template>
<v-dialog v-model="showForm">
    <v-card>
   <v-card-title class="text-h5 grey lighten-2">
    Add Orders
   </v-card-title>
   <v-card-text>
       <form @submit.prevent="submitOrderForm">
        <v-text-field
        v-model="order"
        label="order"
        clearable
        outlined >
        </v-text-field>
        <v-textarea
        v-model="description"
        label="order Description"
        outlined >
        </v-textarea>
         <v-text-field
        v-model="price" type="number"
        label="Order Price in INR"
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
       @click="submitOrderForm" >
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
      order: '',
      description: '',
      price: ''
    }
  }, // data end bracket
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
    submitOrderForm () {
      this.$store.dispatch('orderFormSubmit', {
        order: this.order,
        description: this.description,
        price: this.price
      })
      this.close()
    },
    close () {
      this.showForm = false
    }
  }// methods end bracket
}
</script>
