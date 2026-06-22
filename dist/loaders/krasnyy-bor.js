import { createFlagImage } from "../image.js";
const src = new URL("../flags/krasnyy-bor.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u0411\u043E\u0440", options);
}
var krasnyy_bor_default = createImage;
export {
  createImage,
  krasnyy_bor_default as default,
  src
};
