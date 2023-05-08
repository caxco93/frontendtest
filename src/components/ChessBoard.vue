<script setup lang="ts">
import { store } from "@/store.ts";
import { Coordinate } from "@/types";
const getSquareClass = (row: number, column: number): string => {
  return (row + column) % 2 !== 0 ? "light" : "dark";
};
function handleSquareClick(row: number, column: number) {
  const coordinate: Coordinate = { file: column, rank: row };
  store.addHighlight(coordinate);
}
</script>

<template>
  <div class="board">
    <div v-for="row in 8" :key="row" class="rank">
      <div
        v-for="column in 8"
        :key="column"
        class="square"
        :class="getSquareClass(row, column)"
        @click="handleSquareClick(row, column)"
      />
    </div>
  </div>
</template>

<style scoped>
.board {
  max-width: 100vh;
  margin: auto;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column-reverse;
}

.rank {
  display: flex;
  flex: 1;
}

.square {
  flex: 1;
}
.light {
  background-color: #eeeed2;
}
.dark {
  background-color: #769656;
}
</style>
