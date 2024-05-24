// Se usa index para que pueda acceder al archivo por defecto solo marcando el empaquetado
import { createMemoryHistory, createRouter } from 'vue-router';
import ComponentePadre from '../components/ComponentePadre.vue';
import { useAppStore } from '../stores/index.js';

const routes = [
  { path: '/', component: ComponentePadre },
  { path: '/pinia', component: () => import('../components/Pinia.vue') },
  { path: '/public', component: () => import('../components/Public.vue') },
  {
    path: '/admin',
    component: () => import('../components/Admin.vue'),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const appStore = useAppStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (appStore.auth !== 'admin') {
      next({ path: '/public' });
    } else {
      next();
    }
  } else {
    next();
  }
});
export { router };
