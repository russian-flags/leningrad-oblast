import { createFlagImage } from "../image.js";
const src = new URL("../flags/boksitogorsk.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0411\u043E\u043A\u0441\u0438\u0442\u043E\u0433\u043E\u0440\u0441\u043A", options);
}
var boksitogorsk_default = createImage;
export {
  createImage,
  boksitogorsk_default as default,
  src
};
