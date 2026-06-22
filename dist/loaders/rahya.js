import { createFlagImage } from "../image.js";
const src = new URL("../flags/rahya.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0420\u0430\u0445\u044C\u044F", options);
}
var rahya_default = createImage;
export {
  createImage,
  rahya_default as default,
  src
};
