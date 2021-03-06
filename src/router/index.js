import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StockDetail from "../views/StockDetail.vue";
import Game from "../views/Game.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/stocks/:id",
    name: "StockDetail",
    component: StockDetail
  },
  {
    path: "/game",
    name: "Game",
    component: Game
  }
];

const router = new VueRouter({
  routes
});

export default router;
