<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" class="form">
        <!-- email -->
        <b-form-group
            id="email-group"
            label-cols-sm="2"
            label-cols-lg="2"
            label="E-mail"
            label-for="email"
        >
            <b-form-input id="eamil" type="email" v-model="form.eamil" required></b-form-input>
        </b-form-group>
        <!-- password -->
        <b-form-group
            id="pass-group"
            label-cols-sm="2"
            label-cols-lg="2"
            label="Password"
            label-for="pass"
            description="password should be atlest 6 characters"
        >
            <b-form-input id="pass" v-model="form.password" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Log In',
  data(){
      return {
          form:{
              email:'',
              password:'',
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{
    text-align: center;
}
</style>
