<script setup>
import { defineProps, computed } from "vue";
const props = defineProps(["className", "padding", "width", "height"]);

const className = computed(() => "." + props["className"]);
</script>

<template>
  <wrapper
    class="card"
    :className="props['className']"
    :padding="props['padding']"
    :width="props['width']"
    :height="props['height']"
  >
    <slot></slot>
  </wrapper>
</template>

<style scoped>
.card {
  padding: 0 24px;
  border: none;
  border-radius: 12px;
}
.lightBg {
  background-color: white;
}
.darkBg {
  background-color: var(--bg-tertiary-color);
}
.normalBg {
  background-color: var(--bg-secondary-color);
}
</style>