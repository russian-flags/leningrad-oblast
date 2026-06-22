import { createFlagImage } from "../image.js";
const src = new URL("../flags/luga.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041B\u0443\u0433\u0430", options);
}
var luga_default = createImage;
export {
  createImage,
  luga_default as default,
  src
};
