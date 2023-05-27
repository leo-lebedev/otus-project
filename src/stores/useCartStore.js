import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [],
  }),
  getters: {
    totalItemsPrice() {
      return this.items.reduce((acc, item) => acc + item.price, 0);
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
