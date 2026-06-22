import { createFlagImage } from "../image.js";
const src = new URL("../flags/toksovo.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0422\u043E\u043A\u0441\u043E\u0432\u043E", options);
}
var toksovo_default = createImage;
export {
  createImage,
  toksovo_default as default,
  src
};
