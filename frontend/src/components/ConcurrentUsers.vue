<template>
  <div class="dashboard">
      you are viewing document {{$route.params.id}}
  </div>
</template>

<script>
export default {
  name:'ConcurrentUser',
  props: {
    msg: String
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
