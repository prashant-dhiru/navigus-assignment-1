<template>
  <div>
    <b-form class="LoginForm" @submit.prevent="onSubmit">
        <!-- email -->
        <b-form-group
            id="email-group"
            class="left-txt"
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
            class="left-txt"
            label-cols-sm="2"
            label-cols-lg="2"
            label="Password"
            label-for="pass"
        >
            <b-form-input id="pass" type="password" v-model="form.password" required></b-form-input>
        </b-form-group>
        <b-button class="button" type="submit" variant="primary">Log In</b-button> 
        <b-button class="button" type="reset" variant="outline-danger" @click.prevent="onResetPass()">Reset Password</b-button>
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
        .then((user) =>{
            console.log(user);
            this.$router.push('dashboard');
        })
        .catch(err =>{
            alert(err.message);
            console.log(err);
        });
    }, 
    onResetPass(){
        // alert(JSON.stringify(this.form))
        firebase.auth().sendPasswordResetEmail(this.form.email)
        .then(() =>{
            alert("Reset Email Sent, Please cheack your Inbox");
        })
        .catch(err =>{
            alert(err.message);
            console.log(err);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-txt{
    text-align: start;
}
.LoginForm{
    text-align: center;
}
.button{
    margin-left: 5px;
    margin-right: 5px;
}
</style>
