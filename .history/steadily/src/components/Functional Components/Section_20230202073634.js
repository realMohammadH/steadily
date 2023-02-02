"use strict";
import { h } from "vue";
const mySection = (props, { slots }) => {
  return h(
    "section",
    {
      class: ["section", props.className],
      style: {
        position: "relative",
        padding: "64px 0",
        background: props.background,
        height: props.height,
      },
    },
    slots
  );
};
