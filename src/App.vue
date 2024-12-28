<template>
  <div id="app">
    <header>
      <h1 class="logo">Emmanuel's portfolio</h1>
      <NavBar/>
    </header>
    <router-view/>
  </div>
</template>
<script setup>
import NavBar from './components/NavBar.vue';

</script>

<style>
body{
  width: 100%;
  background-color: #1a1a1a;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.logo {
  color: #FF0000;
  padding: 10px 20px;
  white-space: nowrap;
  font-weight: bold;
  margin: 0;
}

nav {
  padding: 15px;
}

nav a {
  margin: 0 15px;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 10px;
  }

  .logo {
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
  }

  nav {
    width: 100%;
    padding: 10px 0;
  }

  nav a {
    margin: 5px;
    display: block;
  }
}
</style>