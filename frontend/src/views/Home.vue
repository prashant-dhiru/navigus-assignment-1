<template>
  <div class="home">
    <b-container class="bv-example-row">
    <b-row>
      <b-col lg="5" id="login">
        <h2>Login</h2><LogIn />
      </b-col>
      
      <b-col offset-lg="1" lg="6">
        <h2>Sign Up</h2><SignUp />
      </b-col>
    </b-row>
    </b-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LogIn from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'Home',
  components: {
    LogIn,
    SignUp
  }
}
</script>

<style scoped>
  .home{
    padding: 10px;
  }
</style>>
