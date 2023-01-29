"use strict";
// import { h, defineProps, computed } from "vue";
import { h } from "vue";

const box = (props, { slots }) => {
  //   const width = "100%" ?? props.width;
  //   const height = "100%" ?? props.height;
  return h(
    "div",
    {
      class: "content-wrapper",
      style: {
        width: props.width,
        height: props.height,
        padding: props.padding,
      },
    },
    slots
  );
};

export default box;
