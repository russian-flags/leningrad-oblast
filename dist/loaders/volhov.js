import { createFlagImage } from "../image.js";
const src = new URL("../flags/volhov.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0412\u043E\u043B\u0445\u043E\u0432", options);
}
var volhov_default = createImage;
export {
  createImage,
  volhov_default as default,
  src
};
