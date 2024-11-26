<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">Meu Portfólio</b-navbar-brand>
    <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>
    <b-collapse id="navbar-nav" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item href="#">Sobre</b-nav-item>
        <b-nav-item href="#">Projetos</b-nav-item>
        <b-nav-item href="#">Contato</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
/* Estilos personalizados para o Navbar */
</style>
