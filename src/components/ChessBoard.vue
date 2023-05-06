<script setup lang="ts">
import { store } from "@/store.ts";
import { Coordinate } from "@/types";
const getSquareClass = (row: number, column: number): string => {
  return (row + column) % 2 === 0 ? "light" : "dark";
};
function handleSquareClick(row: number, column: number) {
  const coordinate: Coordinate = { file: column, rank: row };
  store.addHighlight(coordinate);
}
</script>

<template>
  <div class="board">
    <template v-for="row in 8">
      <div
        v-for="column in 8"
        :key="`${row}${column}`"
        class="square"
        :class="getSquareClass(row, column)"
        @click="handleSquareClick(row, column)"
      />
    </template>
  </div>
</template>

<style scoped>
@import "@/styles/board.css";

.light {
  background-color: #eeeed2;
}
.dark {
  background-color: #769656;
}
</style>
