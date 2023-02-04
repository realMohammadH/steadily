"use strict";
function imageUrl(path) {
  return new URL(path, import.meta.url).href;
}

function imageUrl(path) {
  return new URL(`../assets/images/${path}.png`, import.meta.url).href;
}
export default imageUrl;
