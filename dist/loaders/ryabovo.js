import { createFlagImage } from "../image.js";
const src = new URL("../flags/ryabovo.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0420\u044F\u0431\u043E\u0432\u043E", options);
}
var ryabovo_default = createImage;
export {
  createImage,
  ryabovo_default as default,
  src
};
