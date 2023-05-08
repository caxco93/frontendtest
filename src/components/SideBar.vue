<script setup lang="ts">
import ClickedHistory from "./ClickedHistory.vue";
</script>

<template>
  <div class="sidebar">
    <ClickedHistory />
  </div>
</template>

<style scoped>
.sidebar {
  background-color: var(--dark-secondary);
  height: 100%;
  position: relative;
}
@media (prefers-color-scheme: light) {
  .sidebar {
    color: var(--dark-main);
    background-color: var(--light-main);
  }
}
</style>
