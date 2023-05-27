<template>
  <BaseLayout>
    <div :class="{ isLoading }" class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <img :src="`${dataCard.image}`" class="mx-auto my-7 max-w-[400px]" />
        </div>
        <div class="p-7">
          <h2 class="text-4xl my-7">{{ dataCard.title }}</h2>
          <p class="text-xl my-7">Price - ${{ dataCard.price }}</p>
          <div class="my-4 flex items-center">
            <label class="mr-2" for="quantity">Quantity:</label>
            <input
              id="quantity"
              v-model.number="quantity"
              class="w-20 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="number"
            />
          </div>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
          <p class="mb-7">{{ dataCard.description }}</p>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product rating:</h3>
          <div class="text-yellow-500 mb-8">
            <span v-for="i in Math.round(dataCard.rating?.rate || 0)" :key="i">★</span>
            <span v-for="i in Math.round(5 - dataCard.rating?.rate || 0)" :key="i">☆</span>
            <span class="count">({{ dataCard.rating?.count || 0 }})</span>
          </div>
          <button class="flex items-center" @click="handleAddToCart(dataCard, quantity)">
            +
            <span class="pl-1">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup>
  import BaseLayout from '@/layout/BaseLayout.vue';
  import { useDataCard } from '@/hooks/useDataCard';
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useCartStore } from '@/stores/useCartStore';

  const props = defineProps({
    productId: { type: String, default: undefined },
  });

  const quantity = ref(1); // добавляем реактивное свойство quantity

  const { dataCard, isLoading, setDataCard } = useDataCard(props.productId);

  const cartStore = useCartStore();

  const router = useRouter();

  const handleAddToCart = (item, quantity) => {
    item.quantity = quantity; // задаем значение свойства quantity на объекте товара
    cartStore.addToCart(item);
    router.push({ name: 'basket' });
  };

  const init = () => {
    setDataCard();
  };

  onMounted(init);
</script>

<style lang="scss" scoped>
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
</style>
