import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  server: {
    cors: true,
    host: '0.0.0.0',
    port: 7600
  },
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: '@formily/element-plus',
          libDirectory: 'esm',
          style(name) {
            return `@formily/element-plus/esm/${name}/style.js`
          },
        },
      ],
    }),
  ],
});
