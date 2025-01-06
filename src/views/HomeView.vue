<template>
  <div class="home">
    <ContentComp 
      header="Página Inicial" 
      bodyText="Aqui você pode ver uma introdução ao portfólio e projetos."
    />
    <CardComp 
      title="Projeto 1"
      content="Descrição do projeto 1"
    />
    <CardComp 
      title="Projeto 2"
      content="Descrição do projeto 2"
    />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
   HelloWorld
  }
};
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
