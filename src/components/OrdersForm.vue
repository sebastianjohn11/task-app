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
      price: '',
      edit: false
    }
  }, // data en
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
      console.log('working 1')
      return this.$store.getters.getEditedOrder // geters does not exist on type
    }
  },
  watch: {
    items: function (newValue) {
      if (Object.keys(newValue).length !== 0) {
        this.order = newValue.order
        this.description = newValue.description
        this.price = newValue.price
        this.edit = true
        this.index = newValue.index
        this.showForm = true
      }
    }
  },

  methods: {
    submitOrderForm () {
      if (this.edit === false) {
        this.$store.dispatch('orderFormSubmit', {
          order: this.order,
          description: this.description,
          price: this.price
        })
        this.close()
      } else {
        this.$store.dispatch('submitEditForm', {
          order: this.order,
          description: this.description,
          price: this.price,
          index: this.index
        })
        this.close()
        console.log('working 2')
      }
    },
    close () {
      this.$store.dispatch('clearItems',
        this.showForm = false,
        this.order = '',
        this.description = '',
        this.price = '',
        this.edit = false
      )
    }
  }// methods end
}
</script>
