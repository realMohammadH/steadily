"use strict";
import { h } from "vue";
const flexbox = (props, { slots }) => {
  return h(
    "article",
    {
      class: "flex",
      style: {
        width: props.width,
        height: props.height,
        padding: props.padding,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        gap: props.gap,
      },
    },
    slots
  );
};

export default flexbox;
