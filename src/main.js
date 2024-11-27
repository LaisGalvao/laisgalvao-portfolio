import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Importar as views
import HomeView from './views/HomeView.vue';

// Criar Vuex Store
const store = createStore({
  state: {
    message: 'Olá, Vuex!'
  }
});

// Configurar Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView, name: 'home' }
  ]
});

// Criar App Vue
const app = createApp(App);
app.use(BootstrapVue3);
app.use(store);
app.use(router);
app.mount('#app');
