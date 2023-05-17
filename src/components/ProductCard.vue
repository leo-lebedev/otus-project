<template>
  <div class="w-[300px]">
    <img :alt="product.title" :src="product.image" class="w-full" />
    <div>
      <h3 class="text-xl font-bold mb-1">{{ product.title }}</h3>
      <p class="text-grey-600 text-lg mb-1">{{ product.price }}$</p>
      <p class="mb-1">{{ product.description }}</p>
      <p class="mb-1 text-grey-600 text-lg uppercase">{{ product.category }}</p>
      <div class="text-yellow-500">
        <span v-for="i in Math.round(product.rating.rate)" :key="i">&#9733;</span>
        <span v-for="i in Math.round(5 - product.rating.rate)" :key="i">&#9734;</span>
        <span class="count">({{ product.rating.count }})</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
</script>
