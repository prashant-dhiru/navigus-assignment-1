<template>
  <div class="DocView">
    <ConcurrentUsers doc=t></ConcurrentUsers>
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
    this.$socket.client.emit('addConUser',{uid : this.$store.state.user.data.uid, name: this.$store.state.user.data.displayName, doc: this.$route.params.id})
  },
  // destroyed:function(){
  //   this.$socket.client.emit('destroyUser',this.$store.state.user.data.displayName)  
  // }

}
</script>

<style scoped>
</style>
