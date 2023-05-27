import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(item) {
      this.items.push(item);
    },
    removeFromCart(index) {
      this.items.splice(index, 1);
    },
  },
});
