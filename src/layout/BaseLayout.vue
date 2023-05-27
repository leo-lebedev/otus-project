<template>
  <div class="h-screen container mx-auto">
    <!-- Header -->
    <div class="mx-6 mt-6">
      <slot name="header">
        <h1 class="text-center text-3xl">Product Card</h1>
        <MainNav class="mt-4" />
      </slot>
    </div>

    <!-- Main -->
    <main class="m-6 overflow-auto main h-[80vh]">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="pb-6">
      <slot name="footer">
        <p class="text-center text-xl">Product Card Footer</p>
      </slot>
    </footer>
  </div>
</template>
<script setup>
  import MainNav from '@/components/MainNav.vue';
</script>
