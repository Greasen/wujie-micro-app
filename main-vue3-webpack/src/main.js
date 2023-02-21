import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import WujieVue from "wujie-vue2";

const { setupApp } = WujieVue;
Vue.use(WujieVue)

Vue.config.productionTip = false;

/**
 * 配置应用，主要是设置默认配置
 * preloadApp、startApp的配置会基于这个配置做覆盖
 */
setupApp({
  name: "vue3",
  url: "//localhost:7300/",
});

setupApp({
  name: "vite-1",
  url: "//localhost:7400/",
  alive: true
});

setupApp({
  name: "vite",
  url: "//localhost:7500/",
});

setupApp({
  name: "vite-4",
  url: "//localhost:7600/",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
