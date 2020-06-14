<template>
  <div class="dashboard">
      you are viewing document {{$route.params.id}}
  </div>
</template>

<script>


export default {
  name:'ConcurrentUser',
  data : ()=>({
    user: []
  }),
  created(){
    this.$socket.client.on('addConUser',(data)=>{
      console.log(data);
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
