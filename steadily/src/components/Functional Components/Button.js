"use strict";
import { h } from "vue";
const btn = (props, { slots }) => {
  const color = props.color ?? "white";
  const backgroundColor = props.backgroundColor ?? "var(--bg-tertiary-color)";
  return h(
    "a",
    {
      class: ["btn", props.className],
      style: {
        display: "block",
        backgroundColor: backgroundColor,
        color: color,
        fontSize: "18px",
        padding: "12px 20px",
        fontWeight: "600",
        borderRadius: "6px",
        width: "fit-content",
      },
    },
    slots
  );
};

export default btn;
