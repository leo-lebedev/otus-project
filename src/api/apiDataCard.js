import axios from 'axios';

const apiDataCard = 'https://fakestoreapi.com/products';

export const setData = async () => {
  try {
    const response = await axios.get(apiDataCard);
    return { data: response.data };
  } catch (error) {
    return { error };
  }
};
