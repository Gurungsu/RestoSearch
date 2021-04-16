import Vue from "vue";
import VueRouter,{ RouteConfig } from "vue-router";
import AppLogin from "./components/AppLogin.vue";
import Nav from "./components/Nav.vue";
import Friends from "./components/Friends.vue";


Vue.use(VueRouter);
const myRoutes: Array<RouteConfig> = [
  {
    name: "Login",
    path: "/",
    component: AppLogin,
  },
  {
    name: "Category",
    path: "/category",
    component: Nav,
  },
  {
    name: "Expenses",
    path: "/expenses",
    component: Friends,
  },
];

export const AppRouter = new VueRouter({ 
  routes: myRoutes, 
  mode: "history" 
});   
