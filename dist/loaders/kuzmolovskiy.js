import { createFlagImage } from "../image.js";
const src = new URL("../flags/kuzmolovskiy.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041A\u0443\u0437\u044C\u043C\u043E\u043B\u043E\u0432\u0441\u043A\u0438\u0439", options);
}
var kuzmolovskiy_default = createImage;
export {
  createImage,
  kuzmolovskiy_default as default,
  src
};
