import { createFlagImage } from "../image.js";
const src = new URL("../flags/tosno.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0422\u043E\u0441\u043D\u043E", options);
}
var tosno_default = createImage;
export {
  createImage,
  tosno_default as default,
  src
};
