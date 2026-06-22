import { createFlagImage } from "../image.js";
const src = new URL("../flags/svetogorsk.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0421\u0432\u0435\u0442\u043E\u0433\u043E\u0440\u0441\u043A", options);
}
var svetogorsk_default = createImage;
export {
  createImage,
  svetogorsk_default as default,
  src
};
