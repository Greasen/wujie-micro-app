import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import WujieVue from "wujie-vue3";

const { setupApp } = WujieVue;

const app = createApp(App)

const props = {
  jump: (name) => {
    router.push({ name });
  },
};

/**
 * 配置应用，主要是设置默认配置
 * preloadApp、startApp的配置会基于这个配置做覆盖
 */
 setupApp({
  name: "vue3",
  url: "//localhost:7300/",
  props,
  alive: true
});

setupApp({
  name: "vite-1",
  url: "//localhost:7400/",
  props,
  alive: true
});

setupApp({
  name: "vite",
  url: "//localhost:7500/",
  props,
  alive: true
});

setupApp({
  name: "vite-4",
  url: "//localhost:7600/",
  props,
  alive: true
});

app.use(router)
app.use(WujieVue)
app.mount('#app')
