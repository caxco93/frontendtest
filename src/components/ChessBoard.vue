<script setup lang="ts">
import { store } from "@/store.ts";
import { Coordinate, FileLetter } from "@/types";

function handleSquareClick(file: FileLetter, rank: number) {
  const coordinate: Coordinate = { file, rank };
  store.addHighlight(coordinate);
}
const files: Array<FileLetter> = ["a", "b", "c", "d", "e", "f", "g", "h"];
</script>

<template>
  <div class="board">
    <div v-for="rank in 8" :key="rank" class="rank">
      <div
        v-for="file in files"
        :key="file"
        class="square"
        @click="handleSquareClick(file, rank)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/board.css";
.board {
  display: flex;
  flex-direction: column-reverse;
}

.rank {
  display: flex;
  flex: 1;

  .square {
    flex: 1;
    background-color: var(--chess-dark);
    &:nth-child(odd) {
      background-color: var(--chess-light);
    }
  }
}
.rank:nth-child(odd) {
  .square {
    background-color: var(--chess-light);
    &:nth-child(odd) {
      background-color: var(--chess-dark);
    }
  }
}
</style>
