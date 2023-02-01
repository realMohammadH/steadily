<script setup>
import { defineProps } from "vue";
const props = defineProps(["margin", "labelColor"]);
</script>

<template>
  <form action="submit" :style="{ margin: props['margin'] }">
    <div class="form-group">
      <label for="email-address" :style="{ color: props['labelColor'] }"
        >Your property address</label
      >
      <input type="email" placeholder="Your address here..." />
    </div>
    <button>Get a quote</button>
  </form>
</template>

<style scoped>
form,
.form-group {
  display: grid;
}
form {
  gap: 16px;
  text-align: start;
  width: 480px;
}
.form-group {
  gap: 6px;
}
label {
  font-weight: 500;
}
input {
  border-radius: 6px;
  border: 1px solid #d5d0cf;
  background: white;
  padding: 16px;
  font-size: 22px;
  outline: none;
}
::placeholder {
  font-size: 22px;
  color: #afadaa;
}
button {
  padding: 14px 20px;
  background: var(--bg-tertiary-color);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}
</style>