import { createRouter, createWebHistory } from "vue-router";

const basename = process.env.NODE_ENV === "production" ? "/demo-vite-project/" : "";

export const routes = [
  {
    path: "/",
    redirect: "/views",
  },
  {
    path: "/views",
    name: "Views",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(`../views/index.vue`),
  },
];

const router = createRouter({
  history: createWebHistory(basename),
  routes,
})

export default router;
