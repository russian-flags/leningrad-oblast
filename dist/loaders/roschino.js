import { createFlagImage } from "../image.js";
const src = new URL("../flags/roschino.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0420\u043E\u0449\u0438\u043D\u043E", options);
}
var roschino_default = createImage;
export {
  createImage,
  roschino_default as default,
  src
};
