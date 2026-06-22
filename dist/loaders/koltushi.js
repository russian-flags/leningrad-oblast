import { createFlagImage } from "../image.js";
const src = new URL("../flags/koltushi.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041A\u043E\u043B\u0442\u0443\u0448\u0438", options);
}
var koltushi_default = createImage;
export {
  createImage,
  koltushi_default as default,
  src
};
