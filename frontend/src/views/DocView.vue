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
  }
}
</script>

<style scoped>
</style>
