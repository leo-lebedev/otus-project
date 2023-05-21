<template>
  <div class="fixed z-10 inset-0 overflow-y-hidden">
    <div class="flex items-center justify-center min-h-screen px-4">
      <div aria-hidden="true" class="fixed inset-0 transition-opacity" @click="closeModal">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <form class="bg-white rounded-lg p-8 max-w-[500px] mx-auto z-50" @submit.prevent="createProduct">
        <h2 class="text-center text-2xl my-3">Create Product</h2>
        <div>
          <div class="mb-2 flex justify-between">
            <label for="name">Name<span class="text-red-500">*</span>:</label>
            <input
              id="name"
              v-model="product.name"
              :class="{ 'invalid-input': $v.name.required.$invalid }"
              class="input-class ml-3"
              type="text"
            />
          </div>
          <p v-show="$v.name.required.$invalid" class="error-message">Поле обязательно</p>
          <div class="mb-2 flex justify-between">
            <label for="email">Email<span class="text-red-500">*</span>:</label>
            <input
              id="email"
              v-model="product.email"
              :class="{ 'invalid-input': $v.email.required.$invalid || $v.email.email.$invalid }"
              class="input-class ml-3"
              type="email"
            />
          </div>
          <p v-show="$v.email.required.$invalid" class="error-message">Поле обязательно</p>
          <div class="mb-2 flex justify-between">
            <label for="title">Title<span class="text-red-500">*</span>:</label>
            <input
              id="title"
              v-model="product.title"
              :class="{ 'invalid-input': $v.title.required.$invalid }"
              class="input-class ml-3"
              type="text"
            />
          </div>
          <p v-show="$v.title.required.$invalid" class="error-message">Поле обязательно</p>
          <div class="mb-2 flex justify-between">
            <label for="price">Price<span class="text-red-500">*</span>:</label>
            <input
              id="price"
              v-model="product.price"
              :class="{ 'invalid-input': $v.price.required.$invalid }"
              class="input-class ml-3"
              type="number"
            />
          </div>
          <p v-show="$v.price.required.$invalid" class="error-message">Поле обязательно</p>
          <div class="mb-2 flex justify-between">
            <label for="description">Description<span class="text-red-500">*</span>:</label>
            <input
              id="description"
              v-model="product.description"
              :class="{ 'invalid-input': $v.description.required.$invalid }"
              class="input-class ml-3"
            />
          </div>
          <p v-show="$v.description.required.$invalid" class="error-message">Поле обязательно</p>
          <div class="mb-2 flex justify-between">
            <label for="category">Category<span class="text-red-500">*</span>:</label>
            <input
              id="category"
              v-model="product.category"
              :class="{ 'invalid-input': $v.category.required.$invalid }"
              class="input-class ml-3"
              type="text"
            />
          </div>
          <p v-show="$v.category.required.$invalid" class="error-message">Поле обязательно</p>
          <div class="mb-2 flex justify-between">
            <label>Rating Rate<span class="text-red-500">*</span>:</label>
            <StarRating v-model="product.rating.rate" />
          </div>
          <p v-show="$v.rating.rate.required.$invalid" class="error-message">Поле обязательно</p>
          <div class="mb-2 flex justify-between">
            <label for="count">Rating Count<span class="text-red-500">*</span>:</label>
            <input
              id="count"
              v-model="product.rating.count"
              :class="{ 'invalid-input': $v.rating.count.required.$invalid }"
              class="input-class ml-3"
              type="number"
            />
          </div>
          <p v-show="$v.rating.count.required.$invalid" class="error-message">Поле обязательно</p>
        </div>
        <div class="mb-2 flex justify-between">
          <label for="agreement">Согласие на обработку данных<span class="text-red-500">*</span>:</label>
          <input
            id="agreement"
            v-model="product.agreement"
            :class="{ 'invalid-input': $v.agreement.required.$invalid }"
            class="input-class ml-3"
            type="checkbox"
          />
        </div>

        <div class="flex justify-end">
          <ProductButton class="mr-4" mode="danger" @click="closeModal"> Отмена</ProductButton>
          <ProductButton :disabled="$v.$invalid" type="submit">Создать Товар</ProductButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { alpha, email, maxValue, minValue, numeric, required } from '@vuelidate/validators';
  import ProductButton from '@/components/ProductButton.vue';
  import StarRating from '@/components/StarRating.vue';

  const emit = defineEmits(['close-modal', 'add-product']);

  const product = reactive({
    id: Date.now(),
    title: '',
    price: null,
    description: '',
    category: '',
    image: 'http://cartopen.ru/image/cache/catalog/no-image-1300x760.jpg',
    rating: {
      rate: null,
      count: null,
    },
    name: '',
    email: '',
    agreement: false,
  });

  const rules = {
    title: { required, alpha },
    price: { required, numeric },
    description: { required, alpha },
    category: { required, alpha },
    rating: {
      rate: { required, minValue: minValue(0), maxValue: maxValue(5) },
      count: { required, numeric },
    },
    name: { required, alpha },
    email: { required, email },
    agreement: { required },
  };

  const $v = useVuelidate(rules, product, { $autoDirty: true });

  const closeModal = () => {
    emit('close-modal');
  };

  const createProduct = () => {
    emit('add-product', product);
    emit('close-modal');
  };
</script>
