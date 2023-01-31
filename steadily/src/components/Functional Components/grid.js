"use strict";
import { h } from "vue";
const grid = (props, { slots }) => {
  return h(
    "article",
    {
      class: "grid",
      style: {
        gridAutoFlow: props.flow,
        gridGap: props.gap,
      },
    },
    slots
  );
};

export default grid;
