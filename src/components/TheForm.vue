<template>
  <v-dialog v-model="showForm">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Add Todo Task
      </v-card-title>
      <v-card-text>
        <form @submit.prevent="submitForm">
          <v-text-field
            v-model="taskInput.task"
            label="Task name"
            clearable
            outlined
          >
          </v-text-field>
           <v-textarea
            v-model="taskInput.description"
            label="Description"
            outlined
          >
           </v-textarea>
            <v-select
            v-model="taskInput.assignedTo"
            :items="items"
            label="Select"
            return-object
            single-line
          ></v-select>
            <button type="enter">update</button>
        </form>
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="showForm = false"
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
    myeditdata: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      taskInput: {
        task: '',
        description: '',
        assignedTo: ''
      },
      showForm: true,
      items: ['boney', 'dijo', 'seban']
    }
  },
  watch: {
    showForm: function (val) {
      if (val === false) {
        this.$emit('closed')
      }
    }
  },
  mounted () {
    this.taskInput.task = this.myeditdata.task
    this.taskinput.assignedTo = this.myeditdata.assignedTo
    this.taskinput.description = this.myeditdata.description
  },
  methods: {
    submitForm () {
      this.$emit('submit-form', this.taskInput)
      this.showForm = false
    }
  }
}
</script>
