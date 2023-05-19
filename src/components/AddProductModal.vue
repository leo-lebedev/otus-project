<template>
  <div class="fixed z-10 inset-0 overflow-y-hidden">
    <div class="flex items-center justify-center min-h-screen px-4">
      <div aria-hidden="true" class="fixed inset-0 transition-opacity" @click="closeModal">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div class="bg-white rounded-lg p-8 max-w-[500px] mx-auto z-50">
        <h2 class="text-center text-2xl my-3">Create Product</h2>
        <div>
          <div class="mb-2 flex justify-between">
            <label for="name">Name:</label>
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
            <label for="email">Email:</label>
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
            <label for="title">Title:</label>
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
            <label for="price">Price:</label>
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
            <label for="description">Description:</label>
            <input
              id="description"
              v-model="product.description"
              :class="{ 'invalid-input': $v.description.required.$invalid }"
              class="input-class ml-3"
            />
          </div>
          <p v-show="$v.description.required.$invalid" class="error-message">Поле обязательно</p>
          <div class="mb-2 flex justify-between">
            <label for="category">Category:</label>
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
            <label for="rate">Rating Rate:</label>
            <input
              id="rate"
              v-model="product.rating.rate"
              :class="{ 'invalid-input': $v.rating.rate.required.$invalid }"
              class="input-class ml-3"
              step="0.1"
              type="number"
            />
          </div>
          <p v-show="$v.rating.rate.required.$invalid" class="error-message">Поле обязательно</p>
          <div class="mb-2 flex justify-between">
            <label for="count">Rating Count:</label>
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
          <label for="agreement">согласие на обработку данных:</label>
          <input
            id="agreement"
            v-model="product.agreement"
            :class="{ 'invalid-input': $v.agreement.required.$invalid }"
            class="input-class ml-3"
            type="checkbox"
          />
        </div>

        <div class="flex justify-end">
          <button
            class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-6"
            @click="closeModal"
          >
            Отмена
          </button>
          <button
            :class="{ 'bg-blue-200 hover:bg-blue-200': $v.$invalid, 'bg-blue-500 hover:bg-blue-700': !$v.$invalid }"
            :disabled="$v.$invalid"
            class="mt-4 text-white font-bold py-2 px-4 rounded"
            @click="createProduct"
          >
            Создать Товар
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { email, required } from '@vuelidate/validators';

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
    title: { required },
    price: { required },
    description: { required },
    category: { required },
    rating: {
      rate: { required },
      count: { required },
    },
    name: { required },
    email: { required, email },
    agreement: { required },
  };

  const $v = useVuelidate(rules, product);

  const closeModal = () => {
    emit('close-modal');
  };

  const createProduct = () => {
    emit('add-product', product);
    emit('close-modal');
  };
</script>
