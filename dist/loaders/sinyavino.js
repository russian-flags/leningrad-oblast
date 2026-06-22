import { createFlagImage } from "../image.js";
const src = new URL("../flags/sinyavino.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0421\u0438\u043D\u044F\u0432\u0438\u043D\u043E", options);
}
var sinyavino_default = createImage;
export {
  createImage,
  sinyavino_default as default,
  src
};
