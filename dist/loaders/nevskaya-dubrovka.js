import { createFlagImage } from "../image.js";
const src = new URL("../flags/nevskaya-dubrovka.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041D\u0435\u0432\u0441\u043A\u0430\u044F \u0414\u0443\u0431\u0440\u043E\u0432\u043A\u0430", options);
}
var nevskaya_dubrovka_default = createImage;
export {
  createImage,
  nevskaya_dubrovka_default as default,
  src
};
