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
      },
    },
    slots
  );
};

export default sectionTitle;
