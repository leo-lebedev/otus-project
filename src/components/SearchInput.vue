<template>
  <div class="relative">
    <input
      :value="modelValue"
      class="input-class pr-6"
      placeholder="Поиск по цене или названию"
      type="text"
      @input="$emit('update:model-value', $event.target.value)"
    />
    <span
      v-show="modelValue && isInputClear"
      class="absolute right-2 top-[3px] cursor-pointer"
      @click="$emit('update:model-value', '')"
      >x</span
    >
  </div>
</template>

<script setup>
  defineProps({
    modelValue: {
      type: [String, Number],
      default: '',
    },
    isInputClear: {
      type: Boolean,
      default: true,
    },
  });

  defineEmits(['update:model-value']);
</script>
