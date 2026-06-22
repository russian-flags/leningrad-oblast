import { createFlagImage } from "../image.js";
const src = new URL("../flags/pikalevo.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041F\u0438\u043A\u0430\u043B\u0451\u0432\u043E", options);
}
var pikalevo_default = createImage;
export {
  createImage,
  pikalevo_default as default,
  src
};
