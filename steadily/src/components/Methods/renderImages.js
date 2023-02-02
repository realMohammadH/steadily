"use strict";
// import { URL } from "global";

function imageUrl(path) {
  const currentScript = document.currentScript;
  return new URL(path, currentScript ? currentScript.src : "").href;
}

export default imageUrl;
