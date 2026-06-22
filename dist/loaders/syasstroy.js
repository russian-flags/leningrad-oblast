import { createFlagImage } from "../image.js";
const src = new URL("../flags/syasstroy.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0421\u044F\u0441\u044C\u0441\u0442\u0440\u043E\u0439", options);
}
var syasstroy_default = createImage;
export {
  createImage,
  syasstroy_default as default,
  src
};
