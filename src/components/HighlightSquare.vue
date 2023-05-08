<script setup lang="ts">
import { FileLetter } from "@/types";
import { computed } from "vue";

const props = defineProps<{
  file: FileLetter;
  rank: number;
}>();

const gridArea = computed(() => `${props.file}${props.rank}`);
</script>

<template>
  <div class="square"></div>
</template>

<style scoped>
.square {
  grid-area: v-bind(gridArea);
  background-color: rgb(235, 97, 80);
  opacity: 0.8;
  pointer-events: auto;
}
</style>
