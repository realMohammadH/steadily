"use strict";
import { h } from "vue";
const imageWrapper = (props, { slots }) => {
  return h(
    "figure",
    {
      class: "image-wrapper",
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

export default imageWrapper;
