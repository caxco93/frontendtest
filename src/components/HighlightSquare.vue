<script setup lang="ts">
import { Coordinate } from "@/types";
const props = defineProps<{
  coordinate: Coordinate;
}>();

function file() {
  return props.coordinate.file;
}
function rank() {
  return props.coordinate.rank;
}
</script>
<template>
  <div class="square"></div>
</template>

<style scoped>
.square {
  grid-column-start: v-bind(file());
  grid-row-start: v-bind(rank());
}
</style>
