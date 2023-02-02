<script setup>
import { defineProps } from "vue";
const props = defineProps(["background", "height", "className"]);
</script>

<template>
  <section
    :class="props['className']"
    :style="{ background: props['background'], height: props['height'] }"
  >
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  position: relative;
  padding: 64px 0;
}
</style>