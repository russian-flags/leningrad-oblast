import { createFlagImage } from "../image.js";
const src = new URL("../flags/sosnovyy-bor.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0421\u043E\u0441\u043D\u043E\u0432\u044B\u0439 \u0411\u043E\u0440", options);
}
var sosnovyy_bor_default = createImage;
export {
  createImage,
  sosnovyy_bor_default as default,
  src
};
