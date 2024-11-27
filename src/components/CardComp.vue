<template>
    <b-card class="mb-4" :title="title">
      <b-card-text>{{ content }}</b-card-text>
      <b-button variant="primary" @click="handleClick">Ver Mais</b-button>
    </b-card>
  </template>
  
  <script>
  export default {
    name: 'CardComp',
    props: {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
    },
    methods: {
      handleClick() {
        this.$router.push({ name: 'projects' }); // Exemplo de navegação
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados para o Card */
  </style>
  