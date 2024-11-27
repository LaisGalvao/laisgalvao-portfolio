<template>
  <div id="app">
    <NavbarComp />
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';

export default {
  name: 'App',
  components: {
    NavbarComp
  }
};
</script>

<style>
/* Estilos globais */
</style>
