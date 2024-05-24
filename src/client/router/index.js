// Se usa index para que pueda acceder al archivo por defecto solo marcando el empaquetado
import { createMemoryHistory, createRouter } from 'vue-router';
import ComponentePadre from '../components/ComponentePadre.vue';

const routes = [
  { path: '/', component: ComponentePadre },
  { path: '/pinia', component: () => import('../components/Pinia.vue') },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
