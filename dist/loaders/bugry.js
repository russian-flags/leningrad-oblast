import { createFlagImage } from "../image.js";
const src = new URL("../flags/bugry.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0411\u0443\u0433\u0440\u044B", options);
}
var bugry_default = createImage;
export {
  createImage,
  bugry_default as default,
  src
};
