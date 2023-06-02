import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const email = ref('');
  const password = ref('');

  const showPassword = ref(false);
  const error = ref(false);

  const router = useRouter();

  const handleSubmit = () => {
    if (email.value === 'admin@example.com' && password.value === 'password') {
      localStorage.setItem('userType', 'admin');
      router.push('/home');
    } else if (email.value === 'user@example.com' && password.value === 'password') {
      localStorage.setItem('userType', 'user');
      router.push('/home');
    } else {
      error.value = true;
    }
  };

  return {
    email,
    password,
    showPassword,
    error,
    handleSubmit,
  };
});
