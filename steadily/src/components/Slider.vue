<script setup>
import { defineProps } from "vue";
import flexbox from "./Functional Components/flex";
const props = defineProps(["padding", "slider-width", "slider-track_width"]);
</script>

<template>
  <flexbox
    class="slider"
    :padding="props['padding']"
    :width="props['slider-width']"
  >
    <div class="slider-track" :style="{ width: props['slider-track_width'] }">
      <slot></slot>
    </div>
  </flexbox>
</template>

<style scoped>
.slider {
  justify-content: center;
}
.slider-track {
  display: grid;
  grid-template-columns: repeat(auto-fill, 133px);
  gap: 20px;
  grid-auto-flow: column;
}
</style>