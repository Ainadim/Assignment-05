import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RegistrationForm from './components/RegistrationForm.vue';
import LoginForm from './components/LoginForm.vue';
import WelcomePage from './components/WelcomePage.vue';

const routes = [
  { path: '/register', component: RegistrationForm },
  { path: '/login', component: LoginForm },
  { path: '/welcome', component: WelcomePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');
