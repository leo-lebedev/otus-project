import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [],
  }),
  getters: {
    totalCost: (state) => {
      return state.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    },
  },
  actions: {
    addToCart(item) {
      this.items.push(item);
    },
    removeFromCart(index) {
      this.items.splice(index, 1);
    },
  },
});
