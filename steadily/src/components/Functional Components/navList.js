"use strict";
import { h } from "vue";
const navlist = (props, { slots }) => {
  return h(
    "ul",
    {
      class: ["nav-list", "flex"],
      style: {
        flexDirection: props.flow,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        gap: props.gap,
      },
    },
    slots
  );
};

export default navlist;
