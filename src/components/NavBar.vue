<template>
    <nav>
        <div class="menu-item">
        <router-link to="/">Name & Introduction</router-link>
        </div>
        <div class="menu-item">
        <router-link to="/MyExperiences">Experiences</router-link>
        </div>
        <div class="menu-item">
        <router-link to="/MyProjects">Projects</router-link>
        </div>
    </nav>
</template>

<script setup>
</script>
<style>
nav{
    display:flex;
    align-items:center;
    width: 100%;
    background-color: black;
}
nav .menu-item{
    color: #FFF;
    padding: 10px 20px;
    position:relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
    white-space: nowrap;
}
nav .menu-item.active,
nav .menu-item:hover{
    background-color: #444;
    border-bottom-color:#FF5858;
}
nav .menu-item a{
    color: inherit;
    text-decoration: none;
}
@media (max-width: 768px) {
  nav {
    width: 100%;
  }
  
  .menu-item {
    flex: 1;
  }
}
</style>