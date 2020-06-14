<template>
  <div class="DocView">
    <ConcurrentUsers></ConcurrentUsers>
  </div>
</template>

<script>
import ConcurrentUsers from '@/components/ConcurrentUsers.vue'

export default {
  name: 'DocView',
  components: {
      ConcurrentUsers
  },
  computed:{
  },
  created:function(){  
    this.$socket.client.emit('addConUser',this.$store.state.user.data.uid)
  },

}
</script>

<style scoped>
</style>
