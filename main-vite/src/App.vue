<script setup name="app" lang="ts"></script>

<template>
  <div class="nav">
    <router-link to="/vue3"> vue3 </router-link>
    <router-link to="/vite">vite</router-link>
    <router-link to="/vite-1">vite-1</router-link>
    <router-link to="/vite-4">vite-project</router-link>
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<style>

.nav {
  background-color: white;
  flex-shrink: 0;
  font-size: 20px;
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  padding: 30px 0;
  width: 340px;
  height: 100vh;
  box-sizing: border-box;
  box-shadow: 3px 0px 9px 2px #e6e6e6;
  transition: transform 0.1s linear;
  transform: translate(0, 0);
  overflow: auto;
}

.nav .menu-icon {
  display: none;
  border: none;
  background: rgb(95, 212, 241) !important;
}

.main-icon {
  padding: 0 10px;
  transition: transform 0.2s ease-in;
}

.main-icon.active {
  transform: rotate(180deg);
}

.sub-menu {
  font-size: 16px;
  padding: 0 10px;
}

@media screen and (max-width: 768px) {
  .nav {
    position: absolute;
    box-shadow: none;
    transform: translate(-100%, 0);
  }

  .nav.active {
    transform: translate(0, 0);
    box-shadow: 3px 0px 9px 2px #e6e6e6;
  }
  .nav .menu-icon {
    position: absolute;
    left: 100%;
    display: block;
  }
}

.wujie_iframe {
  width: 100%;
  height: 100%;
}

iframe {
  border: none;
}

h3 {
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
}

.content {
  flex: 1;
  height: 100vh;
  overflow: hidden scroll;
  width: 1px;
}

.nav a {
  display: flex;
  align-items: center;
  padding: 10px 30px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.2s linear;
}

.nav a:hover {
  color: rgb(95, 212, 241);
}

.alive {
  display: inline-block;
  white-space: nowrap;
  background-color: rgb(95, 212, 241);
  border-radius: 8px;
  margin-left: 4px;
  font-size: 10px;
  vertical-align: top;
  padding: 1px 4px;
  color: white;
}

.nav a.router-link-active {
  color: rgb(95, 212, 241);
  background: rgba(0, 0, 0, 0.05);
}
</style>
