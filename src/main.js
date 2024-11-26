import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
/* import router from './router'
import store from './store' */

// Importar o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// Importar o BootstrapVue
import { BootstrapVue3 } from 'bootstrap-vue-3';

const app = createApp(App);

app.use(BootstrapVue3); // Usar o BootstrapVue3
app.mount('#app');
