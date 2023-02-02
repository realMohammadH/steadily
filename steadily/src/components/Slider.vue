<script setup>
import { defineProps } from "vue";
const props = defineProps([
  "padding",
  "slider-width",
  "slider-track_width",
  "gridCardsWidth",
  "translateX",
]);
</script>

<template>
  <flexbox
    class="slider"
    :padding="props['padding']"
    :width="props['slider-width']"
  >
    <grid
      class="slider-track"
      :style="{
        width: props['slider-track_width'],
        translate: props['translateX'],
      }"
      flow="row"
      :gridCardsWidth="props['gridCardsWidth']"
    >
      <slot></slot>
    </grid>
  </flexbox>
</template>

<style scoped>
.slider {
  overflow: hidden;
}
.slider-track {
  justify-content: center;
  align-items: center;
}
</style>