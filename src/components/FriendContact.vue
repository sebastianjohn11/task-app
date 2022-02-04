<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggledetails">Friends</button>
    <ul v-if="DetailsAreVisible">
      <li><strong>phone;</strong> {{friend.phone}} </li>
      <li><strong>email;</strong> {{friend.email}} </li>
    </ul>
  </li>

</template>

<script>
export default {
 data(){
   return{
     DetailsAreVisible:false,
     friend:{
         id:"Manuel ",
         name:"Manuel Lorenz",
         phone:" 01234 5678 991",
         email:" manuel@localhost.com",
     },
   };
 },
 methods:{
   toggledetails(){
     this.DetailsAreVisible=!this.DetailsAreVisible;
   }
 }
};
</script>
