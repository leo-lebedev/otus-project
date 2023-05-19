<template>
  <BaseLayout>
    <div>
      <div class="flex items-center justify-center my-6">
        <input v-model="searchQuery" class="input-class mr-4" placeholder="Поиск по цене или названию" type="text" />

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
          @click="isProductModal = true"
        >
          Добавить товар
        </button>
      </div>

      <p v-if="isLoading" class="text-center text-xl mt-8">Идет загрузка...</p>

      <p v-if="!filteredItems.length && !isLoading" class="text-center text-xl mt-8">Таких товаров нет...</p>

      <div
        v-else
        class="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 mx-auto my-6 gap-4 place-items-start"
      >
        <ProductCard v-for="item in filteredItems" :key="item.id" :product="item" />
      </div>

      <AddProductModal v-if="isProductModal" @close-modal="isProductModal = false" @add-product="addProduct" />
    </div>
  </BaseLayout>
</template>

<script setup>
  import { computed, defineAsyncComponent, onMounted, ref } from 'vue';
  import ProductCard from '@/components/ProductCard.vue';
  import { useDataCard } from '@/hooks/useDataCard.js';
  import BaseLayout from '@/layout/BaseLayout.vue';

  const AddProductModal = defineAsyncComponent(() => import('@/components/AddProductModal.vue'));

  const { dataCard, isLoading, setData } = useDataCard();

  const searchQuery = ref('');

  const isProductModal = ref(false);

  const filteredItems = computed(() => {
    const searchValue = searchQuery.value.toLowerCase();
    if (!searchValue) {
      return dataCard.value;
    }

    return dataCard.value.filter(
      (item) => item.title.toLowerCase().includes(searchValue) || item.price.toString().includes(searchValue)
    );
  });

  const addProduct = (product) => {
    dataCard.value.push(product);
  };

  const init = () => {
    setData();
  };

  onMounted(init);
</script>
