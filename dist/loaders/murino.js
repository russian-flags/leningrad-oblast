import { createFlagImage } from "../image.js";
const src = new URL("../flags/murino.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041C\u0443\u0440\u0438\u043D\u043E", options);
}
var murino_default = createImage;
export {
  createImage,
  murino_default as default,
  src
};
