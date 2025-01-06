<template>
  <div id="app" class="portfolio">
    <!-- Header -->
    <header class="header">
      <h1>Bem-vindo ao Meu Portfólio</h1>
      <p>Desenvolvedor | Instrutor Voluntário | Apaixonado por Tecnologia</p>
    </header>

    <!-- About Section -->
    <section class="about">
      <h2>Sobre Mim</h2>
      <p>
        Sou um desenvolvedor com experiência em Go, TypeScript, Python, PHP e Vue 3. Além disso, participo de eventos de tecnologia, crio materiais didáticos, e estou desenvolvendo projetos como o 'Smart Fidelidade', integrando API e chatbot.
      </p>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <h2>Habilidades</h2>
      <ul>
        <li>Desenvolvimento Frontend com Vue 3</li>
        <li>Backend com NestJS, Go e Python</li>
        <li>Banco de dados (MySQL, Prisma, Supabase)</li>
        <li>Web scraping e automações</li>
        <li>Documentação e refatoração de código</li>
      </ul>
    </section>

    <!-- Projects Section -->
    <section class="projects">
      <h2>Projetos Recentes</h2>
      <div class="project">
        <h3>Smart Fidelidade</h3>
        <p>
          Plataforma de fidelidade integrada com chatbot e API hospedada no Supabase. Ideal para comerciantes otimizarem a interação com clientes.
        </p>
      </div>
      <div class="project">
        <h3>Central de Filmes Sáficos</h3>
        <p>
          API simples conectada a banco de dados, com web scraping para centralizar informações sobre filmes.
        </p>
      </div>
      <div class="project">
        <h3>Tutoriais Git</h3>
        <p>
          Guia prático para Git, cobrindo cherry-pick, stash e mais, com integração ao VSCode.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <h2>Contato</h2>
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="form.name" placeholder="Seu Nome" required />
        <input type="email" v-model="form.email" placeholder="Seu Email" required />
        <textarea v-model="form.message" placeholder="Sua Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2025 Meu Portfólio | Desenvolvido com Vue 3</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    sendMessage() {
      alert(`Obrigado, ${this.form.name}! Sua mensagem foi enviada.`);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.portfolio {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0;
}

.header {
  background: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
}

.about, .skills, .projects, .contact {
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
}

.skills ul {
  list-style: none;
  padding: 0;
}

.skills li {
  margin: 5px 0;
}

.project {
  margin-bottom: 20px;
}

.contact form {
  display: flex;
  flex-direction: column;
}

.contact input, .contact textarea, .contact button {
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
}

.contact button {
  background: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

.contact button:hover {
  background: #45a049;
}

.footer {
  text-align: center;
  background: #333;
  color: white;
  padding: 10px 0;
}
</style>
