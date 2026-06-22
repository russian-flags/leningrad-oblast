import { createFlagImage } from "../image.js";
const src = new URL("../flags/kirishi.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041A\u0438\u0440\u0438\u0448\u0438", options);
}
var kirishi_default = createImage;
export {
  createImage,
  kirishi_default as default,
  src
};
