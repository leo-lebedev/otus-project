import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import component from '@/views/LoginView.vue';

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

  it('renders the email input field', () => {
    const wrapper = mount(component);
    const emailInput = wrapper.find('input[type="email"]');
    expect(emailInput.exists()).toBe(true);
  });

  it('renders the password input field', () => {
    const wrapper = mount(component);
    const passwordInput = wrapper.find('input[type="password"]');
    expect(passwordInput.exists()).toBe(true);
  });

  it('submits the form when the login button is clicked', async () => {
    const wrapper = mount(component);
    const submitButton = wrapper.find('button[type="submit"]');
    const form = wrapper.find('form');

    await form.trigger('submit');
    // You can add more assertions here to test the form submission behavior
  });

  it('displays an error message when login fails', async () => {
    const wrapper = mount(component);
    const form = wrapper.find('form');

    wrapper.vm.login.error = true;

    await form.trigger('submit');
    const errorMessage = wrapper.find('.text-red-500');
    expect(errorMessage.exists()).toBe(true);
  });

  it('handles login with valid credentials', async () => {
    const wrapper = mount(component);

    const emailInput = wrapper.find('input[type="email"]');
    await emailInput.setValue('admin@example.com');

    const passwordInput = wrapper.find('input[type="password"]');
    await passwordInput.setValue('password');

    const form = wrapper.find('form');
    await form.trigger('submit');
  });

  it('displays an error message with invalid credentials', async () => {
    const wrapper = mount(component);

    const emailInput = wrapper.find('input[type="email"]');
    await emailInput.setValue('invalid@example.com');

    const passwordInput = wrapper.find('input[type="password"]');
    await passwordInput.setValue('invalidpassword');

    const form = wrapper.find('form');
    await form.trigger('submit');

    const errorMessage = wrapper.find('.text-red-500');
    expect(errorMessage.exists()).toBe(true);
  });
});
