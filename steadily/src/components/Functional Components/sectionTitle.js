"use strict";
import { h } from "vue";
const sectionTitle = (props, { slots }) => {
  return h(
    "h2",
    {
      class: "title",
      style: {
        fontSize: props.fontSize,
        textAlign: props.textAlign,
        margin: props.margin,
        letterSpacing: props.letterSpacing,
        lineHeight: props.lineHeight,
        color: props.color,
      },
    },
    slots
  );
};

export default sectionTitle;
