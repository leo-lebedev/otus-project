import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createPinia, setActivePinia } from 'pinia';
import { useCartStore } from '@/stores/useCartStore';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: () => {},
  })),
}));

describe('DataPage', () => {
  let store;

  beforeEach(() => {
    setActivePinia(createPinia());
    vi.fn();
    store = useCartStore();
  });

  it('adds item to cart', () => {
    const item = { name: 'Test Product', price: 10.0, quantity: 1 };

    store.addToCart(item);

    expect(store.items).toContain(item);
    expect(store.items.length).toBe(1);
  });

  it('removes item from cart', () => {
    const item1 = { name: 'Test Product 1', price: 10.0, quantity: 1 };
    const item2 = { name: 'Test Product 2', price: 20.0, quantity: 3 };
    const item3 = { name: 'Test Product 3', price: 5.0, quantity: 2 };

    store.items.push(item1, item2, item3);

    store.removeFromCart(1);

    expect(store.items).toContain(item1);
    expect(store.items).not.toContain(item2);
    expect(store.items).toContain(item3);
    expect(store.items.length).toBe(2);
  });

  it('calculates total cost of items in cart', () => {
    const item1 = { name: 'Test Product 1', price: 10.0, quantity: 1 };
    const item2 = { name: 'Test Product 2', price: 20.0, quantity: 3 };
    const item3 = { name: 'Test Product 3', price: 5.0, quantity: 2 };

    store.items.push(item1, item2, item3);

    expect(store.totalCost).toBe('80.00');
  });
});
