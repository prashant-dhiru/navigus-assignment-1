<template>
  <div class="dashboard">
      <div v-for="item in userMap" :key="item.avtxt">
        <b-avatar v-b-popover.hover tem.avtxt>{{item.avtxt}} </b-avatar>
      </div>
      
  </div>
</template>

<script>


export default {
  name:'ConcurrentUser',
  data : ()=>({
    userMap:Map
  }),
  created(){
    this.$socket.client.on('updatedUser',(doc,users)=>{
      if(doc == this.$route.params.id)
      this.userMap = users
    
      console.log(this.userMap);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
