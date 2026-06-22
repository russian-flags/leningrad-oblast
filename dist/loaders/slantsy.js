import { createFlagImage } from "../image.js";
const src = new URL("../flags/slantsy.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0421\u043B\u0430\u043D\u0446\u044B", options);
}
var slantsy_default = createImage;
export {
  createImage,
  slantsy_default as default,
  src
};
