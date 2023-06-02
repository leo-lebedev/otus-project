<template>
  <div class="flex items-center justify-between">
    <RouterLink :to="{ name: 'home' }" class="text-2xl border-none">ProductPage</RouterLink>
    <nav>
      <ul class="flex items-center gap-3">
        <li v-for="{ label, name } in mainNav" :key="name">
          <RouterLink :to="{ name: name }" class="text-xl hover:text-gray-500">{{ label }}</RouterLink>
        </li>
      </ul>
    </nav>

    <div class="flex items-center">
      <p class="mr-2 text-sm">{{ login.email }}</p>
      <button class="hover:text-gray-300" @click="handleLogout">Logout</button>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/useLoginAuth';

  const login = useAuthStore();

  const mainNav = [
    {
      label: 'Home',
      name: 'home',
    },
    {
      label: 'About',
      name: 'about',
    },
    {
      label: 'Contact',
      name: 'contact',
    },
    {
      label: 'Product',
      name: 'product',
    },
    {
      label: 'Basket',
      name: 'basket',
    },
  ];

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('userType');
    router.push('/');
  };
</script>

<style lang="scss" scoped>
  .router-link-active {
    border-bottom: 2px solid black;
  }
</style>
