import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import component from '@/App.vue';

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
});
