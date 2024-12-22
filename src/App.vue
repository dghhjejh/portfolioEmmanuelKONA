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
nav {
  padding: 15px;
}
nav a {
  margin: 0 15px;
}
header{
  display: flex;
}
.logo{
  color: #FF0000;
  padding: 10px 20px;
  white-space: nowrap;
  font-weight: bold;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
  }
}

</style>
