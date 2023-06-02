import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    email: '',
    password: '',
    showPassword: false,
    error: false,
  }),
});
