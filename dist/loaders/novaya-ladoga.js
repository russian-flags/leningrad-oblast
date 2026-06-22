import { createFlagImage } from "../image.js";
const src = new URL("../flags/novaya-ladoga.svg", import.meta.url).href;
function createImage(options) {
  return createFlagImage(src, "\u0424\u043B\u0430\u0433 \u041D\u043E\u0432\u0430\u044F \u041B\u0430\u0434\u043E\u0433\u0430", options);
}
var novaya_ladoga_default = createImage;
export {
  createImage,
  novaya_ladoga_default as default,
  src
};
