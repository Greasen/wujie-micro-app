# wujie（无界）

无界微前端是一款基于 Web Components + iframe 微前端框架，具备成本低、速度快、原生隔离、功能强等一系列优点。

## 文档

动机：[动机](https://zhuanlan.zhihu.com/p/551206945)

文档详见：[文档](https://wujie-micro.github.io/doc/)

## 安装

- 安装

```bash
pnpm install
```

## 运行所有应用

- 运行

```bash
pnpm run dev
```
# Vue 3 + TypeScript + Vite

子应用 package 中的 `vite`, 版本需要锁定，否则在子应用切换的过程中，会出现样式错乱
子应用 package 中的 `element-plus` 版本需要锁定, 否则在子应用切换的过程中，会出现 `TypeError: Cannot read properties of null` 相关bug

### 模板规范

通常是 `script` 在 `template ` 前面

```vue
<script lang="ts" setup></script>
<template></template>
<style></style>

```
