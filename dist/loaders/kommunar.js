import { createFlagImage } from "../image.js";
const src = new URL("../flags/kommunar.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041A\u043E\u043C\u043C\u0443\u043D\u0430\u0440", options);
}
var kommunar_default = createImage;
export {
  createImage,
  kommunar_default as default,
  src
};
