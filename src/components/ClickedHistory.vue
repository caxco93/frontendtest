<script setup lang="ts">
import { store } from "@/store.ts";
import { Coordinate } from "@/types";

const displayCoordinate = (square: Coordinate) =>
  `${square.file}${square.rank}`;
</script>

<template>
  <div class="container">
    <h3>Square History</h3>
    <ol>
      <li
        v-for="square in store.highlighted"
        v-bind="square"
        :key="displayCoordinate(square)"
      >
        <span class="notation">{{ displayCoordinate(square) }}</span>
      </li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 8px;
  box-sizing: border-box;
  max-height: 100vh;
  overflow-y: auto;
}
h3 {
  margin-top: 0;
}
ol {
  margin: 0;
}
.notation {
  font-weight: bolder;
}

@media (max-aspect-ratio: 1/1) {
  .container {
    max-height: 100%;
    overflow-y: unset;
  }
}
</style>
