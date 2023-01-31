"use strict";
// import { h, defineProps, computed } from "vue";
import { h } from "vue";

const wrapper = (props, { slots }) => {
  return h(
    "div",
    {
      class: "wrapper",
      style: {
        width: props.width,
        height: props.height,
        padding: props.padding,
        margin: props.margin,
        textAlign: props.textAlign,
        background: props.background,
        borderRadius: props.radius,
      },
    },
    slots
  );
};

export default wrapper;
