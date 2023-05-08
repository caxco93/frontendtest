<script setup lang="ts">
import { store } from "@/store.ts";
</script>

<template>
  <!-- Temporary rudimentary visualization for easier verification-->
  <div class="sidebar">{{ JSON.stringify(store.highlighted) }}</div>
</template>

<style scoped>
.sidebar {
  background-color: var(--dark-secondary);
  height: 100%;
}
@media (prefers-color-scheme: light) {
  .sidebar {
    color: var(--dark-main);
    background-color: var(--light-main);
  }
}
</style>
