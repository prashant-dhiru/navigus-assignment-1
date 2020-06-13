<template>
  <div>
    <b-form @submit.prevent="onSubmit" class="LoginForm">
        <!-- email -->
        <b-form-group
            id="email-group"
            label-cols-sm="2"
            label-cols-lg="2"
            label="E-mail"
            label-for="email"
        >
            <b-form-input id="email" type="email" v-model="form.email" required></b-form-input>
        </b-form-group>
        <!-- password -->
        <b-form-group
            id="pass-group"
            label-cols-sm="2"
            label-cols-lg="2"
            label="Password"
            label-for="pass"
        >
            <b-form-input id="pass" type="password" v-model="form.password" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'LogIn',
  data(){
      return {
          form:{
              email:'',
              password:'',
          }
      }
  },
  methods:{
    onSubmit(){
        // alert(JSON.stringify(this.form))
        firebase.auth().signInWithEmailAndPassword(this.form.email,this.form.password)
        .then(data =>{
            console.log(data);
        })
        .catch(err =>{
            console.log(err);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pass-group{
    text-align: start;
}
.LoginForm{
    text-align: center;
}
</style>
