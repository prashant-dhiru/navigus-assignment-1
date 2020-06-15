<template>
  <div class="dashboard">
    <b-container class="bv-example-row">
    <b-row align-h="center">
      <b-col cols="3">
      <b-avatar-group size="60px" class='avagrp' >
          <b-avatar v-for="user in userMap" :key="user[0]"  :variant="user[1].avaCol" :text="user[1].avtxt" v-b-tooltip.hover :title="user[1].name"></b-avatar>
      </b-avatar-group>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>
<script>


export default {
  name:'ConcurrentUser',
  data : ()=>({
    userMap : []
  }),
  created(){
    this.$socket.client.on('updatedUser',(users)=>{
      // if(doc == this.$route.params.id){
        this.userMap = users
        this.userMap.reverse();
      // }
    })
  },
  beforeDestroy(){
    console.log("destoryed components")
    this.$socket.client.emit('destroyUser',this.$store.state.user.data.uid);
  },
  destroyed(){
    this.$socket.client.off();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
