<script setup lang="ts">
import { store } from "@/store.ts";
import { Coordinate } from "@/types";
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
        @click="handleSquareClick(row, column)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
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

  .square {
    flex: 1;
    background-color: #769656;
    &:nth-child(odd) {
      background-color: #eeeed2;
    }
  }
}
.rank:nth-child(odd) {
  .square {
    background-color: #eeeed2;
    &:nth-child(odd) {
      background-color: #769656;
    }
  }
}
</style>
