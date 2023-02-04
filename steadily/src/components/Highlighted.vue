<template>
  <span class="highlighted-text">
    <slot></slot>
  </span>
</template>
    
<style scoped>
.highlighted-text {
  display: inline;
  position: relative;
  color: var(--bg-tertiary-color);
}
.highlighted-text::before {
  content: "";
  position: absolute;
  margin-right: 12px;
  bottom: 0;
  transform: translateY(16%);
  width: 100%;
  height: 16px;
  background: url(/src/assets/icons/underline.svg) no-repeat center;
}
</style>