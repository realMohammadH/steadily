"use strict";
// import { h, defineProps, computed } from "vue";
import { h } from "vue";

const box = (props, { slots }) => {
  return h(
    "div",
    {
      class: "content-wrapper",
      style: {
        width: props.width,
        height: props.height,
        padding: props.padding,
        margin: props.margin,
      },
    },
    slots
  );
};

export default box;
