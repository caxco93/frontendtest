<script setup lang="ts"></script>

<template>
  <div class="sidebar">SideBar</div>
</template>

<style scoped>
.sidebar {
  background-color: var(--dark-secondary);
  height: 100vh;
}
@media (prefers-color-scheme: light) {
  .sidebar {
    color: var(--dark-main);
    background-color: var(--light-main);
  }
}
</style>
