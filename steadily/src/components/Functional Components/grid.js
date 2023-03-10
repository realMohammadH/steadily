"use strict";
import { h } from "vue";
const grid = (props, { slots }) => {
  const width = props.width;
  const height = props.height;
  return h(
    "article",
    {
      class: "grid",
      style: {
        gridAutoFlow: props.flow,
        gridTemplateColumns: `repeat(auto-fit, ${width})`,
        gridTemplateRows: `repeat(auto-fit,${height})`,
        gridRowGap: props.rowGap,
        gridColumnGap: props.columnGap,
        gap: props.gap,
      },
    },
    slots
  );
};

export default grid;
