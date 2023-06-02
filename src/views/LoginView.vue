<template>
  <div class="grid place-items-center h-screen">
    <form class="max-w-sm mx-auto my-8 w-full" @submit.prevent="login.handleSubmit">
      <label class="block mb-2">
        <span class="text-gray-700">Email:</span>
        <input
          v-model="login.email"
          class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
          type="email"
        />
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Password:</span>
        <div class="relative">
          <input
            v-model="login.password"
            :type="login.showPassword ? 'text' : 'password'"
            class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
          <button class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" type="button">
            <svg
              class="h-6 w-6 text-gray-700 hover:text-gray-600 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              @click="login.showPassword = !login.showPassword"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                clip-rule="evenodd"
                d="M18.707 5.293A9.916 9.916 0 0010 2a9.916 9.916 0 00-8.707 3.293A9.916 9.916 0 002 10c0 2.32.824 4.453 2.207 6.107l1.414-1.414A7.935 7.935 0 014 10a7.935 7.935 0 012.221-5.455l1.428 1.429A5.943 5.943 0 0010 6a5.943 5.943 0 004.351-1.826l1.356 1.356zm-7.479 9.45a5.943 5.943 0 01-4.354-1.83l1.356-1.356A3.955 3.955 0 0010 8a3.955 3.955 0 002.829-1.172l1.428 1.429A5.943 5.943 0 0110 12a5.943 5.943 0 01-4.351-1.826L4.221 9.715A7.935 7.935 0 006 10a7.935 7.935 0 002.221 5.455l1.414-1.414c-.097-.23-.173-.47-.228-.716z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </label>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
      <span v-if="login.error" class="text-red-500">Invalid email or password</span>
    </form>
  </div>
</template>

<script setup>
  import { useAuthStore } from '@/stores/useLoginAuth';

  const login = useAuthStore();
</script>
