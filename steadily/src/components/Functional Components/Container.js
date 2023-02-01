"use strict";
import { h } from "vue";
const container = (props, { slots }) => {
  return h(
    "div",
    {
      class: "container",
      style: {
        position: "relative",
        width: "1200px",
        margin: "0 auto",
        height: props.height,
      },
    },
    slots
  );
};

export default container;
