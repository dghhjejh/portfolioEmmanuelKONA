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
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 0 20px;
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