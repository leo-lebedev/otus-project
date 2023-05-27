<template>
  <BaseLayout>
    <div class="card">
      <div v-if="cartStore.items.length === 0" class="my-7 text-center text-lg font-bold">Your cart is empty</div>
      <div v-else>
        <table class="w-full my-7 border-collapse border-gray-400">
          <thead>
            <tr class="border-b-4 border-gray-400">
              <th class="py-2">Product</th>
              <th class="py-2">Price</th>
              <th class="py-2">Quantity</th>
              <th class="py-2">Total</th>
              <th class="py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartStore.items" :key="index" class="border-b-4 border-gray-400">
              <td class="py-2 flex items-center justify-center">
                <img :src="item.image" class="w-20 h-20 object-cover mx-auto rounded-md" />
              </td>
              <td class="py-2 text-center">$ {{ item.price }}</td>
              <td class="py-2 text-center">{{ item.quantity }}</td>
              <td class="py-2 text-center">$ {{ item.price * item.quantity }}</td>
              <td class="py-2 text-center">
                <button
                  class="bg-red-500 text-white py-1 px-3 rounded-md focus:outline-none"
                  @click="handleRemoveItem(index)"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right">
          <p class="text-2xl font-bold">Total: ${{ totalCost }}</p>
        </div>
      </div>
      <button class="bg-blue-500 text-white py-1 px-4 rounded-md focus:outline-none hover:bg-blue-700" @click="goBack">
        Go back
      </button>
    </div>
  </BaseLayout>
</template>

<script setup>
  import BaseLayout from '@/layout/BaseLayout.vue';
  import { useCartStore } from '@/stores/useCartStore';
  import router from '@/router';
  import { computed } from 'vue';

  const cartStore = useCartStore();

  const totalCost = computed(() => {
    return cartStore.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  });

  const handleRemoveItem = (index) => {
    cartStore.removeFromCart(index);
  };

  const goBack = () => {
    router.go(-1);
  };
</script>

<style lang="scss" scoped>
  .card {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>
