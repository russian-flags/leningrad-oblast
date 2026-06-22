import { createFlagImage } from "../image.js";
const src = new URL("../flags/ivangorod.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0418\u0432\u0430\u043D\u0433\u043E\u0440\u043E\u0434", options);
}
var ivangorod_default = createImage;
export {
  createImage,
  ivangorod_default as default,
  src
};
