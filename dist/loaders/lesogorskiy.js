import { createFlagImage } from "../image.js";
const src = new URL("../flags/lesogorskiy.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041B\u0435\u0441\u043E\u0433\u043E\u0440\u0441\u043A\u0438\u0439", options);
}
var lesogorskiy_default = createImage;
export {
  createImage,
  lesogorskiy_default as default,
  src
};
