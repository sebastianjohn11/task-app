<template>
    <div>
       <button @click="addList"></button><!--button to display dialoge input texts!-->
        <dialog open v-if="AddList==true">
            <form @submit.prevent="submitForm">
                <div>
                <label for="task">Task</label>
                <input type="text" id="task" v-model="gotTask"/>
                </div>
                <label for ="description">description</label>
                <input textarea="text" id="description"  v-model="gotDescription"/>
                <div>
                <label for="assiginTo">Assigin to</label>
                <input type= "text" id="assiginTo" row="3"  v-model="gotAssiginTo"/>
                </div>
                <button type="enter">update</button>
            </form>
        </dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      gotTask: '',
      gotDescription: '',
      gotAssiginTo: ' ',
      addList: true
    }
  },
  methods: {
    submitForm () {
      this.$emit('submit-form', this.gotTask, this.gotDescription, this.gotAssiginTo)
    }
  }
}
</script>
