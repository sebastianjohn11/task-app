/* eslint-disable no-sequences */
<template>
  <v-dialog v-model="showForm">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Add Todo Task
      </v-card-title>
      <v-card-text>
        <form @submit.prevent="submitForm">
          <v-text-field
            v-model="task"
            label="Task"
            clearable
            outlined
          >
          </v-text-field>
           <v-textarea
            v-model="description"
            label="Description"
            outlined
          >
           </v-textarea>
            <v-select
            v-model="assignedTo"
            :items="assignees"
            label="Select"
            return-object
            single-line
          ></v-select>
        </form>
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="close"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="submitForm"
          >
            Save
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
      task: '',
      description: '',
      assignedTo: '',
      id: '',
      index: '',
      edit: false,
      assignees: ['dijo', 'sebastaian', 'boney']
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
      return this.$store.getters.showEdits //
    }
  },
  watch: { // watchers
    items: function (newValue) {
      if (Object.keys(newValue).length !== 0) {
        this.task = newValue.task
        this.description = newValue.task
        this.assignedTo = newValue.assignedTo
        this.edit = true
        this.index = newValue.index
        this.showForm = true
      }
    }

  },

  methods: {
    submitForm () {
      if (this.edit === false) {
        this.$store.dispatch('submitForm', {
          task: this.task,
          description: this.description,
          assignedTo: this.assignedTo
        })
        this.close()
      } else {
        this.$store.dispatch('submitEdit', {
          task: this.task,
          description: this.description,
          assignedTo: this.assignedTo,
          index: this.index
        })
        this.close()
      }
    },
    close () {
      this.$store.dispatch('clearItems')
      this.showForm = false
      this.task = ''
      this.description = ''
      this.assignedTo = ''
      this.edit = false
      this.index = ''
    }
  }
}
</script>
