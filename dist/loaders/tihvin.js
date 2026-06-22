import { createFlagImage } from "../image.js";
const src = new URL("../flags/tihvin.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0422\u0438\u0445\u0432\u0438\u043D", options);
}
var tihvin_default = createImage;
export {
  createImage,
  tihvin_default as default,
  src
};
