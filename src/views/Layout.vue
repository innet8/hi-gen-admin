<template>
  <div class="app-root">
    <header>
      <GlobalHeader />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style lang="scss" scoped>
.app-root {
  @apply relative z-0;
}

main > div, main > section {
  @apply mx-auto;
  width: 94%;
  max-width: 1120px;
}
</style>