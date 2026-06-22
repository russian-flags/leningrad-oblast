import { createFlagImage } from "../image.js";
const src = new URL("../flags/mga.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041C\u0433\u0430", options);
}
var mga_default = createImage;
export {
  createImage,
  mga_default as default,
  src
};
