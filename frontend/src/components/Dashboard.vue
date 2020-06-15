<template>
  <div class="dashboard">
    <h3>Welcome back {{this.$store.state.user.data.displayName}}!!!</h3>
    <b-container>
    <b-row align-h="center">
        <b-col md="3" v-b-tooltip.hover.left title="click me">
            <b-card  @click="docView(1)" bg-variant="dark" header="Doc 1" text-variant="white" class="text-center card">
                <b-card-text>Click on this document to view information about the concurrent user and the user last visited to this documents</b-card-text>
            </b-card>
        </b-col>
        <b-col md="3" v-b-tooltip.hover.right title="click me">
            <b-card @click="docView(2)" bg-variant="success" header="Doc 2 - Bonus Point" text-variant="white" class="text-center card">
                <b-card-text>This doc is restricted for the users with unverified email address, kindly look into your inbox to confirm you account verification</b-card-text>
            </b-card>
        </b-col>
        <b-col md="3">
            <b-card @click="addDoc" border-variant="dark" header="Add new documents" align="center">
            <b-card-text>
                <b-icon icon="file-earmark-plus"  class="h1 mb-2"></b-icon>
            </b-card-text>
            </b-card>
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name:'Dashboard',
  methods:{
      addDoc(){
        alert("Work in progress")
      },
      docView(docID){
          this.$router.push({path: `/docview/${docID}`});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
    padding: 0px;
    margin: 10px;
}
</style>
