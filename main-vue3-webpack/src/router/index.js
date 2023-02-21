import Vue from "vue";
import VueRouter from "vue-router";
import Vite from "../views/Vite.vue";
import Vite1 from "../views/vite-1.vue";
import Vite4 from "../views/vite-4.vue";
import Vue3 from "../views/Vue3.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/vite",
    name: "vite",
    component: Vite,
  },
  {
    path: "/vite-1",
    name: "vite-1",
    component: Vite1,
  },
  {
    path: "/vite-4",
    name: "vite-4",
    component: Vite4,
  },

  {
    path: "/vue3",
    name: "vue3",
    component: Vue3,
  },

  {
    path: "/",
    redirect: "/vue3",
  },
];

const router = new VueRouter({
  mode: "history",
  base: "",
  routes,
});

export default router;
