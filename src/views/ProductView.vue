<template>
  <BaseLayout>
    <div>
      <div class="flex items-center justify-center my-6">
        <SearchInput v-model="searchQuery" class="mr-4" />

        <ProductButton v-if="isAdmin" @click="isProductModal = true">Добавить товар</ProductButton>
        <p v-else>Товар может добавить только Администратор</p>
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
  import SearchInput from '@/components/SearchInput.vue';
  import ProductButton from '@/components/ProductButton.vue';

  const AddProductModal = defineAsyncComponent(() => import('@/components/AddProductModal.vue'));

  const { dataCard, isLoading, setData } = useDataCard();

  const searchQuery = ref('');

  const isProductModal = ref(false);

  const isAdmin = computed(() => localStorage.getItem('userType') === 'admin');

  const filteredItems = computed(() => {
    const searchValue = searchQuery.value.toLowerCase();
    if (!searchValue) {
      return dataCard.value;
    }

    return dataCard.value.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue) || item.price.toString().toLowerCase().startsWith(searchValue)
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
