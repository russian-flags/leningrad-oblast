import { createFlagImage } from "../image.js";
const src = new URL("../flags/siverskiy.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0421\u0438\u0432\u0435\u0440\u0441\u043A\u0438\u0439", options);
}
var siverskiy_default = createImage;
export {
  createImage,
  siverskiy_default as default,
  src
};
