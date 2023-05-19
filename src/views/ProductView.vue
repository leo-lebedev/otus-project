<template>
  <div>
    <h1 class="text-center text-3xl my-3">Product Card</h1>

    <p v-if="isLoading" class="flex items-center justify-center text-xl h-screen">Идет загрузка...</p>

    <div
      v-else
      class="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 mx-auto my-6 gap-4 place-items-center"
    >
      <ProductCard v-for="item in dataCard" :key="item.id" :product="item" />
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import ProductCard from '@/components/ProductCard.vue';
  import { useDataCard } from '@/hooks/useDataCard.js';

  const { dataCard, isLoading, setData } = useDataCard();
  const init = () => {
    setData();
  };

  onMounted(init);
</script>
