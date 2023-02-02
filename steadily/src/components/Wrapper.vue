<script setup>
import { defineProps } from "vue";
const props = defineProps({
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  padding: {
    type: String,
  },
  background: {
    type: String,
  },
  margin: {
    type: String,
  },
});
</script>

<template>
  <div class="wrapper"></div>
</template>

<style scoped>
</style>