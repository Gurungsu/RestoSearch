<template>




  <div id="app">
 
    <button v-if="userLoggedIn()" @click="doLogout">SignOut</button>
    <router-view></router-view>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Friends from "./components/Nav.vue";
import Nav from "./components/Nav.vue";
import AppLogin from "./components/AppLogin.vue";
import { FirebaseFirestore } from "@firebase/firestore-types";
import { FirebaseAuth } from "@firebase/auth-types";


@Component({
  components: {
    Friends,
    Nav,
    AppLogin,
  },
})
export default class App extends Vue {
  readonly $appDB!: FirebaseFirestore;
  readonly $appAuth!: FirebaseAuth;
readonly $router:any;
  // This function is automatically called when
  // the App component is added to the DOM tree
  mounted(): void {
    //
  }
  doLogout(): void {
    this.$appAuth.signOut();
    this.$router.back(); // Go backward in the "history stack"
  }
  userLoggedIn(): boolean {
    return this.$appAuth.currentUser?.uid !== undefined;
  }
}
</script>

<style>
button{
  margin: 10px;
  margin-left: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #363611;
  margin-top: 60px;
}
#top {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "input summary" "donut expenses";
}
</style>