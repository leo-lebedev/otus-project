<template>
  <button :class="computedClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    mode: {
      type: String,
      default: 'success',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });

  const computedClasses = computed(() => {
    return [
      'text-white font-bold py-1 px-3 rounded h-8',
      {
        'bg-blue-500 hover:bg-blue-700 ': props.mode === 'success' && !props.disabled,
        'bg-red-500 hover:bg-red-700': props.mode === 'danger',
        'bg-blue-200 hover:bg-blue-200': props.disabled,
      },
    ];
  });
</script>
