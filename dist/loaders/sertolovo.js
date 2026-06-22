import { createFlagImage } from "../image.js";
const src = new URL("../flags/sertolovo.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0421\u0435\u0440\u0442\u043E\u043B\u043E\u0432\u043E", options);
}
var sertolovo_default = createImage;
export {
  createImage,
  sertolovo_default as default,
  src
};
