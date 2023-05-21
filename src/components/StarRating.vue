<template>
  <div>
    <span
      v-for="index in 5"
      :key="index"
      class="cursor-pointer inline-block w-8 h-8"
      @click="$emit('update:model-value', index)"
    >
      <svg :class="{ filled: index <= modelValue }" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </span>
  </div>
</template>

<script setup>
  defineProps({
    modelValue: {
      type: Number,
      default: 0,
    },
  });

  defineEmits(['update:model-value']);
</script>

<style lang="scss" scoped>
  span {
    fill: #ccc;
  }

  .filled {
    fill: orange;
  }
</style>
