"use strict";
import { h } from "vue";
const sectionSubTitle = (props, { slots }) => {
  return h(
    "h3",
    {
      class: "section-sub_title",
      style: {
        fontSize: "18px",
        lineHeight: "28px",
        fontWeight: "400",
        color: "var(--font-secondary-color)",
        margin: props.margin,
      },
    },
    slots
  );
};

export default sectionSubTitle;
