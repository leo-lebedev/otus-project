import { createRouter, createWebHistory } from 'vue-router';
import ProductView from '@/views/ProductView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProductView',
      component: ProductView,
    },
  ],
});

export default router;
