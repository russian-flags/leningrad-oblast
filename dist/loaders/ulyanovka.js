import { createFlagImage } from "../image.js";
const src = new URL("../flags/ulyanovka.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u0423\u043B\u044C\u044F\u043D\u043E\u0432\u043A\u0430", options);
}
var ulyanovka_default = createImage;
export {
  createImage,
  ulyanovka_default as default,
  src
};
