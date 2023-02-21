import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { createRouter, createWebHistory } from "vue-router";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './index.css'

declare global {
  interface Window {
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean;
    // 子应用mount函数
    __WUJIE_MOUNT: () => void;
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => void;
    // 子应用无界实例
    __WUJIE: { mount: () => void };
  }
}

if (window.__POWERED_BY_WUJIE__) {
  let instance: any;
  window.__WUJIE_MOUNT = () => {
    instance = createApp(App)
      .use(ElementPlus)
      .use(router);
    instance.mount("#app");
  };
  window.__WUJIE_UNMOUNT = () => {
    console.log('vite, __WUJIE_UNMOUNT');
    instance.unmount();
  };
  // module脚本异步加载，应用主动调用生命周期
  window.__WUJIE.mount();
} else {
  createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount("#app");
}
