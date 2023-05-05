<script setup lang="ts">
const getSquareClass = (row: number, column: number): string => {
  return (row + column) % 2 === 0 ? "light" : "dark";
};
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
        />
      </template>
    </div>
    <div class="board highlight">
      <div class="square"></div>
    </div>
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
.highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.highlight .square {
  grid-column-start: 4;
  grid-row-start: 4;
  background-color: rgb(235, 97, 80);
  opacity: 0.8;
}
.light {
  background-color: #eeeed2;
}
.dark {
  background-color: #769656;
}
</style>
