import { createFlagImage } from "../image.js";
const src = new URL("../flags/priladozhskiy.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041F\u0440\u0438\u043B\u0430\u0434\u043E\u0436\u0441\u043A\u0438\u0439", options);
}
var priladozhskiy_default = createImage;
export {
  createImage,
  priladozhskiy_default as default,
  src
};
