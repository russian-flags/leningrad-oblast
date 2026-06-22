import { createFlagImage } from "../image.js";
const src = new URL("../flags/kirovsk.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041A\u0438\u0440\u043E\u0432\u0441\u043A", options);
}
var kirovsk_default = createImage;
export {
  createImage,
  kirovsk_default as default,
  src
};
