<template>
  <div class="w-[300px] product-card">
    <img :alt="product.title" :src="product.image" class="max-w-[300px] h-[300px]" />
    <div>
      <h3 class="text-xl font-bold mb-1">{{ product.title }}</h3>
      <p class="text-grey-600 text-lg mb-1">{{ product.price }}$</p>
      <p class="mb-1 text-grey-600 text-lg uppercase">{{ product.category }}</p>
      <div class="text-yellow-500">
        <span v-for="i in Math.round(product.rating.rate)" :key="i">&#9733;</span>
        <span v-for="i in Math.round(5 - product.rating.rate)" :key="i">&#9734;</span>
        <span class="count">({{ product.rating.count }})</span>
      </div>
    </div>
    {{ id }}
    <ProductButton class="mt-2" @click="$router.push({ name: 'product-card', params: { productId: product.id } })"
      >Подробнее о товаре
    </ProductButton>
  </div>
</template>

<script setup>
  import ProductButton from '@/components/ProductButton.vue';

  defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
</script>
