<script setup>
</script>

<template>
  <div class="divider"></div>
</template>

<style scoped>
.divider {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 20px;
  bottom: 0;
  transform: translateY(20px);
  background: url(/src/assets/icons/divider.svg);
}
.top {
  top: 0;
  transform: translateY(0);
}
</style>