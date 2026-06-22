import { createFlagImage } from "../image.js";
const src = new URL("../flags/priozersk.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041F\u0440\u0438\u043E\u0437\u0435\u0440\u0441\u043A", options);
}
var priozersk_default = createImage;
export {
  createImage,
  priozersk_default as default,
  src
};
