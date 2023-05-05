<script setup lang="ts">
import ChessBoard from "./components/ChessBoard.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="app">
    <main>
      <ChessBoard />
    </main>
    <aside>
      <SideBar />
    </aside>
  </div>
</template>

<style scoped>
.app{
  display:grid;
  grid-template-columns: 1fr 300px;
  height: 100vh;
}
</style>
