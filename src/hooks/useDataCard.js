import { ref } from 'vue';
import axios from 'axios';
import { apiDataCard } from '@/api/api.js';

export function useDataCard(id) {
  const dataCard = ref([]);

  const isLoading = ref(false);

  const setData = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(apiDataCard);
      dataCard.value = response.data;
      isLoading.value = false;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  const setDataCard = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(apiDataCard + '/' + id);
      dataCard.value = response.data;
      isLoading.value = false;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { dataCard, setData, isLoading, setDataCard };
}
