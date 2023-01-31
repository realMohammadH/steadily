"use strict";
import { h } from "vue";
const flexbox = (props, { slots }) => {
  return h(
    "article",
    {
      class: ["flex", props.className],
      style: {
        width: props.width,
        height: props.height,
        padding: props.padding,
        flexDirection: props.flow,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        gap: props.gap,
      },
    },
    slots
  );
};

export default flexbox;
