<script setup>
import { ref, defineProps, computed } from "vue";

const props = defineProps({
  className: {
    type: String,
  },
  flow: {
    type: String,
  },
  rowGap: {
    type: String,
  },
  columnGap: {
    type: String,
  },
  gap: {
    type: String,
  },
  gridCardsWidth: {
    type: String,
  },
  gridCardsHeight: {
    type: String,
  },
  height: {
    type: String,
  },
  width: {
    type: String,
  },
});

const cardsWidth = computed(() => `repeat(auto-fit, ${props.gridCardsWidth})`);
const cardsHeight = computed(
  () => `repeat(auto-fit, ${props.gridCardsHeight})`
);

const gridStyle = ref({
  width: props.width,
  height: props.height,
  gridAutoFlow: props.flow,
  gridTemplateColumns: cardsWidth,
  gridTemplateRows: cardsHeight,
  gridRowGap: props.rowGap,
  gridColumnGap: props.columnGap,
  gap: props.gap,
});
</script>

<template>
  <div :class="['grid', props.className]" :style="gridStyle">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 16px;
}
</style>