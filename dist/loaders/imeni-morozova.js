import { createFlagImage } from "../image.js";
const src = new URL("../flags/imeni-morozova.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0438\u043C\u0435\u043D\u0438 \u041C\u043E\u0440\u043E\u0437\u043E\u0432\u0430", options);
}
var imeni_morozova_default = createImage;
export {
  createImage,
  imeni_morozova_default as default,
  src
};
