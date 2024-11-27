<template>
    <div class="content">
      <h2>{{ header }}</h2>
      <p>{{ bodyText }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContentComp',
    props: {
      header: {
        type: String,
        default: 'Bem-vindo!'
      },
      bodyText: {
        type: String,
        default: 'Aqui está o conteúdo da sua página.'
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados para o conteúdo */
  .content {
    padding: 20px;
  }
  </style>
  