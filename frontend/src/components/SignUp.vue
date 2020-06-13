<template>
  <div>
    <b-form class="SignupForm">
        <!-- name -->
        <b-form-group
            class="left-txt"
            id="name-group"
            label-cols-sm="2"
            label-cols-lg="2"
            label="Name"
            label-for="name"
        >
            <b-form-input id="name" v-model="form.name" required></b-form-input>
        </b-form-group>
        <!-- email -->
        <b-form-group
            class="left-txt"
            id="email-group"
            label-cols-sm="2"
            label-cols-lg="2"
            label="E-mail"
            label-for="email"
        >
            <b-form-input id="eamil" type="email" v-model="form.email" required></b-form-input>
        </b-form-group>
        <!-- password -->
        <b-form-group
            class="left-txt"
            id="pass-group"
            label-cols-sm="2"
            label-cols-lg="2"
            label="Password"
            label-for="pass"
            description="password should be atlest 6 characters"
        >
            <b-form-input id="password" type="password" v-model="form.password" required></b-form-input>
        </b-form-group>
        <b-button id="button" type="submit" variant="primary" @click.stop.prevent="onSubmit()">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'SignUp',
  data(){
      return {
          form:{
              name:'',
              email:'',
              password:'',
          }
      }
  },
  methods:{
      onSubmit(){
        // alert(JSON.stringify(this.form));
        firebase.auth().createUserWithEmailAndPassword(this.form.email.toString().trim(),this.form.password)
        .then(data =>{
            data.user.updateProfile({displayName:this.form.name}).then(()=>{this.$router.push('dashboard');});
            data.user.sendEmailVerification();
            console.log(data);
        }).catch(err => {
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
.SignupForm{
    text-align: center;
}
</style>
