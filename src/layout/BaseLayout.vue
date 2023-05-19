<template>
  <div class="h-screen">
    <!-- Header -->
    <div class="mx-6 mt-6">
      <slot name="header">
        <h1 class="text-center text-3xl">Product Card</h1>
      </slot>
    </div>

    <!-- Main -->
    <main class="m-6">
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
