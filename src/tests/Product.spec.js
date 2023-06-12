import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import component from '@/views/ProductView.vue';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: () => {},
  })),
}));

describe('App component', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.fn();
  });

  it('mounts without error', () => {
    const wrapper = mount(component);
    expect(wrapper).toBeDefined();
    expect(wrapper.exists()).toBeTruthy();
  });

  it('shows Add Product button for Admin users', () => {
    localStorage.setItem('userType', 'admin');

    const wrapper = mount(component);

    expect(wrapper.findComponent({ name: 'ProductButton' }).text()).toBe('Добавить товар');
  });

  it('does not show Add Product button for non-Admin users', () => {
    localStorage.removeItem('userType');

    const wrapper = mount(component);

    expect(wrapper.find('p').text()).toBe('');
    expect(wrapper.findComponent({ name: 'ProductButton' }).exists()).toBe(false);
  });

  it('opens Add Product modal when "Добавить товар" button is clicked', async () => {
    localStorage.setItem('userType', 'admin');

    const wrapper = mount(component);

    await wrapper.vm.$nextTick();

    const addButton = wrapper.findComponent({ name: 'ProductButton' });

    addButton.trigger('click');

    expect(wrapper.findComponent({ name: 'AddProductModal' }).exists()).toBe(false);
  });
});
