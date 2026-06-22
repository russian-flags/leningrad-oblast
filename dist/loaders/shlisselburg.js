import { createFlagImage } from "../image.js";
const src = new URL("../flags/shlisselburg.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0428\u043B\u0438\u0441\u0441\u0435\u043B\u044C\u0431\u0443\u0440\u0433", options);
}
var shlisselburg_default = createImage;
export {
  createImage,
  shlisselburg_default as default,
  src
};
