<script setup lang="ts">
import { store } from "@/store.ts";
import HighlightSquare from "./HighlightSquare.vue";
import { Coordinate } from "@/types";

function key(square: Coordinate) {
  return `${square.file}${square.rank}`;
}
</script>

<template>
  <div class="board overlay">
    <HighlightSquare
      v-for="square in store.highlighted.slice(-1)"
      :key="key(square)"
      v-bind="square"
    />
  </div>
</template>

<style scoped>
@import "@/styles/board.css";
@import "@/styles/overlay.css";
</style>
