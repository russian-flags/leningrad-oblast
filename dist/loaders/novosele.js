import { createFlagImage } from "../image.js";
const src = new URL("../flags/novosele.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041D\u043E\u0432\u043E\u0441\u0435\u043B\u044C\u0435", options);
}
var novosele_default = createImage;
export {
  createImage,
  novosele_default as default,
  src
};
