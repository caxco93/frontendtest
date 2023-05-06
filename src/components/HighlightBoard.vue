<script setup lang="ts">
import { store } from "@/store.ts";
import HighlightSquare from "./HighlightSquare.vue";
</script>
<template>
  <div class="board highlight">
    <HighlightSquare
      v-for="square in store.highlighted"
      :key="square"
      :coordinate="square"
    />
  </div>
</template>
<style>
.highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
}
</style>
