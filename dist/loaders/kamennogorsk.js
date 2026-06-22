import { createFlagImage } from "../image.js";
const src = new URL("../flags/kamennogorsk.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041A\u0430\u043C\u0435\u043D\u043D\u043E\u0433\u043E\u0440\u0441\u043A", options);
}
var kamennogorsk_default = createImage;
export {
  createImage,
  kamennogorsk_default as default,
  src
};
