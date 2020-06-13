import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as firebase from "firebase";
const configOptions = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};
firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser",user);
});


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false;


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
