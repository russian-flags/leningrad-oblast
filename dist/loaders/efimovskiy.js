import { createFlagImage } from "../image.js";
const src = new URL("../flags/efimovskiy.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0415\u0444\u0438\u043C\u043E\u0432\u0441\u043A\u0438\u0439", options);
}
var efimovskiy_default = createImage;
export {
  createImage,
  efimovskiy_default as default,
  src
};
