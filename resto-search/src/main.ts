import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase/app"
import "firebase/firestore"
import VueApexCharts from "vue-apexcharts"
import { AppRouter } from "./app-routing";
import "@firebase/auth";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(VueApexCharts)
Vue.config.productionTip = false
Vue.use(Vuetify);

const firebaseConfig = {
  apiKey: "AIzaSyCUTLP8nyW-MSu62x0eVQg498qEGdGDD9w",
  authDomain: "personal-budget-9b834.firebaseapp.com",
  databaseURL: "https://personal-budget-9b834-default-rtdb.firebaseio.com",
  projectId: "personal-budget-9b834",
  storageBucket: "personal-budget-9b834.appspot.com",
  messagingSenderId: "605659385721",
  appId: "1:605659385721:web:8d4356cc2035a9128129a8",
  measurementId: "G-SEDVRRD9BS"
};
firebase.initializeApp(firebaseConfig);
Vue.prototype.$appDB = firebase.firestore();
Vue.prototype.$appAuth = firebase.auth()

new Vue({
  
  router: AppRouter, 
  render: (h) => h(App)
}).$mount('#app')
