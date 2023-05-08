<script setup lang="ts">
import ChessBoard from "./components/ChessBoard.vue";
import HighlightBoard from "./components/HighlightBoard.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="app">
    <main>
      <div class="wrapper">
        <ChessBoard />
        <HighlightBoard />
      </div>
    </main>
    <aside>
      <SideBar />
    </aside>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}
.app {
  display: grid;
  grid-template-columns: 1fr 300px;
  height: 100vh;
}

@media (max-aspect-ratio: 1/1) {
  .app {
    grid-template-columns: auto;
    grid-template-rows: min-content 1fr;
  }
}
</style>
