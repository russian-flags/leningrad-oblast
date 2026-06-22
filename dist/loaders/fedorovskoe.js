import { createFlagImage } from "../image.js";
const src = new URL("../flags/fedorovskoe.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0424\u0451\u0434\u043E\u0440\u043E\u0432\u0441\u043A\u043E\u0435", options);
}
var fedorovskoe_default = createImage;
export {
  createImage,
  fedorovskoe_default as default,
  src
};
