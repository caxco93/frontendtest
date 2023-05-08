<script setup lang="ts">
import { store } from "@/store.ts";
import HighlightSquare from "./HighlightSquare.vue";
import { Coordinate } from "@/types";

function key(square: Coordinate) {
  return `${square.file}${square.rank}`;
}
</script>

<template>
  <div class="board highlight">
    <HighlightSquare
      v-for="square in store.highlighted"
      :key="key(square)"
      v-bind="square"
    />
  </div>
</template>

<style scoped>
@import "@/styles/board.css";

.highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
}
</style>
