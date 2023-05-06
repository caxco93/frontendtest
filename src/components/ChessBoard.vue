<script setup lang="ts">
import { store } from "@/store.ts";
import { Coordinate } from "@/types";
import HighlightBoard from "./HighlightBoard.vue";
const getSquareClass = (row: number, column: number): string => {
  return (row + column) % 2 === 0 ? "light" : "dark";
};
function handleSquareClick(row: number, column: number) {
  const coordinate: Coordinate = { file: column, rank: row };
  store.highlighted.push(coordinate);
}
</script>

<template>
  <div class="wrapper">
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
    <HighlightBoard />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}
.board {
  max-width: 100vh;
  margin: auto;
  aspect-ratio: 1;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
}
.light {
  background-color: #eeeed2;
}
.dark {
  background-color: #769656;
}
</style>
