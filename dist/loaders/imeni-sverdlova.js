import { createFlagImage } from "../image.js";
const src = new URL("../flags/imeni-sverdlova.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0438\u043C\u0435\u043D\u0438 \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0430", options);
}
var imeni_sverdlova_default = createImage;
export {
  createImage,
  imeni_sverdlova_default as default,
  src
};
