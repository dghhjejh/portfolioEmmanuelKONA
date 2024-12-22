<template>
    <nav :class="{ 'nav-active': isMenuOpen }">
      <!-- Burger Menu Button -->
      <div class="burger-menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Navigation Items -->
      <div class="nav-items" :class="{ 'show': isMenuOpen }">
        <div class="menu-item">
          <router-link to="/">Nom & Introduction</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/MyExperiences">Experiences</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/MyProjects">Projets</router-link>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>
<style scoped>
nav {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: black;
  position: relative;
}

.nav-items {
  display: flex;
  width: 100%;
}

.menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  transition: 0.4s;
  white-space: nowrap;
}

.menu-item.active,
.menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}

.menu-item a {
  color: inherit;
  text-decoration: none;
}

.burger-menu {
  display: none;
  cursor: pointer;
  padding: 15px;
  z-index: 2;
}

.burger-menu span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  nav {
    padding: 0;
  }

  .burger-menu {
    display: block;
    position: relative;
  }

  .nav-items {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: black;
    z-index: 1;
  }

  .nav-items.show {
    display: flex;
  }

  .menu-item {
    width: 100%;
    border-bottom: 1px solid #333;
    padding: 15px 20px;
  }

  /* Burger menu animation when active */
  .nav-active .burger-menu span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }

  .nav-active .burger-menu span:nth-child(2) {
    opacity: 0;
  }

  .nav-active .burger-menu span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -6px);
  }
}
</style>