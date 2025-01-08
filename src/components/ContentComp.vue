<template>
  <section class="github-projects">
    <h2>Meus Projetos no GitHub</h2>
    <ul v-if="repos.length">
      <li v-for="repo in repos" :key="repo.id">
        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
          {{ repo.name }}
        </a>
        <p>{{ repo.description || "Sem descrição." }}</p>
      </li>
    </ul>
    <p v-else>Carregando projetos...</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      repos: [], // Armazena os repositórios do GitHub
    };
  },
  created() {
    this.fetchGitHubRepos(); // Busca os repositórios ao carregar o componente
  },
  methods: {
    async fetchGitHubRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/LaisGalvao/repos"
        );
        if (!response.ok) throw new Error("Erro ao buscar os repositórios.");
        this.repos = await response.json();
      } catch (error) {
        console.error("Erro ao buscar repositórios do GitHub:", error);
      }
    },
  },
};
</script>

<style scoped>
.github-projects {
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  background: #1e1e2f; /* Preto com tom azulado */
  border: 1px solid #000080; /* Azul escuro */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.github-projects ul {
  list-style: none;
  padding: 0;
}

.github-projects li {
  margin-bottom: 15px;
}

.github-projects a {
  color: #008000; /* Verde */
  text-decoration: none;
  font-weight: bold;
}

.github-projects a:hover {
  text-decoration: underline;
  color: #4b0082; /* Roxo */
}

.github-projects p {
  color: #c0c0c0; /* Cinza claro para texto */
}

.github-projects h2 {
  color: #fff; /* Roxo */
  text-align: center;
  border-bottom: 2px solid #008000; /* Verde */
  padding-bottom: 10px;
}
</style>
