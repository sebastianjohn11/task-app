<template>
<div>
    <v-dialog
        v-model="dialog"
             persistent
              max-width="290">
              <v-card>
              <v-card-title class="text-h5">
                Do you want to detele this ?
              </v-card-title>
              <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
              color="green"
              @click="dialog=false">
              Cancel
              </v-btn>
              <v-btn
              color="red"
              @click="$emit('deleteconfirmed')">
              Delete
              </v-btn>
             </v-card-actions>
         </v-card>
    </v-dialog>
</div>
</template>
<script>
export default {
  data () {
    return {
      dialog: true
    }
  },
  watch: {
    dialog: function (newval, oldval) {
      if (newval === false) {
        this.$emit('closed')
      }
    }
  }

}
</script>
