<template>
  <v-app>  
<div id="app">
  <v-app>
    <v-content>
      <v-container> 
        <v-app-bar app color="#6495ED" height=90px>
          <v-toolbar-title>Resto Search </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn v-if="userLoggedIn()" @click="doLogout" color=red>LogOut </v-btn>
          <v-btn v-else-if="doLogout" @click="userLoggedIn()" color=green >SignUp Below</v-btn>
        </v-app-bar>
      </v-container>
      <router-view></router-view>
    </v-content>
  </v-app>
</div>
   
    <v-tab> 
    <v-btn v-if="userLoggedIn()" @click="doLogout">SignOut</v-btn>
  </v-tab>
    
  </v-app>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import AppLogin from "./components/AppLogin.vue";
import Nav from "./components/Nav.vue";
import { FirebaseFirestore } from "@firebase/firestore-types";
import { FirebaseAuth } from "@firebase/auth-types";


@Component({
  components: {
  Nav,
    AppLogin,
  },
})
export default class App extends Vue {
  readonly $appDB!: FirebaseFirestore;
  readonly $appAuth!: FirebaseAuth;

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
.app {
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
.v-container{
  padding: auto;

}

#app color{
  color: red;
}
</style>