<template>
  <div id="app">
    <div id="nav">
      <H2>Navigus Assigment - 1 </H2>
      <b-button class="pad" v-if="logged" variant="outline-danger" size="sm" @click.prevent="signOut()">Sign Out</b-button>
      <b-button class="pad" v-if="logged" variant="outline-primary" size="sm" @click.prevent="gotoDashBoad()"> DashBoad</b-button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import firebase from 'firebase';
export default {
  name:"app",
  computed:{
    logged(){
      return this.$store.state.user.loggedIn;
    }
  },
  methods : {
    signOut(){
      firebase.auth().signOut().then(()=>{this.$router.push("/")});
    },
    gotoDashBoad(){
      this.$router.push("/dashboard");
    }
  }
  
}
</script>>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  /* padding-bottom: 100px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.pad{
  margin-left: 5px;
  margin-right: 5px;;
}
</style>
