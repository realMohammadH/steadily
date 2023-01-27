<script setup>
import { h, ref, defineProps, computed } from "vue";

// My Functional Components
const mySection = (props, { slots }) => {
  return h(
    "section",
    {
      class: ["section", props.className],
      style: {
        padding: "64px 0",
        // backgroundColor:
      },
    },
    slots
  );
};

const container = (props, { slots }) => {
  return h(
    "div",
    {
      class: "container",
      style: {
        width: "1200px",
        margin: "0 auto",
      },
    },
    slots
  );
};

const btn = (props, { slots }) => {
  return h(
    "h",
    {
      class: ["btn", props.className],
      style: {
        fontSize: "18px",
        color: "white",
        background: "var(--bg-tertiary-color)",
        borderRadius: "6px",
        padding: "12px 20px",
      },
    },
    slots
  );
};

const title = (props, { slots }) => {
    const fontSize = ''
  return h(
    "h2",
    {
      class: "title",
      style: {
        fontFamily: "var(--title-font-family)",
      },
    },
    slots
  );
};


</script>

<template>
  <header></header>
  <main>
    <mySection className="hero">
      <container></container>
    </mySection>
  </main>
  <footer></footer>
</template>

<style scoped>
</style>
