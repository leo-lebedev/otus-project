import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { requiresGuest: true },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/product/:productId',
      name: 'product-card',
      component: () => import('@/views/ProductCardView.vue'),
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/basket/',
      name: 'basket',
      component: () => import('@/views/BasketView.vue'),
      meta: { requiresAuth: true },
      props: true,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userType = localStorage.getItem('userType');
  if (to.meta.requiresAuth && !userType) {
    next('/');
  } else if (to.meta.requiresGuest && userType) {
    next('/home');
  } else {
    next();
  }
});

export default router;
