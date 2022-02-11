<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <friend-contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import FriendContact from '@/components/FriendContact.vue'

export default {
  name: 'Home',
  components: {
    FriendContact
  }
}
</script>
