import { createFlagImage } from "../image.js";
const src = new URL("../flags/fornosovo.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0424\u043E\u0440\u043D\u043E\u0441\u043E\u0432\u043E", options);
}
var fornosovo_default = createImage;
export {
  createImage,
  fornosovo_default as default,
  src
};
