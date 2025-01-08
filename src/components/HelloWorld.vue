<template>
  <div class="portfolio">
    <!-- Header -->
    <header class="header">
      <h1>Bem-vindo ao Meu Portfólio</h1>
      <p>Desenvolvedor | Instrutor Voluntário | Apaixonado por Tecnologia</p>
    </header>

    <!-- About Section -->
    <section class="about">
      <h2>Sobre Mim</h2>
      <p>
        Sou um desenvolvedor com experiência em Go, TypeScript, Python, PHP e Vue 3. Além disso, participo de eventos de
        tecnologia, crio materiais didáticos, e estou desenvolvendo projetos como o 'Smart Fidelidade', integrando API e
        chatbot.
      </p>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <h2>Habilidades</h2>
      <h3>Desenvolvimento de Software</h3>
      <ul>
        <li><strong>Back-End</strong>: Laravel (PHP), NestJS (TypeScript), Prisma ORM, Supabase, Node.js</li>
        <li><strong>Front-End</strong>: Vue.js, Vite, Criação de menus responsivos (menu hambúrguer)</li>
        <li><strong>Testes</strong>: Jest (NestJS), PHPUnit (Laravel), Testes com dados mockados e validações
          específicas (aceite de termos)</li>
        <li><strong>Scripts e Automação</strong>: Shell Scripts para ambiente de desenvolvimento, Automação com Selenium
          (Chrome for Testing), Scripts personalizados (organização de fotos, desinscrição de canais no YouTube)</li>
        <li><strong>Banco de Dados</strong>: MySQL, Bancos não relacionais (Supabase), Ferramentas: DBeaver</li>
      </ul>

      <h3>DevOps e Infraestrutura</h3>
      <ul>
        <li>Configuração e uso de Docker (Laravel + Node.js)</li>
        <li>Integração de upload com AWS S3 (buckets)</li>
        <li>Configuração de múltiplas versões de Node.js, PHP e MySQL</li>
      </ul>

      <h3>Versionamento e Git</h3>
      <ul>
        <li>Documentação e ensino sobre Git (`git stash`, `git cherry-pick`)</li>
        <li>Experiência com VSCode e CLI</li>
        <li>Estruturação e refatoração de repositórios</li>
      </ul>

      <h3>Linguagens de Programação</h3>
      <ul>
        <li><strong>Back-End</strong>: PHP, TypeScript, Python, Go</li>
        <li><strong>Front-End</strong>: JavaScript, HTML, CSS</li>
        <li><strong>Scripting</strong>: Shell Script, Automação em Python</li>
      </ul>

      <h3>Web Scraping e APIs</h3>
      <ul>
        <li>Criação de APIs (ex.: API de filmes sáficos)</li>
        <li>Web scraping integrado com banco de dados</li>
      </ul>

      <h3>Ensino e Criação de Conteúdo</h3>
      <ul>
        <li>Aulas de programação voluntárias</li>
        <li>Criação de tutoriais técnicos</li>
        <li>Publicação de conteúdo no Medium, LinkedIn e lives</li>
      </ul>

      <h3>Habilidades Organizacionais e Projetos</h3>
      <ul>
        <li>Planejamento estruturado de tarefas</li>
        <li>Gestão de projetos técnicos e publicação</li>
        <li>Desenvolvimento de plataformas integradas (ex.: Smart Fidelidade)</li>
      </ul>

      <h3>Ferramentas e Ambientes de Desenvolvimento</h3>
      <ul>
        <li>Windows 11 com WSL</li>
        <li>VSCode</li>
        <li>DBeaver para bancos de dados</li>
        <li>Integração de Python 3 e Go no ambiente de trabalho</li>
      </ul>

    </section>

    <!-- Projects Section -->
    <section class="projects">
      <h2>Projetos Recentes</h2>
      <ContentComp />
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
import ContentComp from './ContentComp.vue';

export default {
  components: { ContentComp },
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
  color: #c0c0c0;
  margin: 0;
  padding: 0;
  background-color: #121212;
}

.header {
  background: linear-gradient(135deg, #1e5128, #4b0082);
  color: white;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #001f3f;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.about,
.skills,
.projects,
.contact {
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  background: #1e1e2f;
  border: 1px solid #1e3a8a;
  border-radius: 10px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
}

.skills ul {
  list-style: circle;
  padding: 0;
}

.skills li {
  margin: 5px 0;
}

.project {
  margin-bottom: 20px;
}

.project h3 {
  color: #34d399;
}

.contact form {
  display: flex;
  flex-direction: column;
}

.contact input,
.contact textarea,
.contact button {
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #4b0082;
  border-radius: 4px;
  background: #121212;
  color: #c0c0c0;
}

.contact input::placeholder,
.contact textarea::placeholder {
  color: #808080;
}

.contact button {
  background: linear-gradient(135deg, #34d399, #4b0082);
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.contact button:hover {
  background: linear-gradient(135deg, #4b0082, #34d399);
  transform: translateY(-2px);
}

.footer {
  text-align: center;
  background: #001f3f;
  color: white;
  padding: 10px 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {

  .about,
  .skills,
  .projects,
  .contact {
    padding: 15px;
  }

  .header h1 {
    font-size: 1.8em;
  }

  .header p {
    font-size: 1.1em;
  }
}
</style>
