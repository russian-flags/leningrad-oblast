import { createFlagImage } from "../image.js";
const src = new URL("../flags/nikolskiy.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041D\u0438\u043A\u043E\u043B\u044C\u0441\u043A\u0438\u0439", options);
}
var nikolskiy_default = createImage;
export {
  createImage,
  nikolskiy_default as default,
  src
};
