"use strict";
import { h } from "vue";
const anytext = (props, { slots }) => {
  let fontFamily;
  // props.activeSecondFont ? (fontFamily = "var(--title-font-family)") : "";
  if (props.activeSecondFont) {
    fontFamily = "var(--title-font-family)";
  }
  return h(
    props.tag,
    {
      class: props.class,
      style: {
        fontSize: props.fontSize,
        fontFamily: fontFamily,
        fontWeight: props.fontWeight,
        color: props.color,
        margin: props.margin,
        padding: props.padding
      },
    },
    slots
  );
};

export default anytext;
