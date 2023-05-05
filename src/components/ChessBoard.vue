<script setup lang="ts">
const getSquareClass = (row: number, column: number): string => {
  return (row + column) % 2 === 0 ? "light" : "dark";
};
</script>

<template>
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
</template>

<style scoped>
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
