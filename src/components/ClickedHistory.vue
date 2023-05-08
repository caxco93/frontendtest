<script setup lang="ts">
import { store } from "@/store.ts";
import { Coordinate } from "@/types";
import { ref, watch } from "vue";

const displayCoordinate = (square: Coordinate) =>
  `${square.file}${square.rank}`;

const reset = () => {
  store.reset();
};

const list = ref<HTMLElement | null>(null);

watch(store.highlighted, (_) => {
  const listElement = list.value!;
  setTimeout(() => {
    listElement.scrollTo(0, listElement.scrollHeight);
  }, 0);
});
</script>

<template>
  <div class="container">
    <h3>Square History</h3>
    <div class="toolbar">
      <button class="button" ontouchstart="" @click="reset">Reset</button>
    </div>
    <ol ref="list">
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
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
h3 {
  margin: 0;
  order: 1;
}
ol {
  margin: 0;
  flex: 1;
  height: 100%;
  overflow-y: auto;
  order: 2;
}

.toolbar {
  padding: 8px;
  margin-bottom: 8px;
  order: 3;
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
  .toolbar {
    order: 2;
  }
  ol {
    order: 3;
  }
}
</style>
