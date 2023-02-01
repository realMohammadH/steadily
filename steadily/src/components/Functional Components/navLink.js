"use strict";
import { h } from "vue";
const navlink = (props, { slots }) => {
  return h(
    "a",
    {
      class: "nav-link",
      style: {
        display: "block",
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        color: props.color,
      },
    },
    slots
  );
};

export default navlink;
