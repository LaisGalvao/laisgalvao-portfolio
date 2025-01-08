<template>
  <section>
    <h2>Meus Projetos no GitHub</h2>
    <b-card-group columns v-if="repos.length">
      <b-card class="github-projects" v-for="repo in repos" :key="repo.id">
        <template #header>
          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
            {{ repo.name }}
          </a>
        </template>
        <b-card-text>
          {{ repo.description || "Sem descrição." }}
        </b-card-text>
      </b-card>
    </b-card-group>

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
  margin: 20px auto;
  background: #1e1e2f;
  /* Preto com tom azulado */
  border-radius: 12px; /* Aumentei o border-radius para um arredondamento mais suave */
  box-shadow: 0 6px 12px rgba(40, 69, 19, 0.258), 0 0 25px rgba(75, 0, 130, 0.3); /* Sombra suave e um efeito de brilho verde */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.github-projects:hover {
  transform: translateY(-5px); /* Efeito de elevação */
  box-shadow: 0 6px 12px rgba(62, 107, 30, 0.564), 0 0 25px rgba(75, 0, 130, 0.3); /* Aumenta a sombra e o brilho ao passar o mouse */
}

.github-projects a {
  color: #fff; /* Cor branca original */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease, background 0.3s ease; /* Transição suave para a cor do texto */
}

.github-projects a:hover {
  color: transparent; /* Torna o texto transparente para aplicar o gradiente */
  background: linear-gradient(45deg, #00FF00, #8A2BE2); /* Gradiente de verde claro para roxo claro */
  -webkit-background-clip: text; /* Faz o gradiente se aplicar no texto */
  background-clip: text; /* Para navegadores que suportam */
  text-decoration: underline;
}

.github-projects p {
  color: #c0c0c0; /* Cinza claro para o texto */
}

.github-projects h2 {
  color: #fff; /* Roxo */
  text-align: center;
  border-bottom: 2px solid #008000; /* Verde */
  padding-bottom: 10px;
}

</style>
