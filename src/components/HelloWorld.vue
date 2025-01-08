<template>
  <div class="portfolio">
    <!-- Header -->
    <header class="header">
      <h1>Bem-vindo ao Meu Portfólio</h1>
      <p>Desenvolvedor | Instrutor Voluntário | Apaixonado por Tecnologia</p>
    </header>

    <!-- About Section -->
    <section class="sections">
      <h2>Sobre Mim</h2>
      <p>
        Sou um desenvolvedor com experiência em Go, TypeScript, Python, PHP e Vue 3. Além disso, participo de eventos de
        tecnologia, crio materiais didáticos, e estou desenvolvendo projetos como o 'Smart Fidelidade', integrando API e
        chatbot.
      </p>
    </section>

    <!-- Skills Section -->
    <section class="sections">
      <h2>Habilidades</h2>
      <div v-for="(skillCategory, index) in skills" :key="index">
        <h3>{{ skillCategory.title }}</h3>
        <ul>
          <li v-for="(skill, idx) in skillCategory.items" :key="idx">{{ skill }}</li>
        </ul>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="sections">
      <ContentComp />
    </section>

    <!-- Contact Section -->
    <section class="sections contact">
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
      },
      skills: [
        {
          title: 'Desenvolvimento de Software',
          items: [
            'Back-End: Laravel (PHP), NestJS (TypeScript), Prisma ORM, Supabase, Node.js',
            'Front-End: Vue.js, Vite, Criação de menus responsivos (menu hambúrguer)',
            'Testes: Jest (NestJS), PHPUnit (Laravel), Testes com dados mockados e validações específicas (aceite de termos)',
            'Scripts e Automação: Shell Scripts para ambiente de desenvolvimento, Automação com Selenium (Chrome for Testing), Scripts personalizados (organização de fotos, desinscrição de canais no YouTube)',
            'Banco de Dados: MySQL, Bancos não relacionais (Supabase), Ferramentas: DBeaver'
          ]
        },
        {
          title: 'DevOps e Infraestrutura',
          items: [
            'Configuração e uso de Docker (Laravel + Node.js)',
            'Integração de upload com AWS S3 (buckets)',
            'Configuração de múltiplas versões de Node.js, PHP e MySQL'
          ]
        },
        {
          title: 'Versionamento e Git',
          items: [
            'Documentação e ensino sobre Git (`git stash`, `git cherry-pick`)',
            'Experiência com VSCode e CLI',
            'Estruturação e refatoração de repositórios'
          ]
        },
        {
          title: 'Linguagens de Programação',
          items: [
            'Back-End: PHP, TypeScript, Python, Go',
            'Front-End: JavaScript, HTML, CSS',
            'Scripting: Shell Script, Automação em Python'
          ]
        },
        {
          title: 'Web Scraping e APIs',
          items: [
            'Criação de APIs (ex.: API de filmes sáficos)',
            'Web scraping integrado com banco de dados'
          ]
        },
        {
          title: 'Ensino e Criação de Conteúdo',
          items: [
            'Aulas de programação voluntárias',
            'Criação de tutoriais técnicos',
            'Publicação de conteúdo no Medium, LinkedIn e lives'
          ]
        },
        {
          title: 'Habilidades Organizacionais e Projetos',
          items: [
            'Planejamento estruturado de tarefas',
            'Gestão de projetos técnicos e publicação',
            'Desenvolvimento de plataformas integradas (ex.: Smart Fidelidade)'
          ]
        },
        {
          title: 'Ferramentas e Ambientes de Desenvolvimento',
          items: [
            'Windows 11 com WSL',
            'VSCode',
            'DBeaver para bancos de dados',
            'Integração de Python 3 e Go no ambiente de trabalho'
          ]
        }
      ]
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
  background: linear-gradient(135deg, #00FF00, #8A2BE2);
  color: white;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #001f3f;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.sections {
  padding: 20px;
  max-width: 90vw;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 8px 12px rgba(38, 51, 14, 0.368);
}

.sections:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(62, 107, 30, 0.564), 0 0 25px rgba(75, 0, 130, 0.3);
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
  background: linear-gradient(135deg, #00FF00, #8A2BE2);
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.contact button:hover {
  background: linear-gradient(135deg, #8A2BE2, #00FF00);
  transform: translateY(-2px);
}

.footer {
  text-align: center;
  background: linear-gradient(135deg, #8A2BE2, #00FF00);
  color: white;
  padding: 10px 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8em;
  }

  .header p {
    font-size: 1.1em;
  }
}
</style>
