<script setup lang="ts">
import { store } from "@/store.ts";
import { Coordinate } from "@/types";

const displayCoordinate = (square: Coordinate) =>
  `${square.file}${square.rank}`;

const reset = () => {
  store.reset();
};
</script>

<template>
  <div class="container">
    <h3>Square History</h3>
    <div class="toolbar">
      <button class="button" ontouchstart="" @click="reset">Reset</button>
    </div>
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
  display: flex;
  flex-direction: column;
}
h3 {
  margin: 0;
}
ol {
  margin: 0;
  flex: 1;
  height: 100%;
  overflow-y: auto;
}

.toolbar {
  padding: 8px;
  margin-bottom: 8px;
}
.button {
  background-color: #95bb4a;
  color: white;
  width: 100%;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 1.2;
  text-shadow: 0 0.1rem 0 rgba(0, 0, 0, 0.4);
  padding: 0.6rem;

  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0 0 #537133;
}
.button:active {
  transform: translateY(0.15rem);
  box-shadow: 0 0.1rem 0 0 #537133;
}

.notation {
  font-weight: bolder;
}

@media (max-aspect-ratio: 1/1) {
  .container {
    max-height: 100%;
  }
}
</style>
