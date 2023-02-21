import { createRouter, createWebHistory } from "vue-router";

const basename = process.env.NODE_ENV === "production" ? "/demo-main/" : "";

const routes = [
  {
    path: "/",
    redirect: "/vue3",
  },
  {
    path: "/vue3",
    name: "vue3",
    component: () => import(`../views/vue3.vue`),
  },
  {
    path: "/vite",
    name: "vite",
    component: () => import(`../views/Vite.vue`),
  },
  {
    path: "/vite-1",
    name: "vite-1",
    component: () => import(`../views/vite-1.vue`),
  },
  {
    path: "/vite-4",
    name: "vite-4",
    component: () => import(`../views/vite-4.vue`),
  },


];

const router = createRouter({
  history: createWebHistory(basename),
  routes,
})

export default router;
