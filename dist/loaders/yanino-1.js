import { createFlagImage } from "../image.js";
const src = new URL("../flags/yanino-1.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u042F\u043D\u0438\u043D\u043E-1", options);
}
var yanino_1_default = createImage;
export {
  createImage,
  yanino_1_default as default,
  src
};
